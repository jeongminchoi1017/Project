package lomDDeock.entity.menu;

import jakarta.persistence.*;
import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.entity.member.MemberEntity;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "menu")
public class MenuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int menuNo;
    private String menuName;
    private String thumb;
    private String descript;
    private int sizeCount;
    private int price;
    private int spicyCount;
    private String ip;
    @CreationTimestamp
    private LocalDateTime rdate;
    private String deleteYN;
    private int menuVersion;
    private String lastRevision;

    public MenuDTO toDTO(){
        return MenuDTO.builder()
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
