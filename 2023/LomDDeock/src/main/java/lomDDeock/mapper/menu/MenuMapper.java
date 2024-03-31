package lomDDeock.mapper.menu;

import lomDDeock.dto.menu.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
    public List<MenuDTO> selectMains();
    public MenuDTO selectMenuMenuNo(int menuNo);
    public List<SizeDTO> selectSizeMenuNo(int menuNo);
    public List<SpicyDTO> selectSpicyMenuNo(int menuNo);
    public List<ToppingDTO> selectToppingMenuNo(int menuNo);
    public List<SideDTO> selectSide();
    public List<MenuDTO> selectMenues(int start, int size);
    public List<SideDTO> selectSides(int start, int size);
    public List<SideDTO> selectDrinks(int start, int size);
    public int countMenu();
    public int countSide();
    public int countDrink();
}
