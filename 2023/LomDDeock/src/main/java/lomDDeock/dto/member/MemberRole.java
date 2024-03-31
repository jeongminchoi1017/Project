package lomDDeock.dto.member;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MemberRole {
    USER,
    ADMIN;
    private static final String PREFIX = "ROLE_";
    public String getAuthority() {
        return PREFIX + this.name();
    }
}