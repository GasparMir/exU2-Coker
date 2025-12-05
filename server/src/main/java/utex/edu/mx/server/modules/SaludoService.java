package utex.edu.mx.server.modules;

import org.springframework.stereotype.Service;

@Service
public class SaludoService {

    public String generarSaludo(String nombreCompleto) {
        return "Hola " + nombreCompleto + ", ¿Cómo estás?";
    }
}
