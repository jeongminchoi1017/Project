package lomDDeock.entity.member;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lomDDeock.dto.member.MemberCouponHistoryDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Table(name = "memberCouponHistory")
public class MemberCouponHistoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int historySeq;
    private String email;
    private int couponId;
    private LocalDateTime couponExpireDate;
    private String useYn;
    @CreationTimestamp
    private LocalDateTime createdAt;

    public MemberCouponHistoryDTO toDTO() {
        return MemberCouponHistoryDTO.builder()
                .historySeq(historySeq)
                .email(email)
                .couponId(couponId)
                .couponExpireDate(couponExpireDate)
                .useYn(useYn)
                .createdAt(createdAt)
                .build();
    }
}