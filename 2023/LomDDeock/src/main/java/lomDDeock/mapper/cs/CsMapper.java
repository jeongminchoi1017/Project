package lomDDeock.mapper.cs;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsReplyDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface CsMapper {

    public List<CsDTO> selectCss(@Param("cate") String cate, int start);
    public int selectCountCs(@Param("cate") String cate);
    public List<CsDTO> selectNotice(int start);
    public int selectCountNotice();

    public int getMyQnaListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getMyQnaList(Map<String, Object> searchMap);
    public int getQnaListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getQnaList(Map<String, Object> searchMap);
    public int getEventListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getEventList(Map<String, Object> searchMap);
    public CsDTO getEventView(Map<String, Object> searchMap);
    public int getNoticeListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getNoticeList(Map<String, Object> searchMap);
    public int getFaqListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getFaqList(Map<String, Object> searchMap);
    public List<CsCateDTO> getQnaCate();
    public CsDTO getQnaView(Map<String, Object> searchMap);
    public CsReplyDTO getQnaReply(Map<String, Object> searchMap);
}
