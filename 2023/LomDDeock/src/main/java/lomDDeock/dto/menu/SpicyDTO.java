package lomDDeock.dto.menu;

import lomDDeock.entity.menu.SpicyEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class SpicyDTO {
    private int spicyNo;
    private int menuNo;
    private String spicy;

    public SpicyEntity toEntity(){
        return SpicyEntity.builder()
                .spicyNo(spicyNo)
                .menuNo(menuNo)
                .spicy(spicy)
                .build();
    }
}
