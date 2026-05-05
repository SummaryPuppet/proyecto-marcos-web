package pe.edu.utp.backend.service;

import pe.edu.utp.backend.entity.Evento;
import java.util.List;
import java.util.Optional;

public interface EventoService {
    Evento crear(Evento evento);
    Optional<Evento> obtenerPorId(Long id);
    List<Evento> obtenerTodos();
    Evento actualizar(Long id, Evento evento);
    void eliminar(Long id);
}
