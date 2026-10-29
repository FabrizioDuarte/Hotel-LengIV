import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './pages/Inicio';
import Habitaciones from './pages/Habitaciones';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="*" element={
            <div>
              <h1>Página no encontrada</h1>
              <Link to="/">Volver al inicio</Link>
            </div>
          } />
        </Routes>
      </main>

      <footer>
        <p>Hotel Salta - Trabajo práctico de React</p>
      </footer>
    </>
  );
}

export default App;
