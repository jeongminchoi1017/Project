package lomDDeock.service.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SideDTO;
import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SideEntity;
import lomDDeock.repository.menu.MenuRepository;
import lomDDeock.repository.menu.SideRepository;
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
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class SideService {

    private final SideRepository sideRepository;

    @Value("${upload.path.sides}")
    private String filepath;

    public void save(SideDTO sideDTO) {
        // 랜덤한 파일 이름 생성
        String uuidThumb = generateRandomFilename(sideDTO.getFileThumb().getOriginalFilename());
        SideEntity sideEntity = sideDTO.toEntity();
        sideEntity.setThumb(uuidThumb);
        sideRepository.save(sideEntity);

        // 파일을 경로에 저장
        String uploadPath = filepath;
        saveFile(uploadPath, sideDTO.getFileThumb(), uuidThumb);
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
