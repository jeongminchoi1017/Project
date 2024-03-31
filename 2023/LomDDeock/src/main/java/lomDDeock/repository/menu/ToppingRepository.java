package lomDDeock.repository.menu;

import lomDDeock.entity.menu.SpicyEntity;
import lomDDeock.entity.menu.ToppingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToppingRepository extends JpaRepository<ToppingEntity, Integer> {
}
