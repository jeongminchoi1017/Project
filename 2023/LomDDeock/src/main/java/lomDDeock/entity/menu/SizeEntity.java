package lomDDeock.entity.menu;

import jakarta.persistence.*;
import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SizeDTO;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Entity
@Table(name = "menu_size")
public class SizeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sizeNo;
    private int menuNo;
    private String size;

    public SizeDTO toDTO(){
        return SizeDTO.builder()
                .sizeNo(sizeNo)
                .menuNo(menuNo)
                .size(size)
                .build();
    }
}
