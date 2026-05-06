package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.DetalleCompra;
import pe.edu.utp.backend.repository.DetalleCompraRepository;
import pe.edu.utp.backend.service.DetalleCompraService;
import java.util.List;
import java.util.Optional;
@Service
public class DetalleCompraServiceImpl implements DetalleCompraService {
    private final DetalleCompraRepository detallecompraRepository;
    public DetalleCompraServiceImpl(DetalleCompraRepository detallecompraRepository) {
        this.detallecompraRepository = detallecompraRepository;
    }
    @Override
    public DetalleCompra crear(DetalleCompra detallecompra) {
        return detallecompraRepository.save(detallecompra);
    }
    @Override
    public Optional<DetalleCompra> obtenerPorId(Long id) {
        return detallecompraRepository.findById(id);
    }
    @Override
    public List<DetalleCompra> obtenerTodos() {
        return detallecompraRepository.findAll();
    }
    @Override
    public DetalleCompra actualizar(Long id, DetalleCompra detallecompra) {
        return detallecompraRepository.findById(id)
                .map(existente -> {
                    existente.setPrecio_unitario(detallecompra.getPrecio_unitario());
                    existente.setCompra(detallecompra.getCompra());
                    existente.setEntrada(detallecompra.getEntrada());
                    return detallecompraRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("DetalleCompra no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        detallecompraRepository.deleteById(id);
    }
}
