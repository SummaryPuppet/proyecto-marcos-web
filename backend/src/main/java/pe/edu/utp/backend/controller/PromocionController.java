package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Promocion;
import pe.edu.utp.backend.service.PromocionService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/promocion")
public class PromocionController {
    private final PromocionService promocionService;
    public PromocionController(PromocionService promocionService) {
        this.promocionService = promocionService;
    }
    @PostMapping
    public ResponseEntity<Promocion> crear(@RequestBody Promocion promocion) {
        Promocion promocionCreado = promocionService.crear(promocion);
        return ResponseEntity.status(HttpStatus.CREATED).body(promocionCreado);
    }
    @GetMapping
    public ResponseEntity<List<Promocion>> obtenerTodos() {
        return ResponseEntity.ok(promocionService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Promocion> obtenerPorId(@PathVariable Long id) {
        Optional<Promocion> promocion = promocionService.obtenerPorId(id);
        return promocion.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Promocion> actualizar(@PathVariable Long id, @RequestBody Promocion promocion) {
        try {
            Promocion promocionActualizado = promocionService.actualizar(id, promocion);
            return ResponseEntity.ok(promocionActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        promocionService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
