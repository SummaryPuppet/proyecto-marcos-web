package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.DetalleCompra;
import pe.edu.utp.backend.service.DetalleCompraService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/detalle-compra")
public class DetalleCompraController {
    private final DetalleCompraService detallecompraService;
    public DetalleCompraController(DetalleCompraService detallecompraService) {
        this.detallecompraService = detallecompraService;
    }
    @PostMapping
    public ResponseEntity<DetalleCompra> crear(@RequestBody DetalleCompra detallecompra) {
        DetalleCompra detallecompraCreado = detallecompraService.crear(detallecompra);
        return ResponseEntity.status(HttpStatus.CREATED).body(detallecompraCreado);
    }
    @GetMapping
    public ResponseEntity<List<DetalleCompra>> obtenerTodos() {
        return ResponseEntity.ok(detallecompraService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<DetalleCompra> obtenerPorId(@PathVariable Long id) {
        Optional<DetalleCompra> detallecompra = detallecompraService.obtenerPorId(id);
        return detallecompra.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<DetalleCompra> actualizar(@PathVariable Long id, @RequestBody DetalleCompra detallecompra) {
        try {
            DetalleCompra detallecompraActualizado = detallecompraService.actualizar(id, detallecompra);
            return ResponseEntity.ok(detallecompraActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        detallecompraService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
