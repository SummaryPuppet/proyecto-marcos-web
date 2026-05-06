package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Promocion;
import pe.edu.utp.backend.repository.PromocionRepository;
import pe.edu.utp.backend.service.PromocionService;
import java.util.List;
import java.util.Optional;
@Service
public class PromocionServiceImpl implements PromocionService {
    private final PromocionRepository promocionRepository;
    public PromocionServiceImpl(PromocionRepository promocionRepository) {
        this.promocionRepository = promocionRepository;
    }
    @Override
    public Promocion crear(Promocion promocion) {
        return promocionRepository.save(promocion);
    }
    @Override
    public Optional<Promocion> obtenerPorId(Long id) {
        return promocionRepository.findById(id);
    }
    @Override
    public List<Promocion> obtenerTodos() {
        return promocionRepository.findAll();
    }
    @Override
    public Promocion actualizar(Long id, Promocion promocion) {
        return promocionRepository.findById(id)
                .map(existente -> {
                    existente.setCodigo(promocion.getCodigo());
                    existente.setDescuento_porcentaje(promocion.getDescuento_porcentaje());
                    existente.setFecha_inicio(promocion.getFecha_inicio());
                    existente.setFecha_fin(promocion.getFecha_fin());
                    existente.setEstado(promocion.getEstado());
                    existente.setPago(promocion.getPago());
                    return promocionRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Promocion no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        promocionRepository.deleteById(id);
    }
}
