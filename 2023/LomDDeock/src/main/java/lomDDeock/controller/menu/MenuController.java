package lomDDeock.controller.menu;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.menu.*;
import lomDDeock.service.menu.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MenuController {

    private final MenuService menuService;
    private final SideService sideService;
    @ResponseBody
    @PostMapping("/menu/register")
    public void register (HttpServletRequest request, MenuDTO menuDTO) {

        log.info("menuDTO : " + menuDTO);
        if(menuDTO.getType().equals("normal")) {
            menuDTO.setIp(request.getRemoteAddr());
            menuService.save(menuDTO);
        }else {
            SideDTO sideDTO = new SideDTO();
            sideDTO.setIp(request.getRemoteAddr());
            sideDTO.setType(menuDTO.getType());
            sideDTO.setMenuName(menuDTO.getMenuName());
            sideDTO.setFileThumb(menuDTO.getFileThumb());
            sideDTO.setDescript(menuDTO.getDescript());
            sideDTO.setPrice(menuDTO.getPrice());
            sideService.save(sideDTO);
        }

    }
    @ResponseBody
    @GetMapping("/menu/MenuList")
    public MenuPageResponseDTO menuList (@RequestParam(name = "cate") String cate,
                                              @RequestParam(name = "page") int page,
                                              @RequestParam(name = "size") int size) {
        MenuPageRequestDTO menuPageRequestDTO = new MenuPageRequestDTO();
        menuPageRequestDTO.setCate(cate);
        menuPageRequestDTO.setPg(page);
        menuPageRequestDTO.setSize(size);
        log.info("menuPageRequestDTO: " + menuPageRequestDTO);
        MenuPageResponseDTO menuPageResponseDTO = menuService.selectMenu(menuPageRequestDTO);
        log.info("menuPageResponseDTO: " + menuPageResponseDTO);

        return menuPageResponseDTO;
    }
    @ResponseBody
    @GetMapping("/menu/MenuView")
    public MenuViewDTO menuView (@RequestParam(name = "cate") String cate,
                            @RequestParam(name = "menuNo") int menuNo) {
        MenuViewDTO menuViewDTO = null;
        log.info("cate : "+cate);
        log.info("menuNo : "+menuNo);
        if(cate.equals("normal")) {
            menuViewDTO = menuService.selectMenuView(menuNo);
        }

        log.info("menuViewDTO: " + menuViewDTO);

        return menuViewDTO;
    }

}
