package pe.edu.utp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Evento;
import pe.edu.utp.backend.service.EventoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/evento")
public class EventoController {
    
    private final EventoService eventoService;
    
    public EventoController(EventoService eventoService) {
        this.eventoService = eventoService;
    }
    
    @PostMapping
    public ResponseEntity<Evento> crear(@RequestBody Evento evento) {
        Evento eventoCreado = eventoService.crear(evento);
        return ResponseEntity.status(HttpStatus.CREATED).body(eventoCreado);
    }
    
    @GetMapping
    public ResponseEntity<List<Evento>> obtenerTodos() {
        List<Evento> eventos = eventoService.obtenerTodos();
        return ResponseEntity.ok(eventos);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Evento> obtenerPorId(@PathVariable Long id) {
        Optional<Evento> evento = eventoService.obtenerPorId(id);
        return evento.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Evento> actualizar(@PathVariable Long id, @RequestBody Evento evento) {
        try {
            Evento eventoActualizado = eventoService.actualizar(id, evento);
            return ResponseEntity.ok(eventoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        eventoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
