package pe.edu.utp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.edu.utp.backend.entity.Zona;
import pe.edu.utp.backend.repository.ZonaRepository;

import java.util.List;

@RestController
@RequestMapping("/api/zonas")
@CrossOrigin("*")
public class ZonaController {

    @Autowired
    private ZonaRepository repository;

    // ===== LISTAR =====
    @GetMapping
    public List<Zona> listar() {
        return repository.findAll();
    }

    // ===== BUSCAR POR ID =====
    @GetMapping("/{id}")
    public Zona obtener(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // ===== CREAR =====
    @PostMapping
    public Zona guardar(@RequestBody Zona zona) {
        return repository.save(zona);
    }

    // ===== ACTUALIZAR =====
    @PutMapping("/{id}")
    public Zona actualizar(
            @PathVariable Long id,
            @RequestBody Zona zona
    ) {

        Zona actual =
                repository.findById(id).orElse(null);

        if (actual != null) {

            actual.setNombre_zona(zona.getNombre_zona());
            actual.setCapacidad(zona.getCapacidad());
            actual.setPrecio(zona.getPrecio());
            actual.setEstado(zona.getEstado());

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