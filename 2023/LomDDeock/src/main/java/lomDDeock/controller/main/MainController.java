package lomDDeock.controller.main;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.service.menu.MenuService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MainController {

    private final MenuService menuService;

    @GetMapping("main/list")
    public List<MenuDTO> mainList(){
        List<MenuDTO> mains = menuService.selectMains();
        return mains;
    }
}
