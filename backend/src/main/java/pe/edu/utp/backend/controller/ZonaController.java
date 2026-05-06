package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Zona;
import pe.edu.utp.backend.service.ZonaService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/zona")
public class ZonaController {
    private final ZonaService zonaService;
    public ZonaController(ZonaService zonaService) {
        this.zonaService = zonaService;
    }
    @PostMapping
    public ResponseEntity<Zona> crear(@RequestBody Zona zona) {
        Zona zonaCreado = zonaService.crear(zona);
        return ResponseEntity.status(HttpStatus.CREATED).body(zonaCreado);
    }
    @GetMapping
    public ResponseEntity<List<Zona>> obtenerTodos() {
        return ResponseEntity.ok(zonaService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Zona> obtenerPorId(@PathVariable Long id) {
        Optional<Zona> zona = zonaService.obtenerPorId(id);
        return zona.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Zona> actualizar(@PathVariable Long id, @RequestBody Zona zona) {
        try {
            Zona zonaActualizado = zonaService.actualizar(id, zona);
            return ResponseEntity.ok(zonaActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        zonaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
