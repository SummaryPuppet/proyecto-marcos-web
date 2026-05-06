package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.DetalleCompra;
import java.util.List;
import java.util.Optional;
public interface DetalleCompraService {
    DetalleCompra crear(DetalleCompra detallecompra);
    Optional<DetalleCompra> obtenerPorId(Long id);
    List<DetalleCompra> obtenerTodos();
    DetalleCompra actualizar(Long id, DetalleCompra detallecompra);
    void eliminar(Long id);
}
