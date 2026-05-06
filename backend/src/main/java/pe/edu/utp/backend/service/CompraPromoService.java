package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.CompraPromo;
import java.util.List;
import java.util.Optional;
public interface CompraPromoService {
    CompraPromo crear(CompraPromo comprapromo);
    Optional<CompraPromo> obtenerPorId(Long id);
    List<CompraPromo> obtenerTodos();
    CompraPromo actualizar(Long id, CompraPromo comprapromo);
    void eliminar(Long id);
}
