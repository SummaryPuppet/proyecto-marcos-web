package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Zona;
import pe.edu.utp.backend.repository.ZonaRepository;
import pe.edu.utp.backend.service.ZonaService;
import java.util.List;
import java.util.Optional;
@Service
public class ZonaServiceImpl implements ZonaService {
    private final ZonaRepository zonaRepository;
    public ZonaServiceImpl(ZonaRepository zonaRepository) {
        this.zonaRepository = zonaRepository;
    }
    @Override
    public Zona crear(Zona zona) {
        return zonaRepository.save(zona);
    }
    @Override
    public Optional<Zona> obtenerPorId(Long id) {
        return zonaRepository.findById(id);
    }
    @Override
    public List<Zona> obtenerTodos() {
        return zonaRepository.findAll();
    }
    @Override
    public Zona actualizar(Long id, Zona zona) {
        return zonaRepository.findById(id)
                .map(existente -> {
                    existente.setNombre_zona(zona.getNombre_zona());
                    existente.setCapacidad(zona.getCapacidad());
                    existente.setPrecio(zona.getPrecio());
                    existente.setEstado(zona.getEstado());
                    existente.setEventos(zona.getEventos());
                    return zonaRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Zona no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        zonaRepository.deleteById(id);
    }
}
