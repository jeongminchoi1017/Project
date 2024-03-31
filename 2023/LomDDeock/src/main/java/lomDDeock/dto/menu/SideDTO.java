package lomDDeock.dto.menu;

import lomDDeock.entity.menu.SideEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class SideDTO {
    private int sideNo;
    private String type;
    private String menuName;
    private MultipartFile fileThumb;
    private String descript;
    private int price;
    private String ip;
    private LocalDateTime rdate;
    private String deleteYN;
    private int sideVersion;
    private String lastRevision;

    private String thumb;

    public SideEntity toEntity(){
        return SideEntity.builder()
                .sideNo(sideNo)
                .type(type)
                .menuName(menuName)
                .thumb(thumb)
                .descript(descript)
                .price(price)
                .ip(ip)
                .rdate(rdate)
                .deleteYN(deleteYN== null? "Y" : deleteYN)
                .sideVersion(sideVersion==0? 1 : sideVersion)
                .lastRevision(lastRevision== null? "Y" : lastRevision)
                .build();
    }
}
