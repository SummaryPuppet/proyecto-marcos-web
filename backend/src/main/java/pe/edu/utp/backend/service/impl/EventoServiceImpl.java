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
                .map(eventoExistente -> {
                    eventoExistente.setNombre(evento.getNombre());
                    eventoExistente.setFecha(evento.getFecha());
                    eventoExistente.setPrecio(evento.getPrecio());
                    eventoExistente.setUbicacion(evento.getUbicacion());
                    return eventoRepository.save(eventoExistente);
                })
                .orElseThrow(() -> new RuntimeException("Evento no encontrado"));
    }
    
    @Override
    public void eliminar(Long id) {
        eventoRepository.deleteById(id);
    }
}
