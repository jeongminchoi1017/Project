package lomDDeock.dto.menu;

import lomDDeock.entity.menu.ToppingEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class ToppingDTO {
    private int toppingNo;
    private int menuNo;
    private String topping;
    private MultipartFile toppingFile;
    private String file;
    private int toppingPrice;
    private String deleteYN;
    private int toppingVersion;
    private String lastRevision;

    public ToppingEntity toEntity(){
        return ToppingEntity.builder()
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
