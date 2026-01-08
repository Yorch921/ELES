import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Home.css';

function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Transforma tu cuerpo con Pilates</h1>
          <p>Accede a clases de pilates profesionales desde la comodidad de tu hogar</p>
          {!isLoggedIn ? (
            <div className="hero-buttons">
              <Link to="/planes" className="btn btn-primary">Ver Planes</Link>
              <Link to="/login" className="btn btn-secondary">Iniciar Sesión</Link>
            </div>
          ) : (
            <div className="hero-buttons">
              {user?.plan ? (
                <Link to="/videos" className="btn btn-primary">Ver Videos</Link>
              ) : (
                <Link to="/planes" className="btn btn-primary">Elegir Plan</Link>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Clases Profesionales</h3>
              <p>Instructores certificados con años de experiencia</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Acceso 24/7</h3>
              <p>Entrena cuando quieras, donde quieras</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Todos los Niveles</h3>
              <p>Desde principiantes hasta avanzados</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Videos HD</h3>
              <p>Contenido de alta calidad en video HD</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Comienza tu transformación hoy</h2>
          <p>Únete a miles de personas que ya han mejorado su salud con pilates</p>
          <Link to="/planes" className="btn btn-large">Ver Planes y Precios</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
