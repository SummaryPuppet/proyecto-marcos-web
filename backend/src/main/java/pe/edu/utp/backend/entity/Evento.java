package pe.edu.utp.backend.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Set;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Evento {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id_evento;
    @Column(length = 150, nullable = false)
    private String titulo;
    private String descripcion;
    private LocalDate fecha_evento;
    private LocalTime hora_evento;
    private String imagen;
    @Column(length = 30 )
    private String estado ;
    private LocalDateTime fecha_creacion;
    @JsonManagedReference
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Zona> zonas;
}
