package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Rol;
import java.util.List;
import java.util.Optional;
public interface RolService {
    Rol crear(Rol rol);
    Optional<Rol> obtenerPorId(Long id);
    List<Rol> obtenerTodos();
    Rol actualizar(Long id, Rol rol);
    void eliminar(Long id);
}
