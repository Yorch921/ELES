import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const styles = [
    { title: "Sweat & Sculpt", videos: 33, img: "https://images.unsplash.com/photo-1518611012118-296072bb5602?q=80&w=600" },
    { title: "Strength", videos: 78, img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600" },
    { title: "Sculpt", videos: 56, img: "https://images.unsplash.com/photo-1522844990219-53586d5e5f39?q=80&w=600" },
    { title: "Stronger", videos: 64, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" }
  ];

  const formats = [
    { title: "Private Sessions", duration: "60 min", type: "Personalizado", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600" },
    { title: "Prenatal Pilates", duration: "45 min", type: "Especializado", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600" },
    { title: "Group Classes", duration: "55 min", type: "Variado", img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=600" }
  ];

  return (
    <div className="home">
      {/* Hero / Method Section */}
      <section className="method-section">
        <div className="container hero-method">
          <span className="badge">Nuestro Método</span>
          <h1>Pilates <span>Híbrido:</span> Donde la tradición encuentra la evolución</h1>
          <p className="description">
            No es solo Pilates. Es una <b>fusión inteligente</b> entre la técnica clásica de Joseph Pilates y la fuerza funcional contemporánea. Un método diseñado para mujeres que buscan más que ejercicio: buscan <b>transformación real</b>.
          </p>
          <div className="method-features">
            <div className="method-feature">
              <span className="feature-icon-small">✓</span> Control + Fuerza
            </div>
            <div className="method-feature">
              <span className="feature-icon-small">✓</span> Cuerpo + Mente
            </div>
            <div className="method-feature">
              <span className="feature-icon-small">✓</span> Tradición + Innovación
            </div>
          </div>
          <button className="btn-primary">Descubre los beneficios</button>
        </div>
      </section>

      {/* Class Styles */}
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Class Styles</h2>
          <div className="carousel-container">
            {styles.map((style, i) => (
              <div key={i} className="card">
                <img src={style.img} alt={style.title} className="card-img" />
                <div className="card-overlay">
                  <h3>{style.title}</h3>
                  <p>{style.videos} videos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Formats */}
      <section className="carousel-section">
        <div className="container">
          <h2 className="section-title">Class Formats</h2>
          <div className="carousel-container">
            {formats.map((format, i) => (
              <div key={i} className="card">
                <img src={format.img} alt={format.title} className="card-img" />
                <div className="card-overlay">
                  <h3>{format.title}</h3>
                  <p>{format.duration} | {format.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="container bio-section">
          <div className="bio-image-wrapper">
            <img src="https://images.unsplash.com/photo-1518611012118-296072bb5602?q=80&w=800" alt="Laura" className="bio-img" />
            <div className="experience-badge">
              <h2>8+</h2>
              <p>Años de experiencia</p>
            </div>
          </div>
          <div className="bio-content">
            <span className="badge">Sobre mí</span>
            <h2>Soy Laura, y esto es más que Pilates</h2>
            <span className="highlight">Instructora certificada, mujer real y creyente del poder transformador del movimiento consciente.</span>
            <p className="bio-text">
              Creé ELES porque sé lo que se siente estar desconectada de tu cuerpo. Y sé, por experiencia propia, que es posible volver a habitarlo con fuerza, conciencia y amor.
            </p>
            <ul className="certifications">
              <li><span className="check-icon">✓</span> Instructora Certificada de Pilates Clásico</li>
              <li><span className="check-icon">✓</span> Especialización en Pilates Postparto y Suelo Pélvico</li>
              <li><span className="check-icon">✓</span> Certificación en Entrenamiento Funcional y Fuerza</li>
            </ul>
            <div className="method-features">
              <button className="btn-primary">Conoce el método</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
