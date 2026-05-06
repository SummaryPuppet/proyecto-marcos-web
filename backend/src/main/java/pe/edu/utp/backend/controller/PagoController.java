package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Pago;
import pe.edu.utp.backend.service.PagoService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/pago")
public class PagoController {
    private final PagoService pagoService;
    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }
    @PostMapping
    public ResponseEntity<Pago> crear(@RequestBody Pago pago) {
        Pago pagoCreado = pagoService.crear(pago);
        return ResponseEntity.status(HttpStatus.CREATED).body(pagoCreado);
    }
    @GetMapping
    public ResponseEntity<List<Pago>> obtenerTodos() {
        return ResponseEntity.ok(pagoService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Pago> obtenerPorId(@PathVariable Long id) {
        Optional<Pago> pago = pagoService.obtenerPorId(id);
        return pago.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<Pago> actualizar(@PathVariable Long id, @RequestBody Pago pago) {
        try {
            Pago pagoActualizado = pagoService.actualizar(id, pago);
            return ResponseEntity.ok(pagoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        pagoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
