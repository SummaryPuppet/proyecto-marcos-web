package pe.edu.utp.backend.service.impl;

import pe.edu.utp.backend.entity.Promocion;
import pe.edu.utp.backend.repository.PromocionRepository;
import pe.edu.utp.backend.service.PromocionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PromocionServiceImpl implements PromocionService {

    @Autowired
    private PromocionRepository repository;

    @Override
    public List<Promocion> listarPromociones() {
        return repository.findAll();
    }

    @Override
    public Optional<Promocion> buscarPorId(Integer id) {
        return repository.findById((long) id);
    }

    @Override
    public Promocion guardarPromocion(Promocion promocion) {
        return repository.save(promocion);
    }

    @Override
    public Promocion actualizarPromocion(Integer id, Promocion promocion) {

        Promocion promoExistente = repository.findById((long) id)
                .orElseThrow(() -> new RuntimeException("Promoción no encontrada"));

        promoExistente.setCodigo(promocion.getCodigo());
        promoExistente.setDescuentoPorcentaje(promocion.getDescuentoPorcentaje());
        promoExistente.setFechaInicio(promocion.getFechaInicio());
        promoExistente.setFechaFin(promocion.getFechaFin());
        promoExistente.setEstado(promocion.getEstado());

        return repository.save(promoExistente);
    }

    @Override
    public void eliminarPromocion(Integer id) {

        Promocion promo = repository.findById((long) id)
                .orElseThrow(() -> new RuntimeException("Promoción no encontrada"));

        repository.delete(promo);
    }
}