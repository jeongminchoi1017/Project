package lomDDeock.service.member;

import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.member.*;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.entity.member.MemberEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.mapper.member.MemberCouponHistoryMapper;
import lomDDeock.mapper.member.TermsMapper;
import lomDDeock.mapper.member.WishListMapper;
import lomDDeock.repository.member.MemberRepository;
import lomDDeock.util.JwtIssuer;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Log4j2
@Service
@RequiredArgsConstructor
public class MemberService implements UserDetailsService {
    // Repository
    private final MemberRepository memberRepository;

    // Mapper
    private final TermsMapper termsMapper;
    private final MemberCouponHistoryMapper memberCouponHistoryMapper;
    private final WishListMapper wishListMapper;

    // Utill
    private final PasswordEncoder passwordEncoder;
    private final JwtIssuer jwtIssuer;
    private final JavaMailSender javaMailSender;
    private static String generatedCode; // 인증코드 생성 시 사용할 변수

    public boolean checkMember(String email) {
        Optional<MemberEntity> memberEntity = memberRepository.findByEmail(email);
        return  memberEntity.isEmpty();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return getMemberByEmail(email);
    }

    public MemberDTO localSignUp(MemberDTO dto) {
        dto.setProvider(MemberProvider.LOCAL);
        dto.setRole(MemberRole.USER);
        dto.setPassword(passwordEncoder.encode(dto.getPassword()));
        if(memberRepository.existsByEmail(dto.getEmail())){
            throw new RuntimeException("사용중인 이메일입니다.");
        }
        return memberRepository.save(dto.toEntity()).toDTO();
    }

    public MemberDTO socialSignUp(SignUpForm form) {
        if(memberRepository.existsByEmail(form.getEmail())){
            throw new RuntimeException("사용중인 이메일입니다.");
        }
        return memberRepository.save(MemberEntity.builder()
                .email(form.getEmail())
                .role(MemberRole.USER)
                .provider(MemberProvider.KAKAO)
                .build()).toDTO();
    }

    public JwtDTO localSignIn(SignUpForm form) {
        MemberDTO member = getMemberByEmail(form.getEmail());

        if (member == null || !passwordEncoder.matches(form.getPassword(), member.getPassword())) {
            return null;
        }

        return createToken(member);
    }

    public JwtDTO socialSignIn(SignUpForm form) {
        MemberDTO member;
        try {
            member = getMemberByEmail(form.getEmail());
        }catch (UsernameNotFoundException e) {
            member = memberRepository.save(MemberDTO.builder()
                    .email(form.getEmail())
                    .role(MemberRole.USER)
                    .provider(MemberProvider.KAKAO)
                    .build().toEntity()).toDTO();
        }

        return createToken(member);
    }

    public JwtDTO createToken(MemberDTO member) {
        return jwtIssuer.createToken(member.getEmail(), member.getRole().name());
    }

    private MemberDTO getMemberByEmail(String email) {
        return memberRepository.findByEmail(email)
                .map(MemberEntity::toDTO)
                .orElse(null);
    }

    // 약관 가져오기
    public TermsDTO getTerms() {
        return termsMapper.findTerms();
    }

    // 이메일이 등록이 되었는지 확인하기
    public boolean checkEmail(String email) {
        return memberRepository.existsByEmail(email);
    }

    // 이메일로 인증코드 발송
    public int sendCodeByEmail(String email) {
        int status = 0;
        int code = ThreadLocalRandom.current().nextInt(100000, 1000000);
        generatedCode = String.valueOf(code);
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
            mimeMessageHelper.setFrom(new InternetAddress("LomDDeock@lombok.com", "LomDDeock", "UTF-8"));
            mimeMessageHelper.setTo(email); // 메일 수신자
            mimeMessageHelper.setSubject("[LomDDeock] 이메일 인증 코드입니다."); // 메일 제목
            mimeMessageHelper.setText("<h1>인증코드는 "+code+" 입니다.</h1>", true); // 메일 내용
            javaMailSender.send(mimeMessage);

            status = 1; // 메일 발송 시 status 1

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return status;
    }

    // 인증코드 체크
    public int confirmEmailCode(String code) {
        if (code.equals(generatedCode)) {
            return 1;
        } else {
            return 0;
        }
    }

    // 로그인한 사용자의 보유 쿠폰 및 만료예정 쿠폰 수를 리턴
    public MyCouponForm getMyCouponCount(MemberDTO memberDTO) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 현재 날짜와 시간 가져오기
        LocalDateTime today = LocalDateTime.now();

        // 30일 뒤의 날짜 계산
        LocalDateTime futureDate = today.plusDays(30);

        // MySQL의 DateTime 형식으로 변환
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String todayFormatted = today.format(formatter);
        String futureDateFormatted = futureDate.format(formatter);

        // 검색조건 넣기
        searchMap.put("today", todayFormatted);
        searchMap.put("futureDate", futureDateFormatted);
        searchMap.put("email", memberDTO.getEmail());
        return memberCouponHistoryMapper.getMyCouponCount(searchMap);
    }

    // 로그인한 사용자의 쿠폰 목록 가져오기
    public MyCouponPageResponse getMyCouponList(MemberDTO memberDTO, int pg, String useYn) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        
        // 현재 날짜와 시간 가져오기
        LocalDateTime today = LocalDateTime.now();

        // 30일 뒤의 날짜 계산
        LocalDateTime futureDate = today.plusDays(30);

        // MySQL의 DateTime 형식으로 변환
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String todayFormatted = today.format(formatter);
        String futureDateFormatted = futureDate.format(formatter);
        
        // 검색조건 넣기
        searchMap.put("today", todayFormatted);
        searchMap.put("futureDate", futureDateFormatted);
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("useYn", useYn);
        searchMap.put("email", memberDTO.getEmail());
        List<MemberCouponHistoryDTO> dtoList = memberCouponHistoryMapper.getMyCouponList(searchMap);
        int total = memberCouponHistoryMapper.getMyCouponTotal(searchMap);
        return MyCouponPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }
    // 로그인한 사용자의 찜목록 가져오기
    public MyWishListPageResponse getMyWishList(MemberDTO memberDTO, int pg) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("email", memberDTO.getEmail());
        List<WishListDTO> dtoList = wishListMapper.getMyWishList(searchMap);
        int total = wishListMapper.getMyWishListTotal(searchMap);
        return MyWishListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }
}