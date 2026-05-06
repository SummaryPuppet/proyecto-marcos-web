package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Entrada;
import java.util.List;
import java.util.Optional;
public interface EntradaService {
    Entrada crear(Entrada entrada);
    Optional<Entrada> obtenerPorId(Long id);
    List<Entrada> obtenerTodos();
    Entrada actualizar(Long id, Entrada entrada);
    void eliminar(Long id);
}
