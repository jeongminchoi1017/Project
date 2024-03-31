package lomDDeock.controller.admin.cs;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageRequestDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.service.cs.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminNoticeController {

    private final NoticeService noticeService;

    @PostMapping("/admin/notice/adminNoticeWrite")
    public void AdminNoticeWrite(HttpServletRequest request, CsDTO csDTO){
        log.info("AdminNoticeWrite : "+csDTO);
        csDTO.setRegip(request.getRemoteAddr());

        noticeService.insertNotice(csDTO);
    }

    @GetMapping("/admin/notice/adminNoticeList")
    public CsPageResponseDTO AdminNoticeList(@RequestParam(name = "page", defaultValue = "1") int page) {
        log.info("AdminNoticeList...1");

        CsPageRequestDTO csPageRequestDTO = new CsPageRequestDTO();
        csPageRequestDTO.setPg(page);

        CsPageResponseDTO dto = noticeService.selectNotices(csPageRequestDTO);

        return dto;
    }

    @DeleteMapping("/admin/notice/adminNoticeDelete/{cno}")
    public void AdminNoticeDelete(@PathVariable int cno){
        log.info("AdminNoticeDelete...1 cno : "+cno);

        noticeService.deleteNotice(cno);
    }
}
