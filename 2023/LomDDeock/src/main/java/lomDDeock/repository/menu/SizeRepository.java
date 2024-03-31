package lomDDeock.repository.menu;

import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SizeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepository extends JpaRepository<SizeEntity, Integer> {
}
