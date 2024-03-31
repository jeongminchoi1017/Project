package com.rmsoft.controller.user;

import com.rmsoft.dto.UserDTO;
import com.rmsoft.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/login")
    public String login(){
        return "/user/login";
    }
    @GetMapping("/user/register")
    public String register(){
        return "/user/register";
    }
    @PostMapping("/user/register")
    public String register(HttpServletRequest request, UserDTO dto){
        dto.setRegip(request.getRemoteAddr());

        userService.insertUser(dto);
        return "redirect:/user/login";
    }
}