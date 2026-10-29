import ListaHabitaciones from '../components/Habitaciones/ListaHabitaciones';

function Habitaciones() {
  return (
    <div>
      <h1>Habitaciones</h1>
      <p>Elegí una habitación haciendo clic en la imagen o en el botón Reservar.</p>
      <ListaHabitaciones />
      <p>Los precios son por noche y están expresados en pesos argentinos.</p>
      <p>Ingreso: desde las 15:00. Salida: hasta las 11:00.</p>
    </div>
  );
}

export default Habitaciones;
