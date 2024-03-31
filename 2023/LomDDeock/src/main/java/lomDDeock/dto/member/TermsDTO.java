package lomDDeock.dto.member;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class TermsDTO {
    private String terms;
    private String privacy;
    private String location;
    private String finance;
}