package pe.edu.utp.backend.service;
import pe.edu.utp.backend.entity.Usuario;
import java.util.List;
import java.util.Optional;
public interface UsuarioService {
    Usuario crear(Usuario usuario);
    Optional<Usuario> obtenerPorId(Long id);
    List<Usuario> obtenerTodos();
    Usuario actualizar(Long id, Usuario usuario);
    void eliminar(Long id);
}
