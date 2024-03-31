package lomDDeock.mapper.member;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.member.MemberCouponHistoryDTO;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.dto.member.MyCouponForm;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface MemberCouponHistoryMapper {
    public MyCouponForm getMyCouponCount(Map<String, Object> searchMap);
    public int getMyCouponTotal(Map<String, Object> searchMap);
    public List<MemberCouponHistoryDTO> getMyCouponList(Map<String, Object> searchMap);
}