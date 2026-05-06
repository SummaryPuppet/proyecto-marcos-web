package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Usuario;
import pe.edu.utp.backend.repository.UsuarioRepository;
import pe.edu.utp.backend.service.UsuarioService;
import java.util.List;
import java.util.Optional;
@Service
public class UsuarioServiceImpl implements UsuarioService {
    private final UsuarioRepository usuarioRepository;
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    @Override
    public Usuario crear(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    @Override
    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }
    @Override
    public List<Usuario> obtenerTodos() {
        return usuarioRepository.findAll();
    }
    @Override
    public Usuario actualizar(Long id, Usuario usuario) {
        return usuarioRepository.findById(id)
                .map(existente -> {
                    existente.setNombre(usuario.getNombre());
                    existente.setApellido(usuario.getApellido());
                    existente.setCorreo(usuario.getCorreo());
                    existente.setContrasena(usuario.getContrasena());
                    existente.setTelefono(usuario.getTelefono());
                    existente.setEstado(usuario.getEstado());
                    existente.setFecha_registro(usuario.getFecha_registro());
                    existente.setRol(usuario.getRol());
                    return usuarioRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        usuarioRepository.deleteById(id);
    }
}
