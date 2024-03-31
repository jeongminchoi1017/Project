package lomDDeock.dto.cs;

import lombok.Builder;
import lombok.Data;
import lombok.extern.log4j.Log4j2;

import java.util.List;

@Log4j2
@Data
public class CsPageResponseDTO {

    private int cno;

    private String group;
    private String cate;

    private List<CsDTO> csList;

    private int pg;
    private int size;
    private int total;

    private int start, end;
    private int last;
    private boolean prev, next;


    @Builder
    public CsPageResponseDTO(CsPageRequestDTO csPageRequestDTO, List<CsDTO> csList, int total, int cno) {
        this.cno = cno;

        this.group  = csPageRequestDTO.getGroup();
        this.cate  = csPageRequestDTO.getCate();
        this.pg  = csPageRequestDTO.getPg();
        this.total  = total;
        this.size = csPageRequestDTO.getSize();

        this.csList = csList;

        this.end   = (int) (Math.ceil(this.pg / 10.0)) * 10;
        this.start = this.end - 9;
        this.last  = (int) (Math.ceil(total / (double) size));

        this.end  = end > last ? last : end;
        this.prev = this.start > 1;
        this.next = total > this.end * this.size;
    }
}
