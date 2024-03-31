package lomDDeock.entity.menu;

import jakarta.persistence.*;
import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SideDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "menu_side_drink")
public class SideEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sideNo;
    private String type;
    private String menuName;
    private String thumb;
    private String descript;
    private int price;
    private String ip;
    @CreationTimestamp
    private LocalDateTime rdate;
    private String deleteYN;
    private int sideVersion;
    private String lastRevision;

    public SideDTO toDTO(){
        return SideDTO.builder()
                .sideNo(sideNo)
                .type(type)
                .menuName(menuName)
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
