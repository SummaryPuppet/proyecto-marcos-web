package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.Rol;
import pe.edu.utp.backend.repository.RolRepository;
import pe.edu.utp.backend.service.RolService;
import java.util.List;
import java.util.Optional;
@Service
public class RolServiceImpl implements RolService {
    private final RolRepository rolRepository;
    public RolServiceImpl(RolRepository rolRepository) {
        this.rolRepository = rolRepository;
    }
    @Override
    public Rol crear(Rol rol) {
        return rolRepository.save(rol);
    }
    @Override
    public Optional<Rol> obtenerPorId(Long id) {
        return rolRepository.findById(id);
    }
    @Override
    public List<Rol> obtenerTodos() {
        return rolRepository.findAll();
    }
    @Override
    public Rol actualizar(Long id, Rol rol) {
        return rolRepository.findById(id)
                .map(existente -> {
                    existente.setNombreRol(rol.getNombreRol());
                    return rolRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        rolRepository.deleteById(id);
    }
}
