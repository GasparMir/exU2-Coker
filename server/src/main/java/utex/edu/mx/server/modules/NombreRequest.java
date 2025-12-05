package utex.edu.mx.server.modules;

import lombok.Data;

@Data
public class NombreRequest {

    private String nombres;
    private String apellidos;

    public NombreRequest() {
    }

    public NombreRequest(String nombres, String apellidos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
}
