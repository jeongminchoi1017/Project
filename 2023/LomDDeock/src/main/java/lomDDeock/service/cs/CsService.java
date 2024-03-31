package lomDDeock.service.cs;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.dto.cs.CsReplyDTO;
import lomDDeock.dto.member.CsListPageResponse;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.repository.cs.CsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CsService {
    private final CsMapper csMapper;
    private final CsRepository csRepository;

    // 로그인한 사용자의 문의내역 가져오기
    public CsListPageResponse getMyQnaList(MemberDTO memberDTO, int pg, int cateNo) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("cateNo", cateNo);
        searchMap.put("email", memberDTO.getEmail());
        List<CsDTO> dtoList = csMapper.getMyQnaList(searchMap);
        int total = csMapper.getMyQnaListTotal(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsListPageResponse getQnaList(int pg, int cateNo) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("cateNo", cateNo);
        List<CsDTO> dtoList = csMapper.getQnaList(searchMap);
        int total = csMapper.getQnaListTotal(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsListPageResponse getQnaListAdmin(int pg, int cateNo, String search) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("cateNo", cateNo);
        searchMap.put("search", search);
        List<CsDTO> dtoList = csMapper.getQnaList(searchMap);
        int total = csMapper.getQnaListTotal(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public List<CsCateDTO> getQnaCate() {
        return csMapper.getQnaCate();
    }

    public CsListPageResponse getEventList(int pg) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        int total = csMapper.getEventListTotal(searchMap);
        List<CsDTO> dtoList = csMapper.getEventList(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsDTO getEventView(int cno) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("cno", cno);
        return csMapper.getEventView(searchMap);
    }

    public CsListPageResponse getNoticeList(int pg) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        int total = csMapper.getNoticeListTotal(searchMap);
        List<CsDTO> dtoList = csMapper.getNoticeList(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsListPageResponse getFaqList(int pg, int cateNo) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("cateNo", cateNo);
        int total = csMapper.getFaqListTotal(searchMap);
        List<CsDTO> dtoList = csMapper.getFaqList(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsDTO getQnaView(int cno) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("cno", cno);
        CsDTO csDTO = csMapper.getQnaView(searchMap);
        CsReplyDTO csReplyDTO = csMapper.getQnaReply(searchMap);
        csDTO.setReplyForm(csReplyDTO);
        return csDTO;
    }

    public boolean deleteCs(CsDTO csDTO) {
        csRepository.deleteById(csDTO.getCno());
        return true;
    }

    public boolean sendQna(MemberDTO memberDTO, CsDTO csDTO) {
        CsEntity cs = CsEntity.builder()
                .group(csDTO.getGroup())
                .cate(csDTO.getCate())
                .title(csDTO.getTitle())
                .content(csDTO.getContent())
                .registant(memberDTO.getEmail())
                .build();
        return csRepository.save(cs).getCno() > 0;
    }

    public boolean sendEvent(MemberDTO memberDTO, CsDTO csDTO) {
        CsEntity cs = CsEntity.builder()
                .group(csDTO.getGroup())
                .title(csDTO.getTitle())
                .content(csDTO.getContent())
                .registant(memberDTO.getEmail())
                .build();
        return csRepository.save(cs).getCno() > 0;
    }

    public boolean modifyEvent(MemberDTO memberDTO, CsDTO csDTO) {
        CsEntity cs = csRepository.findById(csDTO.getCno()).get();
        cs.setTitle(csDTO.getTitle());
        cs.setContent(csDTO.getContent());
        return csRepository.save(cs).getCno() > 0;
    }
}