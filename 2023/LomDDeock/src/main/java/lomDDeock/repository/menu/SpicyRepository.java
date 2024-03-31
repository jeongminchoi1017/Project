package lomDDeock.repository.menu;

import lomDDeock.entity.menu.SizeEntity;
import lomDDeock.entity.menu.SpicyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpicyRepository extends JpaRepository<SpicyEntity, Integer> {
}
