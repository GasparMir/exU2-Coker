package utex.edu.mx.server.modules;

import lombok.Data;

@Data
public class CantidadRequest {

    private double cantidad;
    private double porcentaje;

    public CantidadRequest() {
    }

    public CantidadRequest(double cantidad) {
        this.cantidad = cantidad;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public double getPorcentaje() {
        return porcentaje;
        }

    public void setPorcentaje(double porcentaje) {
        this.porcentaje = porcentaje;   
    }

    
    
}
