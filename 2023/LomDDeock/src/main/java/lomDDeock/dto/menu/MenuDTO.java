package lomDDeock.dto.menu;

import lomDDeock.entity.menu.MenuEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class MenuDTO {
    private String type;
    private int menuNo;
    private String menuName;
    private MultipartFile fileThumb;
    private String descript;
    private int sizeCount;
    private List<SizeDTO> sizeDTOs;

    private int price;
    private int spicyCount;
    private List<SpicyDTO> spicyDTOs;

    private String ip;
    private LocalDateTime rdate;
    private String deleteYN;
    private int menuVersion;
    private String lastRevision;
    private String thumb;

    private List<ToppingDTO> toppingDTOs;
    private SideDTO sideDTO;
  
    public MenuEntity toEntity(){
        return MenuEntity.builder()
                .menuNo(menuNo)
                .menuName(menuName)
                .thumb(thumb)
                .descript(descript)
                .sizeCount(sizeCount)
                .price(price)
                .spicyCount(spicyCount)
                .ip(ip)
                .rdate(rdate)
                .deleteYN(deleteYN== null? "Y" : deleteYN)
                .menuVersion(menuVersion==0? 1 : menuVersion)
                .lastRevision(lastRevision== null? "Y" : lastRevision)
                .build();
    }
}
