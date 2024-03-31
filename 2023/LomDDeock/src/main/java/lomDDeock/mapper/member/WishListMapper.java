package lomDDeock.mapper.member;

import lomDDeock.dto.member.WishListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface WishListMapper {
    public List<WishListDTO> getMyWishList(Map<String, Object> searchMap);
    public int getMyWishListTotal(Map<String, Object> searchMap);
}