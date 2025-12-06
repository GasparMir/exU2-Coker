package utex.edu.mx.server.modules;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import utex.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DescuentoController {

    private final DescuentoService descuentoService;
    public DescuentoController(DescuentoService descuentoService) {
        this.descuentoService = descuentoService;
    }

    @PostMapping("/calcular-descuento")
    public APIResponse calcularDescuento(@RequestBody CantidadRequest request) {
        double descuento = descuentoService.calcularDescuento(request.getCantidad(), request.getPorcentaje());
        return new APIResponse(true, "Descuento calculado correctamente", descuento);

    
}
}
