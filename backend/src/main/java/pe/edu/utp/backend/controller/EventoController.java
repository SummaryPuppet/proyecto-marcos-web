package pe.edu.utp.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.utp.backend.entity.Evento;
import pe.edu.utp.backend.service.EventoService;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
public class EventoController {

	private final EventoService eventoService;

	public EventoController(EventoService eventoService) {
		this.eventoService = eventoService;
	}

	@PostMapping
	public ResponseEntity<Evento> crear(@RequestBody Evento evento) {
		return ResponseEntity.status(HttpStatus.CREATED).body(eventoService.crear(evento));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Evento> obtenerPorId(@PathVariable Long id) {
		return ResponseEntity.of(eventoService.obtenerPorId(id));
	}

	@GetMapping
	public ResponseEntity<List<Evento>> obtenerTodos() {
		return ResponseEntity.ok(eventoService.obtenerTodos());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Evento> actualizar(@PathVariable Long id, @RequestBody Evento evento) {
		return ResponseEntity.ok(eventoService.actualizar(id, evento));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable Long id) {
		eventoService.eliminar(id);
		return ResponseEntity.noContent().build();
	}
}
