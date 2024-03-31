package lomDDeock.dto.member;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WishListDTO {
    private int wishSeq;
    private String email;
    private int menuNo;

    // Menu
    private String menuName;
    private String thumb;
    private String descript;
    private int price;
}