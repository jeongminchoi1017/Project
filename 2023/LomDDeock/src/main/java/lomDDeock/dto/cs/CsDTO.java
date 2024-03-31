package lomDDeock.dto.cs;

import lomDDeock.entity.cs.CsEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CsDTO {

    private int cno;
    private String group;
    private int cate;
    private String title;
    private String content;
    private String registant;
    private String regip;
    private LocalDateTime rdate;
    private LocalDateTime beginDate;
    private int period;
    private int status;

    // cs_cate
    private int cateNo;
    private String cateName;

    // cs_reply
    private int qno;
    private String manager;
    private String reply;
    private LocalDateTime replyDate;
    private CsReplyDTO replyForm;

    // 파일 등록
    private MultipartFile fname;
    private List<MultipartFile> fnames; // 다중파일

    public CsEntity toEntity() {
        return CsEntity.builder()
                .cno(cno)
                .group(group)
                .cate(cate)
                .title(title)
                .content(content)
                .registant(registant)
                .regip(regip)
                .rdate(rdate)
                .beginDate(beginDate)
                .period(period)
                .status(status)
                .build();
    }
}
