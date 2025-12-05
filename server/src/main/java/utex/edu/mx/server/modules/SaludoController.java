package utex.edu.mx.server.modules;

import org.springframework.web.bind.annotation.*;
import utex.edu.mx.server.utils.APIResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SaludoController {

    private final SaludoService saludoService;

    public SaludoController(SaludoService saludoService) {
        this.saludoService = saludoService;
    }

    @PostMapping("/saludar")
    public APIResponse saludar(@RequestBody NombreRequest request) {
        String nombreCompleto = request.getNombres() + " " + request.getApellidos();
        String saludo = saludoService.generarSaludo(nombreCompleto);
        return new APIResponse(true, "Saludo generado correctamente", saludo);
    }
}
