package pe.edu.utp.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Promocion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_promocion;

    @Column( length = 150)
    private String codigo;

    private Double descuento_porcentaje;

    private LocalDate fecha_inicio;
    private LocalDate fecha_fin;

    @Column(name = "estado", length = 150)
    private String estado;

    @ManyToOne
    private Pago pago;
}
