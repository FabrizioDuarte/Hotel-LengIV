import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/images/logo-hotel.png'}
          alt="Hotel Salta, inicio"
          className="logo"
        />
      </Link>

      <nav aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/habitaciones">Habitaciones</Link>
        <Link to="/acerca-de">Acerca del hotel</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
