package lomDDeock.dto.menu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MenuPageRequestDTO {
    @Builder.Default
    private int pg = 1;

    @Builder.Default
    private String cate = "normal";

    @Builder.Default
    private int size = 10;

}
