package com.rmsoft.controller.subscribe;

import com.rmsoft.dto.ListDTO;
import com.rmsoft.dto.SubscribeDTO;
import com.rmsoft.dto.TypeDTO;
import com.rmsoft.dto.UserDTO;
import com.rmsoft.security.MyUserDetails;
import com.rmsoft.service.SubscribeService;
import com.rmsoft.service.TypeService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Log4j2
@Controller
@CrossOrigin(origins = "http://localhost:8080/")
public class SubscribeController {
    @Autowired
    private SubscribeService subscribeService;
    @Autowired
    private TypeService typeService;

    // 글목록 조회
    @GetMapping("/subscribe/list")
    public String list(Model model, @AuthenticationPrincipal Object principal){
        UserDTO user = ((MyUserDetails) principal).getUser(); //@통해 현재 로그인 사용자 정보 가지고옴 다만 데이터 타입때문에 업캐스팅 해둠
        log.info("user : " + user.getUid());
        String uid = user.getUid();
        subscribeService.updateSubscribe(uid);
        ListDTO subscribe = subscribeService.selectSubscribe(uid);
        log.info("subscribe : " + subscribe);
        // 구독한 서비스가 없을 때 신청 페이지로 넘김
        if(subscribe == null){
            return "redirect:/subscribe/write";
        }else {
            model.addAttribute("subscribe", subscribe);
            return "/subscribe/list";
        }

    }
    @GetMapping("/subscribe/write")
    public String write(Model model){

        List<TypeDTO> types = typeService.selectTypes();

        model.addAttribute("types", types);

        return "/subscribe/write";
    }
    @ResponseBody
    @PostMapping("/subscribe/write")
    public void register(@RequestBody SubscribeDTO dto){
        subscribeService.insertSubscribe(dto);
    }
    @ResponseBody
    @PutMapping("/subscribe/updateEnd")
    public void updateEnd(@AuthenticationPrincipal Object principal){
        UserDTO user = ((MyUserDetails) principal).getUser(); //@통해 현재 로그인 사용자 정보 가지고옴 다만 데이터 타입때문에 업캐스팅 해둠
        log.info("user : " + user.getUid());
        String uid = user.getUid();
        subscribeService.updateEnd(uid);

    }

}
