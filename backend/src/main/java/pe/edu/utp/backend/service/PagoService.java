package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Pago;
import java.util.List;
import java.util.Optional;
public interface PagoService {
    Pago crear(Pago pago);
    Optional<Pago> obtenerPorId(Long id);
    List<Pago> obtenerTodos();
    Pago actualizar(Long id, Pago pago);
    void eliminar(Long id);
}
