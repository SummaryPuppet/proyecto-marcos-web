package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Promocion;
import java.util.List;
import java.util.Optional;
public interface PromocionService {
    Promocion crear(Promocion promocion);
    Optional<Promocion> obtenerPorId(Long id);
    List<Promocion> obtenerTodos();
    Promocion actualizar(Long id, Promocion promocion);
    void eliminar(Long id);
}
