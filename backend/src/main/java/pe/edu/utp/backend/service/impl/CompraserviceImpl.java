package pe.edu.utp.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import pe.edu.utp.backend.entity.Compra;
import pe.edu.utp.backend.entity.DetalleCompra;
import pe.edu.utp.backend.entity.Entrada;
import pe.edu.utp.backend.repository.CompraRepository;
import pe.edu.utp.backend.repository.DetalleCompraRepository;
import pe.edu.utp.backend.repository.EntradaRepository;
import pe.edu.utp.backend.service.CompraService;

public class CompraserviceImpl implements CompraService {
    @Autowired
private CompraRepository compraRepository;
private DetalleCompraRepository detalleCompraRepository;
private EntradaRepository entradaRepository;
    @Override
    public Compra Newcompra(Compra Compra) {
       return compraRepository.save(Compra);
    }
    @Override
    public void DeleteCompra(Long id) {
        Compra compraExs = compraRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("compra no encontrada"));
                compraRepository.delete(compraExs);
    }

    @Override
    public Entrada actualizarEntrada(Long id, String estado) {
       Entrada Entradaexistente=entradaRepository.findById(id).
       orElseThrow(() -> new RuntimeException("Entrada no encontrada"));
      Entradaexistente.setEstado(estado);
      return entradaRepository.save(Entradaexistente);
    }

    @Override
    public Compra actualizarCompra(Long id, Compra Compra) {
         Compra compraexistente = compraRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("compra no encontrada"));

        compraexistente.setEstado(Compra.getEstado());
        compraexistente.setFecha_compra(Compra.getFecha_compra());
        compraexistente.setTotal(Compra.getTotal());
        compraexistente.setTotal(Compra.getTotal());

        return compraRepository.save(compraexistente);
    }
    

    @Override
    public DetalleCompra newdetalle(DetalleCompra detalle) {
    return detalleCompraRepository.save(detalle);
    }
}