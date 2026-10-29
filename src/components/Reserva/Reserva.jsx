import { useEffect, useRef, useState } from 'react';
import './Reserva.css';

function Reserva({ habitacion, onCerrar }) {
  const ventana = useRef(null);
  const [paso, setPaso] = useState(1);
  const [entrada, setEntrada] = useState('');
  const [salida, setSalida] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
  const dia = String(fechaActual.getDate()).padStart(2, '0');
  const hoy = anio + '-' + mes + '-' + dia;

  useEffect(() => {
    const dialogo = ventana.current;
    dialogo.showModal();

    return () => dialogo.close();
  }, []);

  function continuar(evento) {
    evento.preventDefault();

    if (entrada < hoy || salida <= entrada) {
      setMensaje('El ingreso debe ser desde hoy y la salida debe ser posterior al ingreso.');
      return;
    }

    setMensaje('');
    setPaso(2);
  }

  function registrarReserva(evento) {
    evento.preventDefault();

    if (nombre.trim() === '' || telefono.trim() === '') {
      setMensaje('Completá tu nombre y teléfono.');
      return;
    }

    setMensaje('');
    setPaso(3);
  }

  function volver() {
    setMensaje('');
    setPaso(1);
  }

  return (
    <dialog
      className="reserva"
      ref={ventana}
      aria-labelledby="titulo-reserva"
      onCancel={(evento) => {
        evento.preventDefault();
        onCerrar();
      }}
      onClick={(evento) => {
        if (evento.target === evento.currentTarget) onCerrar();
      }}
    >
      <button className="cerrar-reserva" onClick={onCerrar} aria-label="Cerrar reserva">
        Cerrar
      </button>

      <h2 id="titulo-reserva">Reserva de {habitacion.nombre}</h2>

      {paso === 1 && (
        <form onSubmit={continuar}>
          <h3>1. Elegí las fechas</h3>

          <label htmlFor="entrada">Fecha de ingreso</label>
          <input
            id="entrada"
            type="date"
            value={entrada}
            min={hoy}
            onChange={(evento) => setEntrada(evento.target.value)}
            required
          />

          <label htmlFor="salida">Fecha de salida</label>
          <input
            id="salida"
            type="date"
            value={salida}
            min={entrada || hoy}
            onChange={(evento) => setSalida(evento.target.value)}
            required
          />

          {mensaje && <p className="mensaje-validacion" role="alert">{mensaje}</p>}
          <button type="submit">Continuar</button>
        </form>
      )}

      {paso === 2 && (
        <form onSubmit={registrarReserva}>
          <h3>2. Completá tus datos</h3>
          <p>Ingreso: {entrada} / Salida: {salida}</p>

          <label htmlFor="nombre">Nombre y apellido</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            type="tel"
            value={telefono}
            onChange={(evento) => setTelefono(evento.target.value)}
            autoComplete="tel"
            required
          />

          {mensaje && <p className="mensaje-validacion" role="alert">{mensaje}</p>}

          <div className="botones-reserva">
            <button type="button" onClick={volver}>Volver</button>
            <button type="submit">Confirmar reserva</button>
          </div>

        </form>
      )}

      {paso === 3 && (
        <div>
          <p className="reserva-aprobada" role="status">
            ¡Tu reserva ya está registrada!
          </p>
          <p>Gracias, {nombre}.</p>
          <p>Habitación: {habitacion.nombre}</p>
          <p>Ingreso: {entrada}</p>
          <p>Salida: {salida}</p>
          <button onClick={onCerrar}>Aceptar</button>
        </div>
      )}
    </dialog>
  );
}

export default Reserva;
