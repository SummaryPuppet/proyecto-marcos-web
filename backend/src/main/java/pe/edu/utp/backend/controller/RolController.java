package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Rol;
import pe.edu.utp.backend.service.RolService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/rol")
public class RolController {
    private final RolService rolService;
    public RolController(RolService rolService) {
        this.rolService = rolService;
    }
    @PostMapping
    public ResponseEntity<Rol> crear(@RequestBody Rol rol) {
        Rol rolCreado = rolService.crear(rol);
        return ResponseEntity.status(HttpStatus.CREATED).body(rolCreado);
    }
    @GetMapping
    public ResponseEntity<List<Rol>> obtenerTodos() {
        return ResponseEntity.ok(rolService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Rol> obtenerPorId(@PathVariable Long id) {
        Optional<Rol> rol = rolService.obtenerPorId(id);
        return rol.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Rol> actualizar(@PathVariable Long id, @RequestBody Rol rol) {
        try {
            Rol rolActualizado = rolService.actualizar(id, rol);
            return ResponseEntity.ok(rolActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        rolService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
