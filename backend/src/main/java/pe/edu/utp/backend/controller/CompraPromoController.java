package pe.edu.utp.backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.CompraPromo;
import pe.edu.utp.backend.service.CompraPromoService;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/compra-promo")
public class CompraPromoController {
    private final CompraPromoService comprapromoService;
    public CompraPromoController(CompraPromoService comprapromoService) {
        this.comprapromoService = comprapromoService;
    }
    @PostMapping
    public ResponseEntity<CompraPromo> crear(@RequestBody CompraPromo comprapromo) {
        CompraPromo comprapromoCreado = comprapromoService.crear(comprapromo);
        return ResponseEntity.status(HttpStatus.CREATED).body(comprapromoCreado);
    }
    @GetMapping
    public ResponseEntity<List<CompraPromo>> obtenerTodos() {
        return ResponseEntity.ok(comprapromoService.obtenerTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<CompraPromo> obtenerPorId(@PathVariable Long id) {
        Optional<CompraPromo> comprapromo = comprapromoService.obtenerPorId(id);
        return comprapromo.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public ResponseEntity<CompraPromo> actualizar(@PathVariable Long id, @RequestBody CompraPromo comprapromo) {
        try {
            CompraPromo comprapromoActualizado = comprapromoService.actualizar(id, comprapromo);
            return ResponseEntity.ok(comprapromoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        comprapromoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
