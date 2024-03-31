package lomDDeock.entity.cs;

import jakarta.persistence.*;
import lomDDeock.dto.cs.CsFileDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cs_file")
@Entity
@Builder
public class CsFileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fno;
    private int cno;
    @Column(name = "`group`")
    private String group;
    private String fileName;
    private String saveName;

    @CreationTimestamp
    private LocalDateTime rdate;


    public CsFileDTO toDTO() {
        return CsFileDTO.builder()
                .fno(fno)
                .cno(cno)
                .group(group)
                .fileName(fileName)
                .saveName(saveName)
                .rdate(rdate)
                .build();
    }

}
