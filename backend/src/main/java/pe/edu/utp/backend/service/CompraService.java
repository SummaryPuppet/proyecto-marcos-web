package pe.edu.utp.backend.service;

import pe.edu.utp.backend.entity.Compra;
import pe.edu.utp.backend.entity.DetalleCompra;
import pe.edu.utp.backend.entity.Entrada;

public interface CompraService {

    Compra Newcompra(Compra Compra);
    void DeleteCompra(Long id);
    Entrada actualizarEntrada(Long id, String estado );
    Compra actualizarCompra(Long id, Compra Compra );
    DetalleCompra newdetalle(DetalleCompra detalle);
} 