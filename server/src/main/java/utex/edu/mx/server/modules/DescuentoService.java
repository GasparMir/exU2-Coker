package utex.edu.mx.server.modules;

import org.springframework.stereotype.Service;

@Service
public class DescuentoService {

public double calcularDescuento(double cantidad, double porcentaje) {
    double decimal = porcentaje / 100.0;
    return cantidad * decimal;
}


    
}



