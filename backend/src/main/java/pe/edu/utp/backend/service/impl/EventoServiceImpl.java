package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Evento;
import pe.edu.utp.backend.repository.EventoRepository;
import pe.edu.utp.backend.service.EventoService;
import java.util.List;
import java.util.Optional;
@Service
public class EventoServiceImpl implements EventoService {
    private final EventoRepository eventoRepository;
    public EventoServiceImpl(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }
    @Override
    public Evento crear(Evento evento) {
        return eventoRepository.save(evento);
    }
    @Override
    public Optional<Evento> obtenerPorId(Long id) {
        return eventoRepository.findById(id);
    }
    @Override
    public List<Evento> obtenerTodos() {
        return eventoRepository.findAll();
    }
    @Override
    public Evento actualizar(Long id, Evento evento) {
        return eventoRepository.findById(id)
                .map(existente -> {
                    existente.setTitulo(evento.getTitulo());
                    existente.setDescripcion(evento.getDescripcion());
                    existente.setFecha_evento(evento.getFecha_evento());
                    existente.setHora_evento(evento.getHora_evento());
                    existente.setImagen(evento.getImagen());
                    existente.setEstado(evento.getEstado());
                    existente.setFecha_creacion(evento.getFecha_creacion());
                    existente.setZonas(evento.getZonas());
                    return eventoRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Evento no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        eventoRepository.deleteById(id);
    }
}
