package lomDDeock.controller.member;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletResponse;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.service.member.MemberService;
import lomDDeock.service.member.SocialLoginService;
import lomDDeock.util.JwtIssuer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.DatatypeConverter;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LoginController {
    private final MemberService memberService;
    private final SocialLoginService socialLoginService;
    private final JwtIssuer jwtIssuer;

    @GetMapping("/social/check/{provider}")
    public boolean checkMember(@PathVariable String provider, String email) {
        return memberService.checkMember(email);
    }

    @PostMapping("/refreshToken")
    public ResponseEntity<Map<String, String>> refreshAccessToken(@CookieValue(name = "refresh_token") String refreshToken) {
        // refreshToken을 이용하여 유효성 검증 로직 수행
        // 검증 성공 시 새로운 accessToken 발급
        JwtDTO jwtDTO = generateNewAccessToken(refreshToken);

        // 새로운 accessToken을 응답에 담아 클라이언트에게 전송
        Map<String, String> response = new HashMap<>();
        response.put("accessToken", jwtDTO.getAccessToken());

        return ResponseEntity.ok(response);
    }

    private JwtDTO generateNewAccessToken(String refreshToken) {
        Claims claims = jwtIssuer.getClaims(refreshToken);
        String email = jwtIssuer.getSubject(claims);
        String role = (String) claims.get("roles");
        return jwtIssuer.createToken(email, role);
    }

    // 토큰 검증
    @PostMapping("/verifyToken")
    public boolean verifyToken(@RequestBody String token) {
        return checkClaim(token);
    }

    public boolean checkClaim(String jwt) {
        try {
            Claims claims = jwtIssuer.getClaims(jwt);

            // 여기서는 필요한 클레임을 확인할 수 있습니다.
            // 예를 들어, 만료 시간 확인:
            Date expirationDate = claims.getExpiration();
            Date now = new Date();
            if (expirationDate != null && now.after(expirationDate)) {
                return false; // 토큰이 만료되었음
            }

            // 여기서 필요한 다른 클레임을 확인할 수 있습니다.
            return true;

        } catch (ExpiredJwtException e) {
            return false; // 토큰이 만료되었음

        } catch (JwtException e) {
            return false; // 그 외의 다른 이유로 인증 실패
        }
    }


    // 테스트용
    @GetMapping("/oauth2/{provider}")
    public void tryOAuth2(@PathVariable String provider, HttpServletResponse response)
            throws IOException {
        String url = socialLoginService.tryOAuth2(provider);
        response.sendRedirect(url);
    }
    @GetMapping("/oauth2/code/{provider}")
    public ResponseEntity<JwtDTO> authorized(@PathVariable String provider, @RequestParam String code) {
        return socialLoginService.connectToSocialSignIn(provider, code);
    }

    @PostMapping("/social/{provider}")
    public ResponseEntity<JwtDTO> socialSignIn(@PathVariable String provider, @RequestBody String code) {
        SignUpForm signUpForm = socialLoginService.signIn(provider, code);
        return ResponseEntity.ok(memberService.socialSignIn(signUpForm));
    }
}