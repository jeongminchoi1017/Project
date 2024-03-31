package lomDDeock.dto.member;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCouponForm {
    // 보유 쿠폰 수
    private int couponCount;
    // 만료예정 쿠폰 수
    private int expireCount;
}