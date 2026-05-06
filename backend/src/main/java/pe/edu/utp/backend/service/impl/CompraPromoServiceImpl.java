package pe.edu.utp.backend.service.impl;
import org.springframework.stereotype.Service;
import pe.edu.utp.backend.entity.CompraPromo;
import pe.edu.utp.backend.repository.CompraPromoRepository;
import pe.edu.utp.backend.service.CompraPromoService;
import java.util.List;
import java.util.Optional;
@Service
public class CompraPromoServiceImpl implements CompraPromoService {
    private final CompraPromoRepository comprapromoRepository;
    public CompraPromoServiceImpl(CompraPromoRepository comprapromoRepository) {
        this.comprapromoRepository = comprapromoRepository;
    }
    @Override
    public CompraPromo crear(CompraPromo comprapromo) {
        return comprapromoRepository.save(comprapromo);
    }
    @Override
    public Optional<CompraPromo> obtenerPorId(Long id) {
        return comprapromoRepository.findById(id);
    }
    @Override
    public List<CompraPromo> obtenerTodos() {
        return comprapromoRepository.findAll();
    }
    @Override
    public CompraPromo actualizar(Long id, CompraPromo comprapromo) {
        return comprapromoRepository.findById(id)
                .map(existente -> {
                    existente.setCompra(comprapromo.getCompra());
                    existente.setPromocion(comprapromo.getPromocion());
                    return comprapromoRepository.save(existente);
                })
                .orElseThrow(() -> new RuntimeException("CompraPromo no encontrado"));
    }
    @Override
    public void eliminar(Long id) {
        comprapromoRepository.deleteById(id);
    }
}
