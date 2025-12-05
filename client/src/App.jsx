import { useState } from "react";

function App() {

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [saludo, setSaludo] = useState("");

  const enviar = async () => {
    const res = await fetch("http://operations:8080/api/saludar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombres, apellidos })
    });

    const data = await res.json();
    setSaludo(data.data);
  };
 
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand mb-0 h1 text-white">
          Jesus Gaspar Miranda Lamadrid - 10B
        </span>
      </nav>

      {/* BODY */}
      <div className="container mt-4">
        <h2 className="mb-3">Formulario para saludar</h2>

        <div className="mb-3">
          <label className="form-label">Nombres</label>
          <input
            className="form-control"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            className="form-control"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={enviar}>
          Saludar
        </button>

        {saludo && (
          <div className="alert alert-success mt-3">
            {saludo}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
