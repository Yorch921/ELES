import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home-hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      {/* Central Axis: Title, Subtitle, CTA */}
      <div className="hero-main-content">
        <h1 className="hero-title">ELES CLUB</h1>
        <h2 className="hero-subtitle">Hybrid Pilates para mujeres reales</h2>

        <Link to="/club" className="hero-cta">
          JOIN THE CLUB
        </Link>
      </div>

      {/* Right Side Description Text */}
      <div className="hero-side-text">
        <p className="hero-description">
          ELES CLUB es un estudio online de Hybrid Pilates diseñado para mujeres reales.
          Clases dinámicas, funcionales y accesibles que tonifican, fortalecen y cuidan tu bienestar integral.
          Entrena cuando y donde quieras y consigue resultados visibles con rutinas adaptadas a tu día a día.
        </p>
      </div>
    </section>
  );
}

export default Home;
