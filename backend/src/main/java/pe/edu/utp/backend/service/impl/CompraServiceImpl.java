package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Compra;
import pe.edu.utp.backend.repository.CompraRepository;
import pe.edu.utp.backend.service.CompraService;
import java.util.List;
import java.util.Optional;
@Service
public class CompraServiceImpl implements CompraService {
    private final CompraRepository compraRepository;
    public CompraServiceImpl(CompraRepository compraRepository) {
        this.compraRepository = compraRepository;
    }
    @Override
    public Compra crear(Compra compra) {
        return compraRepository.save(compra);
    }
    @Override
    public Optional<Compra> obtenerPorId(Long id) {
        return compraRepository.findById(id);
    }
    @Override
    public List<Compra> obtenerTodos() {
        return compraRepository.findAll();
    }
    @Override
    public Compra actualizar(Long id, Compra compra) {
        return compraRepository.findById(id)
                .map(existente -> {
                    existente.setFecha_compra(compra.getFecha_compra());
                    existente.setTotal(compra.getTotal());
                    existente.setEstado(compra.getEstado());
                    existente.setUsuarios(compra.getUsuarios());
                    return compraRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Compra no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        compraRepository.deleteById(id);
    }
}
