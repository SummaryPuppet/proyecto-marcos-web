package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Entrada;
import pe.edu.utp.backend.repository.EntradaRepository;
import pe.edu.utp.backend.service.EntradaService;
import java.util.List;
import java.util.Optional;
@Service
public class EntradaServiceImpl implements EntradaService {
    private final EntradaRepository entradaRepository;
    public EntradaServiceImpl(EntradaRepository entradaRepository) {
        this.entradaRepository = entradaRepository;
    }
    @Override
    public Entrada crear(Entrada entrada) {
        return entradaRepository.save(entrada);
    }
    @Override
    public Optional<Entrada> obtenerPorId(Long id) {
        return entradaRepository.findById(id);
    }
    @Override
    public List<Entrada> obtenerTodos() {
        return entradaRepository.findAll();
    }
    @Override
    public Entrada actualizar(Long id, Entrada entrada) {
        return entradaRepository.findById(id)
                .map(existente -> {
                    existente.setCodigo_qr(entrada.getCodigo_qr());
                    existente.setEstado(entrada.getEstado());
                    existente.setPrecio_final(entrada.getPrecio_final());
                    existente.setFecha_generacion(entrada.getFecha_generacion());
                    existente.setReservado_hasta(entrada.getReservado_hasta());
                    return entradaRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Entrada no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        entradaRepository.deleteById(id);
    }
}
