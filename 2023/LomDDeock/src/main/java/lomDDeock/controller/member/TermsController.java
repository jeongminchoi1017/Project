package lomDDeock.controller.member;

import lomDDeock.dto.member.TermsDTO;
import lomDDeock.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TermsController {
    private final MemberService memberService;

    @GetMapping("/terms")
    public ResponseEntity<TermsDTO> terms() {
        TermsDTO termsDTO = memberService.getTerms();
        return ResponseEntity.ok(termsDTO);
    }
}