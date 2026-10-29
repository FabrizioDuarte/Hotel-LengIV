import { Link } from 'react-router-dom';

function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <h2>Hotel Salta</h2>
      <p>Podés consultar nuestras habitaciones y elegir las fechas desde esta página.</p>
      <p>Horario de ingreso: desde las 15:00.</p>
      <p>Horario de salida: hasta las 11:00.</p>
      <Link className="boton" to="/habitaciones">Ver habitaciones</Link>
    </div>
  );
}

export default Contacto;
