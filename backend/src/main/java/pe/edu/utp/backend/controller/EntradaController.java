package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Entrada;
import pe.edu.utp.backend.service.EntradaService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/entrada")
public class EntradaController {
    private final EntradaService entradaService;
    public EntradaController(EntradaService entradaService) {
        this.entradaService = entradaService;
    }
    @PostMapping
    public ResponseEntity<Entrada> crear(@RequestBody Entrada entrada) {
        Entrada entradaCreado = entradaService.crear(entrada);
        return ResponseEntity.status(HttpStatus.CREATED).body(entradaCreado);
    }
    @GetMapping
    public ResponseEntity<List<Entrada>> obtenerTodos() {
        return ResponseEntity.ok(entradaService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Entrada> obtenerPorId(@PathVariable Long id) {
        Optional<Entrada> entrada = entradaService.obtenerPorId(id);
        return entrada.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Entrada> actualizar(@PathVariable Long id, @RequestBody Entrada entrada) {
        try {
            Entrada entradaActualizado = entradaService.actualizar(id, entrada);
            return ResponseEntity.ok(entradaActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        entradaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
