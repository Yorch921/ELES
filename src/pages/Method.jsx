import { Link } from "react-router-dom";
import "./Method.css";

export default function Method() {
  return (
    <main className="method-page">
      {/* HERO SECTION */}
      <section className="method-hero">
        <div className="hero-container">
          <span className="hero-label">The Method</span>

          <h1 className="hero-title">
            Un método diseñado para <span className="highlight">mujeres reales</span>
          </h1>

          <p className="hero-description">
            Hybrid Pilates es una combinación consciente de fuerza, control,
            movilidad y bienestar. No se trata de entrenar más, sino de entrenar mejor.
          </p>

          <div className="hero-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <div className="hero-feature-text">Fuerza funcional</div>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <div className="hero-feature-text">Movilidad consciente</div>
            </div>
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="hero-feature-text">Resultados reales</div>
            </div>
          </div>

          <div className="hero-cta">
            <Link to="/club" className="hero-btn">
              Descubre The Club
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Column - Image */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Hybrid Pilates Method"
                className="about-image"
              />
              <div className="about-image-badge">
                <div className="about-image-badge-number">100%</div>
                <div className="about-image-badge-text">Personalizable</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-content">
            <span className="about-label">Nuestra Filosofía</span>

            <h2 className="about-title">Entrenar desde el respeto al cuerpo</h2>

            <p className="about-subtitle">
              Sin castigos, sin presión. Solo movimiento inteligente.
            </p>

            <p className="about-text">
              El método ELES nace de la necesidad de crear entrenamientos que se adapten
              a la vida real de las mujeres, no al revés. Cada sesión está pensada para
              <strong> fortalecer sin castigar</strong>, mejorar la postura y crear hábitos sostenibles.
            </p>

            <p className="about-text">
              No buscamos cuerpos perfectos, buscamos cuerpos <strong>funcionales, fuertes y sanos</strong>.
              Mujeres que entrenan por bienestar, no por obligación.
            </p>

            <div className="about-highlight-box">
              <p className="about-highlight-text">
                "El verdadero cambio no está en entrenar todos los días,
                sino en encontrar una forma de moverte que puedas sostener toda la vida."
              </p>
            </div>

            <div className="about-credentials">
              <h3 className="about-credentials-title">Por qué confiar en este método</h3>
              <div className="about-credentials-list">
                <div className="credential-item">
                  <div className="credential-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Basado en principios científicos de biomecánica y movilidad</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Diseñado por profesionales certificadas en Pilates y entrenamiento funcional</span>
                </div>
                <div className="credential-item">
                  <div className="credential-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span>Adaptable a todos los niveles y fases de la vida de una mujer</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <Link to="/club" className="about-btn">
                Únete al Club
              </Link>
              <div className="about-social-links">
                <a href="https://www.instagram.com/laura.eles/" target="_blank" rel="noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@lauraeles" target="_blank" rel="noreferrer" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com/@laura.eles" target="_blank" rel="noreferrer" className="social-link">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-header">
            <div className="benefits-subtitle">Beneficios</div>
            <h2 className="benefits-title">¿Por qué Hybrid Pilates?</h2>
            <p className="benefits-description">
              Un método que combina lo mejor del pilates clásico con entrenamiento funcional
              para darte resultados visibles y sostenibles.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3 className="benefit-title">Tonificación real</h3>
              <p className="benefit-text">
                Trabajo profundo de fuerza sin impacto agresivo.
                Definición muscular progresiva y resultados que se notan.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-person-walking"></i>
              </div>
              <h3 className="benefit-title">Postura y control</h3>
              <p className="benefit-text">
                Mejora tu alineación corporal, elimina dolores crónicos y
                gana conciencia en cada movimiento.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3 className="benefit-title">Bienestar integral</h3>
              <p className="benefit-text">
                Menos estrés, más energía y equilibrio.
                El ejercicio como herramienta de autocuidado, no de castigo.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="benefit-title">Eficiencia de tiempo</h3>
              <p className="benefit-text">
                Sesiones de 20-40 minutos que encajan en tu día a día.
                Máximos resultados con mínimo tiempo.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-shield-heart"></i>
              </div>
              <h3 className="benefit-title">Prevención de lesiones</h3>
              <p className="benefit-text">
                Fortalece articulaciones, mejora la movilidad y
                protege tu cuerpo a largo plazo.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="benefit-title">Comunidad de apoyo</h3>
              <p className="benefit-text">
                Conecta con mujeres que comparten tus mismos objetivos
                y entienden tu proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="audience-section">
        <div className="audience-container">
          <div className="audience-header">
            <div className="audience-subtitle">Para Ti</div>
            <h2 className="audience-title">
              Este método es para ti si <span className="highlight">te identificas</span>
            </h2>
            <p className="audience-intro">
              Hemos diseñado este método pensando en mujeres reales, con vidas reales.
              Si te ves reflejada en alguna de estas situaciones, ELES Club es tu espacio.
            </p>
          </div>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-card-header">
                <div className="audience-avatar">M</div>
                <div>
                  <h3 className="audience-card-title">María</h3>
                  <div className="audience-card-age">32 años, mamá de 2</div>
                </div>
              </div>
              <p className="audience-card-description">
                "Quiero recuperar mi fuerza sin sentirme culpable por no ir al gimnasio.
                Necesito entrenar desde casa, a mi ritmo."
              </p>
              <div className="audience-card-needs">
                <div className="audience-need-item">Sesiones cortas que encajen en tu rutina</div>
                <div className="audience-need-item">Recuperación postparto segura</div>
                <div className="audience-need-item">Tonificación sin presión estética</div>
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card-header">
                <div className="audience-avatar">S</div>
                <div>
                  <h3 className="audience-card-title">Sofía</h3>
                  <div className="audience-card-age">28 años, profesional</div>
                </div>
              </div>
              <p className="audience-card-description">
                "Paso muchas horas sentada y mi espalda lo sufre.
                Busco un método que me ayude con la postura y me dé energía."
              </p>
              <div className="audience-card-needs">
                <div className="audience-need-item">Alivio de dolores de espalda y cuello</div>
                <div className="audience-need-item">Movilidad y flexibilidad funcional</div>
                <div className="audience-need-item">Entrenamientos que dan energía, no que agotan</div>
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card-header">
                <div className="audience-avatar">L</div>
                <div>
                  <h3 className="audience-card-title">Laura</h3>
                  <div className="audience-card-age">45 años, en transición</div>
                </div>
              </div>
              <p className="audience-card-description">
                "Quiero cuidarme sin obsesionarme. Entrenar me hace sentir bien,
                pero necesito algo sostenible y respetuoso con mi cuerpo."
              </p>
              <div className="audience-card-needs">
                <div className="audience-need-item">Entrenamiento adaptado a cambios hormonales</div>
                <div className="audience-need-item">Fuerza y densidad ósea</div>
                <div className="audience-need-item">Bienestar mental y físico</div>
              </div>
            </div>
          </div>

          <div className="audience-footer">
            <h3 className="audience-footer-title">¿Te ves reflejada?</h3>
            <p className="audience-footer-text">
              No importa tu edad, tu nivel o tus circunstancias. Si buscas cuidarte sin presión,
              fortalecer tu cuerpo y sentirte bien contigo misma, este es tu lugar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
