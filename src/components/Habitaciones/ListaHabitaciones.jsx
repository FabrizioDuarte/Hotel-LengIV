import { useState } from 'react';
import Reserva from '../Reserva/Reserva';
import './Habitaciones.css';

const habitaciones = [
  {
    id: 1,
    nombre: 'Habitación clásica',
    descripcion: 'Habitación con cama doble para dos personas.',
    imagen: 'clasica.jpg',
    precio: 50000,
  },
  {
    id: 2,
    nombre: 'Habitación superior',
    descripcion: 'Habitación con cama doble y un espacio más amplio.',
    imagen: 'superior.jpg',
    precio: 75000,
  },
  {
    id: 3,
    nombre: 'Suite',
    descripcion: 'Habitación amplia para disfrutar de tu estadía.',
    imagen: 'suite.jpg',
    precio: 100000,
  },
];

function ListaHabitaciones() {
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);

  return (
    <div>
      <div className="lista-habitaciones">
        {habitaciones.map((habitacion) => (
          <div className="habitacion" key={habitacion.id}>
            <button
              className="foto-habitacion"
              onClick={() => setHabitacionSeleccionada(habitacion)}
              aria-label={'Reservar ' + habitacion.nombre}
              aria-haspopup="dialog"
            >
              <img
                src={process.env.PUBLIC_URL + '/images/' + habitacion.imagen}
                alt={habitacion.descripcion}
              />
            </button>

            <h3>{habitacion.nombre}</h3>
            <p>{habitacion.descripcion}</p>
            <p><strong>${habitacion.precio.toLocaleString('es-AR')} por noche</strong></p>

            <button onClick={() => setHabitacionSeleccionada(habitacion)}>
              Reservar
            </button>
          </div>
        ))}
      </div>

      {habitacionSeleccionada && (
        <Reserva
          habitacion={habitacionSeleccionada}
          onCerrar={() => setHabitacionSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default ListaHabitaciones;
