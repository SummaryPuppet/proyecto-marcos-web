package pe.edu.utp.backend.service.impl;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
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
        Evento existente = eventoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evento no encontrado con id: " + id));

        evento.setId_evento(existente.getId_evento());
        return eventoRepository.save(evento);
    }

    @Override
    public void eliminar(Long id) {
        Evento existente = eventoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Evento no encontrado con id: " + id));
        eventoRepository.delete(existente);
    }
}
