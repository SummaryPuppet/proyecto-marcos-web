package pe.edu.utp.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Evento {
   @Id
   @GeneratedValue(strategy= GenerationType.AUTO)
   private Long id;
   private String nombre;
   private LocalDate fecha;
    private Double precio;
    private String ubicacion;
}
