package lomDDeock.mapper.member;

import lomDDeock.dto.member.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    public MemberDTO findByUid(String uid);
}