package lomDDeock.entity.menu;

import jakarta.persistence.*;
import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.ToppingDTO;
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
@Table(name = "menu_topping")
public class ToppingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int toppingNo;
    private int menuNo;
    private String topping;
    private String file;
    private int toppingPrice;
    private String deleteYN;
    private int toppingVersion;
    private String lastRevision;

    public ToppingDTO toDTO(){
        return ToppingDTO.builder()
                .toppingNo(toppingNo)
                .menuNo(menuNo)
                .topping(topping)
                .file(file)
                .toppingPrice(toppingPrice)
                .deleteYN(deleteYN== null? "Y" : deleteYN)
                .toppingVersion(toppingVersion==0? 1 : toppingVersion)
                .lastRevision(lastRevision== null? "Y" : lastRevision)
                .build();
    }
}
