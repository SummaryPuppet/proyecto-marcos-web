package pe.edu.utp.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import pe.edu.utp.backend.entity.Lugar;
import pe.edu.utp.backend.repository.LugarRepository;

import java.util.List;

@RestController
@RequestMapping("/api/lugares")
@CrossOrigin("*")
public class LugarController {

    @Autowired
    private LugarRepository repository;

    // ===== LISTAR TODOS =====
    @GetMapping
    public List<Lugar> listar() {
        return repository.findAll();
    }

    // ===== BUSCAR POR ID =====
    @GetMapping("/{id}")
    public Lugar obtener(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // ===== CREAR =====
    @PostMapping
    public Lugar guardar(@RequestBody Lugar lugar) {
        return repository.save(lugar);
    }

    // ===== ACTUALIZAR =====
    @PutMapping("/{id}")
    public Lugar actualizar(
            @PathVariable Long id,
            @RequestBody Lugar lugar
    ) {

        Lugar actual =
                repository.findById(id).orElse(null);

        if (actual != null) {

            actual.setNombre(lugar.getNombre());
            actual.setDireccion(lugar.getDireccion());
            actual.setCiudad(lugar.getCiudad());
            actual.setCapacidad_total(
                    lugar.getCapacidad_total()
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