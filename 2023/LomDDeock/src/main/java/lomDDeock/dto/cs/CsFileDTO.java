package lomDDeock.dto.cs;

import lomDDeock.entity.cs.CsFileEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CsFileDTO {

    private int fno;
    private int cno;
    private String group;
    private String fileName;
    private String saveName;
    private LocalDateTime rdate;

    public CsFileEntity toEntity() {
        return CsFileEntity.builder()
                .fno(fno)
                .cno(cno)
                .group(group)
                .fileName(fileName)
                .saveName(saveName)
                .rdate(rdate)
                .build();
    }
}
