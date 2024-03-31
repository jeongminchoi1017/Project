package com.rmsoft.controller.user;

import com.rmsoft.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user/check")
@RestController
public class UserCheckController {

    @Autowired
    private UserService userService;

    @GetMapping("/uid/{uid}")
    public int checkUid(@PathVariable("uid") String uid){
        return userService.countUid(uid);
    }
    @GetMapping("/nick/{nick}")
    public int checkNick(@PathVariable("nick") String nick){
        return userService.countNick(nick);
    }
    @GetMapping("/email/{email}")
    public int checkEmail(@PathVariable("email") String email){
        return userService.countEmail(email);
    }
    @GetMapping("/hp/{hp}")
    public int checkHp(@PathVariable("hp") String hp){
        return userService.countHp(hp);
    }
}
