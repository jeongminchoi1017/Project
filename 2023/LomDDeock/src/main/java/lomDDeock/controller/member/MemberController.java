package lomDDeock.controller.member;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.member.*;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.service.member.MemberService;
import lomDDeock.service.member.SocialLoginService;
import lomDDeock.util.JwtIssuer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {
    private final MemberService memberService;
    private final SocialLoginService socialLoginService;
    private final JwtIssuer jwtIssuer;

    // 일반 회원가입
    @PostMapping("/local/signup")
    public ResponseEntity<MemberDTO> localSignUp(@RequestBody MemberDTO dto){
        return ResponseEntity.ok(memberService.localSignUp(dto));
    }

    // 소셜 회원가입
    @PostMapping("/social/signup")
    public ResponseEntity<MemberDTO> socialSignUp(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.socialSignUp(form));
    }

    // 일반 로그인
    @PostMapping("/local/signin")
    public ResponseEntity<JwtDTO> localSignIn(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.localSignIn(form));
    }

    // 소셜 로그인
    @PostMapping("/social/signin")
    public ResponseEntity<JwtDTO> socialSignIn(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.socialSignIn(form));
    }

    // 등록된 이메일인지 확인
    @GetMapping("/checkEmail")
    public ResponseEntity<Boolean> checkEmail(String email) {
        return ResponseEntity.ok(memberService.checkEmail(email));
    }

    // 이메일로 인증코드 발송
    @GetMapping("/getEmailCode")
    public ResponseEntity<Integer> getEmailCode(String email) {
        return ResponseEntity.ok(memberService.sendCodeByEmail(email));
    }

    // 인증코드 확인
    @GetMapping("/confirmEmailCode")
    public ResponseEntity<Integer> confirmEmailCode(String code) {
        return ResponseEntity.ok(memberService.confirmEmailCode(code));
    }

    // 토큰을 헤더에 담아서 넘겨주면 해당 토큰의 사용자 정보를 리턴
    @GetMapping("/info")
    public ResponseEntity<MemberDTO> info(@AuthenticationPrincipal MemberDTO member){
        return ResponseEntity.ok(member);
    }

    // 토큰기반으로 사용자의 보유 쿠폰 및 만료예정 쿠폰 수를 리턴
    @GetMapping("/getMyCouponCount")
    public ResponseEntity<MyCouponForm> getMyCouponCount(@AuthenticationPrincipal MemberDTO memberDTO){
        return ResponseEntity.ok(memberService.getMyCouponCount(memberDTO));
    }

    // 토큰기반으로 사용자의 쿠폰리스트를 리턴
    @GetMapping("/getMyCouponList")
    public ResponseEntity<MyCouponPageResponse> getMyCouponList(@AuthenticationPrincipal MemberDTO memberDTO,
                                                                @RequestParam(required = false, defaultValue = "1") int pg,
                                                                @RequestParam(required = false, defaultValue = "A") String useYn){
        return ResponseEntity.ok(memberService.getMyCouponList(memberDTO, pg, useYn));
    }

    // 토큰기반으로 사용자의 찜목록을 리턴
    @GetMapping("/getMyWishList")
    public ResponseEntity<MyWishListPageResponse> getMyWishList(@AuthenticationPrincipal MemberDTO memberDTO,
                                                                @RequestParam(required = false, defaultValue = "1") int pg){
        return ResponseEntity.ok(memberService.getMyWishList(memberDTO, pg));
    }
}