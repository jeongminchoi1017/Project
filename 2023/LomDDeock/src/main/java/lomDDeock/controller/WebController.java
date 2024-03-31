package lomDDeock.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping(value = {"", "/", "/menu/**", "/admin/**", "/my/**", "/brand/**", "/user/**", "/cs/**"})
    public String forward() {
        return "forward:/index.html";
    }
}