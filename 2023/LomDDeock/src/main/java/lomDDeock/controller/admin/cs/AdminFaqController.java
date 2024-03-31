package lomDDeock.controller.admin.cs;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageRequestDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.service.cs.FaqService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminFaqController {

    private final FaqService faqService;

    @PostMapping("/admin/faq/adminFaqRegister")
    public void adminFaqWrite(@RequestBody CsDTO data,HttpServletRequest request){
        log.info("adminFaqWrite : "+data);
        data.setRegip(request.getRemoteAddr());
        data.setContent(data.getContent().replaceAll("\r\n", "<br/>"));

        faqService.insertCs(data);
    }

    @ResponseBody
    @GetMapping("/admin/faq/adminFaqList")
    public CsPageResponseDTO adminFaqList(@RequestParam(name = "cate", required = false) String cate,
                                            @RequestParam(name = "page", defaultValue = "1") int page) {
        log.info("adminFaqList...1 " + cate);

        // 전체 조회 및 cate 구분
        String cateParam = (cate == null || cate.trim().isEmpty()) ? "0" : cate.trim();
        log.info("cateParam :" + cateParam);


        CsPageRequestDTO csPageRequestDTO = new CsPageRequestDTO();
        csPageRequestDTO.setCate(cateParam);
        csPageRequestDTO.setPg(page);

        CsPageResponseDTO dto = faqService.selectCsBoards(cateParam, csPageRequestDTO);
        log.info(dto);

        return dto;
    }

    @ResponseBody
    @PutMapping("/admin/faq/adminFaqModify")
    public CsDTO adminFaqModify(@RequestBody CsDTO csDTO){
        log.info("adminFaqModify : "+csDTO);
        faqService.updateCs(csDTO);
        CsDTO modifyData = faqService.selectCsBoard(csDTO.getCno());

        return modifyData;
    }

    @PostMapping("/admin/faq/adminFaqDelete/{cno}")
    public void adminFaqDelete(@PathVariable int cno){
        log.info("adminFaqDelete...1 "+cno);

        faqService.hideCs(cno);
    }
}
