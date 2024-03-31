package lomDDeock.repository.menu;

import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SideEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SideRepository extends JpaRepository<SideEntity, Integer> {
}
