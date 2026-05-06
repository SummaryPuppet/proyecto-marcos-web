package pe.edu.utp.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.utp.backend.entity.CompraPromo;
@Repository
public interface CompraPromoRepository extends JpaRepository<CompraPromo, Long> {
}
