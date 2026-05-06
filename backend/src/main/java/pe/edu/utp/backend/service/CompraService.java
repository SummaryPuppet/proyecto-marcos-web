package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Compra;
import java.util.List;
import java.util.Optional;
public interface CompraService {
    Compra crear(Compra compra);
    Optional<Compra> obtenerPorId(Long id);
    List<Compra> obtenerTodos();
    Compra actualizar(Long id, Compra compra);
    void eliminar(Long id);
}
