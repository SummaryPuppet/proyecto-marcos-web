package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Zona;
import java.util.List;
import java.util.Optional;
public interface ZonaService {
    Zona crear(Zona zona);
    Optional<Zona> obtenerPorId(Long id);
    List<Zona> obtenerTodos();
    Zona actualizar(Long id, Zona zona);
    void eliminar(Long id);
}
