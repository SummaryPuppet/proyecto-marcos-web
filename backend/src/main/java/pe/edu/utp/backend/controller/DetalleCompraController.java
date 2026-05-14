package pe.edu.utp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.edu.utp.backend.entity.DetalleCompra;
import pe.edu.utp.backend.repository.DetalleCompraRepository;

import java.util.List;

@RestController
@RequestMapping("/api/detalle-compras")
@CrossOrigin("*")
public class DetalleCompraController {

    @Autowired
    private DetalleCompraRepository repository;

    // ===== LISTAR =====
    @GetMapping
    public List<DetalleCompra> listar() {
        return repository.findAll();
    }

    // ===== BUSCAR POR ID =====
    @GetMapping("/{id}")
    public DetalleCompra obtener(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // ===== CREAR =====
    @PostMapping
    public DetalleCompra guardar(
            @RequestBody DetalleCompra detalleCompra
    ) {

        return repository.save(detalleCompra);
    }

    // ===== ACTUALIZAR =====
    @PutMapping("/{id}")
    public DetalleCompra actualizar(
            @PathVariable Long id,
            @RequestBody DetalleCompra detalleCompra
    ) {

        DetalleCompra actual =
                repository.findById(id).orElse(null);

        if (actual != null) {

            actual.setPrecio_unitario(
                    detalleCompra.getPrecio_unitario()
            );

            actual.setCompra(
                    detalleCompra.getCompra()
            );

            actual.setEntrada(
                    detalleCompra.getEntrada()
            );

            return repository.save(actual);
        }

        return null;
    }

    // ===== ELIMINAR =====
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}