import ListaHabitaciones from '../components/Habitaciones/ListaHabitaciones';

function Inicio() {
  return (
    <div>
      <section className="bienvenida">
        <h1>Bienvenidos al Hotel Salta</h1>
        <p>Un lugar para descansar y disfrutar de tus vacaciones.</p>
        <img
          src={process.env.PUBLIC_URL + '/images/hotel.jpg'}
          alt="Hotel con piscina y espacios para descansar"
          className="imagen-hotel"
        />
        <p>Contamos con habitaciones cómodas, desayuno y piscina.</p>
      </section>

      <section>
        <h2>Nuestras habitaciones</h2>
        <p>Hacé clic en una imagen para elegir las fechas de tu reserva.</p>
        <ListaHabitaciones />
      </section>

      <section className="servicios">
        <h2>Servicios del hotel</h2>
        <ul>
          <li>Desayuno incluido.</li>
          <li>Conexión Wi-Fi.</li>
          <li>Piscina.</li>
          <li>Aire acondicionado.</li>
        </ul>
      </section>
    </div>
  );
}

export default Inicio;
