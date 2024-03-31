package lomDDeock.entity.member;

import jakarta.persistence.*;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.dto.member.MemberProvider;
import lomDDeock.dto.member.MemberRole;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "member")
@Entity
@Builder
public class MemberEntity {
    @Id
    private String email;
    private String password;
    private String hp;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MemberRole role;
    private String zip;
    private String addr1;
    private String addr2;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MemberProvider provider;
    @CreationTimestamp
    private LocalDateTime rdate;
    private LocalDateTime wdate;

    public MemberDTO toDTO() {
        return MemberDTO.builder()
                .email(email)
                .password(password)
                .hp(hp)
                .role(role)
                .zip(zip)
                .addr1(addr1)
                .addr2(addr2)
                .provider(provider)
                .rdate(rdate)
                .wdate(wdate)
                .build();
    }
}