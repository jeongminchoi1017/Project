package lomDDeock.entity.menu;

import jakarta.persistence.*;
import lomDDeock.dto.menu.SizeDTO;
import lomDDeock.dto.menu.SpicyDTO;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "menu_spicy")
public class SpicyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int spicyNo;
    private int menuNo;
    private String spicy;

    public SpicyDTO toDTO(){
        return SpicyDTO.builder()
                .spicyNo(spicyNo)
                .menuNo(menuNo)
                .spicy(spicy)
                .build();
    }
}
