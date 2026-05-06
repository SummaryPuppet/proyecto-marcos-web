package pe.edu.utp.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CompraPromo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_compra_promocion;

    @ManyToOne
    private Compra compra;

    @ManyToOne
    private Promocion promocion;
}
