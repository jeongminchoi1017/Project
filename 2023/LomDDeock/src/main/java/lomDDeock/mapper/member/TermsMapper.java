package lomDDeock.mapper.member;

import lomDDeock.dto.member.TermsDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TermsMapper {
    public TermsDTO findTerms();
}