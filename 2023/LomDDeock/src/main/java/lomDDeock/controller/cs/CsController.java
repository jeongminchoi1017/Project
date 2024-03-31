package lomDDeock.controller.cs;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.dto.member.CsListPageResponse;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.service.cs.CsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CsController {
    private final CsService csService;

    // 토큰기반으로 사용자의 문의내역을 리턴
    @GetMapping("/getMyQnaList")
    public ResponseEntity<CsListPageResponse> getMyQnaList(@AuthenticationPrincipal MemberDTO memberDTO,
                                                           @RequestParam(required = false, defaultValue = "1") int pg,
                                                           @RequestParam(required = false, defaultValue = "0") int cateNo){
        return ResponseEntity.ok(csService.getMyQnaList(memberDTO, pg, cateNo));
    }

    // Qna 카테고리 반환
    @GetMapping("/getQnaCate")
    public ResponseEntity<List<CsCateDTO>> getQnaCate(){
        return ResponseEntity.ok(csService.getQnaCate());
    }

    @GetMapping("/getQnaList")
    public ResponseEntity<CsListPageResponse> getQnaList(@RequestParam(required = false, defaultValue = "1") int pg,
                                                        @RequestParam(required = false, defaultValue = "0") int cateNo){
        return ResponseEntity.ok(csService.getQnaList( pg, cateNo));
    }

    @GetMapping("/getQnaListAdmin")
    public ResponseEntity<CsListPageResponse> getQnaListAdmin(@RequestParam(required = false, defaultValue = "1") int pg,
                                                        @RequestParam(required = false, defaultValue = "0") int cateNo,
                                                        @RequestParam(required = false, defaultValue = "") String search){
        return ResponseEntity.ok(csService.getQnaListAdmin( pg, cateNo, search));
    }

    @GetMapping("/getEventList")
    public ResponseEntity<CsListPageResponse> getEventList(@RequestParam(required = false, defaultValue = "1") int pg){
        return ResponseEntity.ok(csService.getEventList(pg));
    }

    @GetMapping("/getEventView")
    public ResponseEntity<CsDTO> getEventView(@RequestParam int cno){
        return ResponseEntity.ok(csService.getEventView(cno));
    }

    @GetMapping("/getNoticeList")
    public ResponseEntity<CsListPageResponse> getNoticeList(@RequestParam(required = false, defaultValue = "1") int pg){
        return ResponseEntity.ok(csService.getNoticeList(pg));
    }

    @GetMapping("/getFaqList")
    public ResponseEntity<CsListPageResponse> getFaqList(@RequestParam(required = false, defaultValue = "1") int pg,
                                                         @RequestParam(required = false, defaultValue = "10") int cateNo){
        return ResponseEntity.ok(csService.getFaqList(pg, cateNo));
    }

    @GetMapping("/getQnaView")
    public ResponseEntity<CsDTO> getQnaView(@RequestParam int cno){
        return ResponseEntity.ok(csService.getQnaView(cno));
    }

    @PostMapping("/deleteCs")
    public ResponseEntity<Boolean> deleteCs(@RequestBody CsDTO csDTO) {
        return ResponseEntity.ok(csService.deleteCs(csDTO));
    }

    @PostMapping("/sendQna")
    public ResponseEntity<Boolean> sendQna(@AuthenticationPrincipal MemberDTO memberDTO, @RequestBody CsDTO csDTO) {
        return ResponseEntity.ok(csService.sendQna(memberDTO, csDTO));
    }

    @PostMapping("/sendEvent")
    public ResponseEntity<Boolean> sendEvent(@AuthenticationPrincipal MemberDTO memberDTO, @RequestBody CsDTO csDTO) {
        return ResponseEntity.ok(csService.sendEvent(memberDTO, csDTO));
    }

    @PostMapping("/modifyEvent")
    public ResponseEntity<Boolean> modifyEvent(@AuthenticationPrincipal MemberDTO memberDTO, @RequestBody CsDTO csDTO) {
        return ResponseEntity.ok(csService.modifyEvent(memberDTO, csDTO));
    }
}