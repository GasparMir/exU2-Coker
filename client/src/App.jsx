import React, { useState } from 'react';

function App() {
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState(null);
  const [descuento, setDescuento] = useState(null);
  const [porcentaje, setPorcentaje] = useState('');
  const [loading, setLoading] = useState(false);

  const calcular = async () => {
    const cantidadNum = parseFloat(cantidad);
    const porcentajeNum = parseFloat(porcentaje);
    if (isNaN(cantidadNum)) {
      setResultado(null);
      setDescuento(null);
      return;
    }
    setLoading(true);
    try {
      // Si el usuario proporcionó un porcentaje válido, calcular localmente
      if (!isNaN(porcentajeNum)) {
        const descuentoCalc = cantidadNum * (porcentajeNum / 100);
        const final = cantidadNum - descuentoCalc;
        setDescuento(descuentoCalc);
        setResultado(final);
      } else {
        // Si no hay porcentaje, pedir al backend la lógica por rangos
        const res = await fetch('http://localhost:8080/api/calcular-descuento', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cantidad: cantidadNum })
        });
        const json = await res.json();
        const descuentoCalc = Number(json.data) || 0;
        const final = cantidadNum - descuentoCalc;
        setDescuento(descuentoCalc);
        setResultado(final);
      }
    } catch (err) {
      console.error('Error al calcular descuento:', err);
      setResultado(null);
      setDescuento(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Jesus Gaspar Miranda Lamadrid - 10°B</a>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Calculadora de descuentos</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputCantidad"
                name="money"
                placeholder="Cantidad $"
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
              />
              <label htmlFor="inputCantidad">Cantidad $</label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="inputDiscount"
                name="discount"
                placeholder="Porcentaje %"
                value={porcentaje}
                onChange={e => setPorcentaje(e.target.value)}
              />
              <label htmlFor="inputDiscount">Porcentaje %</label>
            </div>
          </div>
          <div className="col-4">
            <button className="btn btn-primary col-12 h-100" onClick={calcular} disabled={loading}>
              {loading ? 'Calculando...' : 'Calcular descuento'}
            </button>
          </div>
        </div>
        <br />
        <h3>Resultado: {resultado === null ? '0' : resultado.toFixed(2)}</h3>
        {descuento !== null && <p>Descuento aplicado: ${descuento.toFixed(2)}</p>}
      </div>
    </>
  );
}

export default App;