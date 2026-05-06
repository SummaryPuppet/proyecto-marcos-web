package pe.edu.utp.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DetalleCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_detalle;

    private Double precio_unitario;

    @ManyToOne
    @JoinColumn( name = "id_compra")
    private Compra compra;
    @ManyToOne
    @JoinColumn( name = "id_entrada")
    private Entrada entrada;


}
