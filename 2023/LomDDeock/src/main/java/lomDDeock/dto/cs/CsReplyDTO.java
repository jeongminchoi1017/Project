package lomDDeock.dto.cs;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CsReplyDTO {
    private int qno;
    private int cno;
    private String manager;
    private String reply;
    private LocalDateTime rdate;
}