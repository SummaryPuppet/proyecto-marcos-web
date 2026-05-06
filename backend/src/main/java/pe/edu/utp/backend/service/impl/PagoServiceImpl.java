package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Pago;
import pe.edu.utp.backend.repository.PagoRepository;
import pe.edu.utp.backend.service.PagoService;
import java.util.List;
import java.util.Optional;
@Service
public class PagoServiceImpl implements PagoService {
    private final PagoRepository pagoRepository;
    public PagoServiceImpl(PagoRepository pagoRepository) {
        this.pagoRepository = pagoRepository;
    }
    @Override
    public Pago crear(Pago pago) {
        return pagoRepository.save(pago);
    }
    @Override
    public Optional<Pago> obtenerPorId(Long id) {
        return pagoRepository.findById(id);
    }
    @Override
    public List<Pago> obtenerTodos() {
        return pagoRepository.findAll();
    }
    @Override
    public Pago actualizar(Long id, Pago pago) {
        return pagoRepository.findById(id)
                .map(existente -> {
                    existente.setMetodo_pago(pago.getMetodo_pago());
                    existente.setMonto(pago.getMonto());
                    existente.setFecha_pago(pago.getFecha_pago());
                    existente.setEstado(pago.getEstado());
                    existente.setCodigo_transaccion(pago.getCodigo_transaccion());
                    existente.setCompras(pago.getCompras());
                    return pagoRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Pago no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        pagoRepository.deleteById(id);
    }
}
