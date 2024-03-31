package lomDDeock.service.menu;

import lomDDeock.dto.menu.*;
import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SizeEntity;
import lomDDeock.entity.menu.SpicyEntity;
import lomDDeock.entity.menu.ToppingEntity;
import lomDDeock.mapper.menu.MenuMapper;
import lomDDeock.repository.menu.MenuRepository;
import lomDDeock.repository.menu.SizeRepository;
import lomDDeock.repository.menu.SpicyRepository;
import lomDDeock.repository.menu.ToppingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final SizeRepository sizeRepository;
    private final SpicyRepository spicyRepository;
    private final ToppingRepository toppingRepository;
    private final MenuMapper menuMapper;

    @Value("${upload.path.thumbs}")
    private String filepath;
    @Value("${upload.path.toppings}")
    private String toppingPath;

    public void save(MenuDTO menuDTO) {
        // 랜덤한 파일 이름 생성
        String uuidThumb = generateRandomFilename(menuDTO.getFileThumb().getOriginalFilename());
        MenuEntity menuEntity = menuDTO.toEntity();
        menuEntity.setThumb(uuidThumb);
        MenuEntity savedMenuEntity = menuRepository.save(menuEntity);

        for(int i=0; i< menuDTO.getSizeDTOs().size(); i++){
            SizeDTO sizeDTO = new SizeDTO();
            sizeDTO.setMenuNo(savedMenuEntity.getMenuNo());
            sizeDTO.setSize(menuDTO.getSizeDTOs().get(i).getSize());
            SizeEntity sizeEntity = sizeDTO.toEntity();
            sizeRepository.save(sizeEntity);
        }
        for(int i=0; i< menuDTO.getSpicyDTOs().size(); i++){
            SpicyDTO spicyDTO = new SpicyDTO();
            spicyDTO.setMenuNo(savedMenuEntity.getMenuNo());
            spicyDTO.setSpicy(menuDTO.getSpicyDTOs().get(i).getSpicy());
            SpicyEntity spicyEntity = spicyDTO.toEntity();
            spicyRepository.save(spicyEntity);
        }
        for(int i=0; i< menuDTO.getToppingDTOs().size(); i++){
            ToppingDTO toppingDTO = new ToppingDTO();
            toppingDTO.setMenuNo(savedMenuEntity.getMenuNo());
            toppingDTO.setTopping(menuDTO.getToppingDTOs().get(i).getTopping());
            toppingDTO.setToppingPrice(menuDTO.getToppingDTOs().get(i).getToppingPrice());
            // 랜덤한 파일 이름 생성
            String uuidTopping = generateRandomFilename(menuDTO.getToppingDTOs().get(i).getToppingFile().getOriginalFilename());
            ToppingEntity toppingEntity = toppingDTO.toEntity();
            toppingEntity.setFile(uuidTopping);
            toppingRepository.save(toppingEntity);
            // 파일을 경로에 저장
            String uploadPath = toppingPath;
            saveFile(uploadPath, menuDTO.getToppingDTOs().get(i).getToppingFile(), uuidTopping);
        }


        // 파일을 경로에 저장
        String uploadPath = filepath;
        saveFile(uploadPath, menuDTO.getFileThumb(), uuidThumb);

    }
    public MenuViewDTO selectMenuView(int menuNo){
        MenuDTO menuDTO = menuMapper.selectMenuMenuNo(menuNo);
        List<SizeDTO> sizeDTO = menuMapper.selectSizeMenuNo(menuNo);
        List<SpicyDTO> spicyDTO = menuMapper.selectSpicyMenuNo(menuNo);
        List<ToppingDTO> toppingDTO = menuMapper.selectToppingMenuNo(menuNo);
        List<SideDTO> sideDTO = menuMapper.selectSide();

        MenuViewDTO menuViewDTO = new MenuViewDTO(menuDTO, sizeDTO, spicyDTO, toppingDTO, sideDTO);
        return menuViewDTO;
    }
    public List<MenuDTO> selectMains(){
        List<MenuDTO> mains = menuMapper.selectMains();
        return mains;
    }
    public MenuPageResponseDTO selectMenu(MenuPageRequestDTO menuPageRequestDTO) {
        MenuPageResponseDTO menuResponseDTO = null;
        if(menuPageRequestDTO.getCate().equals("normal")){

            int total = menuMapper.countMenu();
            menuResponseDTO = new MenuPageResponseDTO(menuPageRequestDTO, total);
            List<MenuDTO> menues= menuMapper.selectMenues(menuResponseDTO.getStartNum(), menuPageRequestDTO.getSize());
            log.info("menues : "+menues);
            menuResponseDTO.setMenues(menues);
        }else if(menuPageRequestDTO.getCate().equals("side")){
            int total = menuMapper.countSide();
            menuResponseDTO = new MenuPageResponseDTO(menuPageRequestDTO, total);
            List<SideDTO> sides = menuMapper.selectSides(menuResponseDTO.getStartNum(), menuPageRequestDTO.getSize());
            log.info("sides : "+sides);
            menuResponseDTO.setSides(sides);
        }else {
            int total = menuMapper.countDrink();
            menuResponseDTO = new MenuPageResponseDTO(menuPageRequestDTO, total);
            List<SideDTO> sides = menuMapper.selectDrinks(menuResponseDTO.getStartNum(), menuPageRequestDTO.getSize());
            log.info("sides : "+sides);
            menuResponseDTO.setSides(sides);
        }
        return menuResponseDTO;
    }

    // 파일을 실제 경로에 저장하는 메소드
    private void saveFile(String uploadPath, MultipartFile fileData, String fileName) {
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        try {
            byte[] bytes = fileData.getBytes();
            Path path = Paths.get(uploadPath + fileName);
            Files.write(path, bytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    // UUID를 사용하여 랜덤한 파일 이름을 생성하고 원래 파일의 확장자를 유지
    private String generateRandomFilename(String originalFilename) {
        String fileExtension = "";
        int lastDotIndex = originalFilename.lastIndexOf(".");

        if (lastDotIndex >= 0) {
            fileExtension = originalFilename.substring(lastDotIndex);
        }

        UUID uuid = UUID.randomUUID();
        String randomFilename = uuid.toString() + fileExtension;

        return randomFilename;
    }

}
