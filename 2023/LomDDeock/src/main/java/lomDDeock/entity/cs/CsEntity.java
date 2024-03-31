package lomDDeock.entity.cs;

import jakarta.persistence.*;
import lomDDeock.dto.cs.CsDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cs")
@Entity
@Builder
public class CsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cno;
    @Column(name = "`group`")
    private String group;
    private int cate;
    private String title;
    private String content;
    private String registant;
    private String regip;

    @CreationTimestamp
    private LocalDateTime rdate;
    private LocalDateTime beginDate;
    private int period;
    private int status;

    public CsDTO toDTO() {
        return CsDTO.builder()
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
