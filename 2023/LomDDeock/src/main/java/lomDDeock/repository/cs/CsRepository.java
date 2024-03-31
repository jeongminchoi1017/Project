package lomDDeock.repository.cs;

import jakarta.transaction.Transactional;
import lomDDeock.entity.cs.CsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CsRepository extends JpaRepository<CsEntity,Integer> {

    @Modifying
    @Transactional
    @Query("UPDATE CsEntity c SET c.status = -1 WHERE c.cno = :cno")
    void hideCs(@Param("cno") int cno);

}
