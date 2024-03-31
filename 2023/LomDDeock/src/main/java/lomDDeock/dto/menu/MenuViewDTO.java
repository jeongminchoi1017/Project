package lomDDeock.dto.menu;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class MenuViewDTO {
    private MenuDTO menu;
    private List<ToppingDTO> toppings;
    private List<SizeDTO> sizes;
    private List<SpicyDTO> spicies;
    private List<SideDTO> side;

    @Builder
    public MenuViewDTO (MenuDTO menu, List<SizeDTO> sizes, List<SpicyDTO> spicies, List<ToppingDTO> toppings, List<SideDTO> side) {
        this.menu = menu;
        this.sizes = sizes;
        this.spicies = spicies;
        this.toppings = toppings;
        this.side = side;
    }
}
