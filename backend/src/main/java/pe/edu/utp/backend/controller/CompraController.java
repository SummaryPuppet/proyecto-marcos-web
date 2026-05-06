package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Compra;
import pe.edu.utp.backend.service.CompraService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/compra")
public class CompraController {
    private final CompraService compraService;
    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }
    @PostMapping
    public ResponseEntity<Compra> crear(@RequestBody Compra compra) {
        Compra compraCreado = compraService.crear(compra);
        return ResponseEntity.status(HttpStatus.CREATED).body(compraCreado);
    }
    @GetMapping
    public ResponseEntity<List<Compra>> obtenerTodos() {
        return ResponseEntity.ok(compraService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Compra> obtenerPorId(@PathVariable Long id) {
        Optional<Compra> compra = compraService.obtenerPorId(id);
        return compra.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Compra> actualizar(@PathVariable Long id, @RequestBody Compra compra) {
        try {
            Compra compraActualizado = compraService.actualizar(id, compra);
            return ResponseEntity.ok(compraActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        compraService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
