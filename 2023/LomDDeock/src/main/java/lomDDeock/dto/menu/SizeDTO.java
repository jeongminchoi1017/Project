package lomDDeock.dto.menu;

import lomDDeock.entity.menu.SizeEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class SizeDTO {
    private int sizeNo;
    private int menuNo;
    private String size;

    public SizeEntity toEntity(){
        return SizeEntity.builder()
                .sizeNo(sizeNo)
                .menuNo(menuNo)
                .size(size)
                .build();
    }
}
