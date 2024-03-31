package lomDDeock.dto.member;

import lomDDeock.entity.member.CouponEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class CouponDTO {
    private int couponId;
    private String couponName;
    private String couponApply;
    private int discountMoney;
    private int discountPercent;
    private String discountType;
    private String discountLimit;
    private String couponReason;
    private String couponCustomer;
    private LocalDateTime createdAt;

    public CouponEntity toEntity() {
        return CouponEntity.builder()
                .couponId(couponId)
                .couponName(couponName)
                .couponApply(couponApply)
                .discountMoney(discountMoney)
                .discountPercent(discountPercent)
                .discountType(discountType)
                .discountLimit(discountLimit)
                .couponReason(couponReason)
                .couponCustomer(couponCustomer)
                .createdAt(createdAt)
                .build();
    }
}