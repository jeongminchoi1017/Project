package lomDDeock.entity.member;

import jakarta.persistence.*;
import lomDDeock.dto.member.CouponDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "coupon")
public class CouponEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int couponId;
    private String couponName;
    private String couponApply;
    private int discountMoney;
    private int discountPercent;
    private String discountType;
    private String discountLimit;
    private String couponReason;
    private String couponCustomer;
    @CreationTimestamp
    private LocalDateTime createdAt;

    public CouponDTO toDTO() {
        return CouponDTO.builder()
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