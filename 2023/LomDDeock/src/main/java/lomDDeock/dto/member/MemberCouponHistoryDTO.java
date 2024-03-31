package lomDDeock.dto.member;

import lomDDeock.entity.member.MemberCouponHistoryEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class MemberCouponHistoryDTO {
    private int historySeq;
    private String email;
    private int couponId;
    private LocalDateTime couponExpireDate;
    private String useYn;
    private LocalDateTime createdAt;

    // 추가필드
    private String couponName;
    private String couponApply;
    private int discountMoney;
    private int discountPercent;
    private String discountType;
    private String discountLimit;
    private String couponReason;
    private String couponCustomer;

    public MemberCouponHistoryEntity toEntity() {
        return MemberCouponHistoryEntity.builder()
                .historySeq(historySeq)
                .email(email)
                .couponId(couponId)
                .couponExpireDate(couponExpireDate)
                .useYn(useYn)
                .createdAt(createdAt)
                .build();
    }
}