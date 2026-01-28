import { useState } from "react";
import { Link } from "react-router-dom";
import "./Club.css";

export default function Club() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Saving email to DB:", email);
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Reset form after modal closes
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 500);
  };

  return (
    <main className="club-page">
      {/* Hero Section */}
      <section className="club-hero">
        <h1 className="club-title">THE CLUB</h1>
        <p className="club-subtitle">
          Cada mujer es distinta y su camino también. En ELES CLUB hemos diseñado diferentes espacios para que
          encuentres exactamente lo que necesitas: desde entrenar a tu ritmo con total flexibilidad, hasta vivir un
          proceso de transformación profunda con acompañamiento personal.
        </p>
      </section>

      {/* Memberships */}
      <section className="memberships-section">
        <div className="memberships-container">

          {/* Plan Basic */}
          <div className="plan-card">
            <div className="plan-name">Basic Plan</div>
            <p className="plan-description">
              Ideal para comenzar a cuidar de ti con flexibilidad. Accede a una selección esencial de clases y
              mantén tu constancia sin presiones.
            </p>
            <div className="plan-price">29€<span className="plan-period">/mes</span></div>

            <ul className="plan-features">
              <li>Selección de clases "Essentials"</li>
              <li>2 nuevos workouts semanales</li>
              <li>Acceso desde cualquier dispositivo</li>
              <li>Guía de iniciación al método</li>
            </ul>
            <Link to="/login" className="plan-btn">Elegir Plan Básico</Link>
          </div>

          {/* Plan Premium */}
          <div className="plan-card premium">
            <div className="badge-recommended">Más Elegido</div>
            <div className="plan-name">Premium Club</div>
            <p className="plan-description">
              La experiencia completa. Accede a toda la librería de contenidos y profundiza en tu práctica con
              nuevos desafíos cada mes.
            </p>
            <div className="plan-price">49€<span className="plan-period">/mes</span></div>

            <ul className="plan-features">
              <li><strong>Acceso ilimitado</strong> a +200 clases</li>
              <li>Nuevos programas cada mes</li>
              <li>Calendarios de entrenamiento</li>
              <li>Comunidad privada ELES</li>
              <li>Prioridad en eventos y retiros</li>
            </ul>
            <Link to="/login" className="plan-btn">Acceso Completo</Link>
          </div>

          {/* Wellness Coaching */}
          <div className="plan-card">
            <div className="plan-name">Wellness Coaching</div>
            <p className="plan-description">
              Un programa exclusivo de acompañamiento 1 a 1 para quienes buscan una transformación profunda y
              personalizada de cuerpo y mente.
            </p>

            <div className="plan-price-placeholder">
              Acceso bajo solicitud
            </div>

            <ul className="plan-features">
              <li>Plan de acción 100% personalizado</li>
              <li>Seguimiento semanal individual</li>
              <li>Estrategia de nutrición y hábitos</li>
              <li>Contacto directo con Laura</li>
            </ul>
            <button
              id="btn-wellness-coaching"
              className="plan-btn"
              onClick={() => setModalOpen(true)}
            >
              Solicitar Acceso
            </button>
          </div>

        </div>
      </section>

      {/* One-time Programs */}
      <section className="programs-section">
        <div className="programs-header">
          <h2 className="programs-title">Experiencias y Programas</h2>
          <p className="programs-intro">
            ¿Buscas un objetivo concreto o prefieres no suscribirte? Descubre nuestros programas intensivos de pago
            único. Retos diseñados para resetear tu cuerpo y mente en tiempos específicos, sin ataduras.
          </p>
        </div>

        <div className="programs-grid">

          <div className="program-card">
            <div
              className="program-image"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1544367563-12123d8966cd?w=800&q=80')"}}
            ></div>
            <div className="program-content">
              <h3 className="program-title">7 Days Detox</h3>
              <p className="program-desc">Una semana para reiniciar. 7 días de movimiento fluido y alimentación
                consciente para eliminar la inflamación y recuperar tu energía vital.</p>
              <div className="program-meta">
                <span className="program-price">19€</span>
                <Link to="/shop" className="program-link">
                  Ver Programa <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="program-card">
            <div
              className="program-image"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80')"}}
            ></div>
            <div className="program-content">
              <h3 className="program-title">21 Days Transformation</h3>
              <p className="program-desc">El tiempo exacto para crear un hábito. 3 semanas de entrenamiento progresivo
                de fuerza y pilates para transformar tu silueta.</p>
              <div className="program-meta">
                <span className="program-price">39€</span>
                <Link to="/shop" className="program-link">
                  Ver Programa <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wellness Modal */}
      {modalOpen && (
        <div id="wellnessModal" className={`modal ${modalOpen ? 'show' : ''}`}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h2 className="modal-title">Wellness Coaching</h2>
            <p className="modal-text">
              Déjanos tu email para entrar en la lista de espera. Te contactaremos personalmente
              cuando se abran nuevas plazas.
            </p>

            {!submitted ? (
              <form id="wellnessForm" onSubmit={submitForm}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Tu Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn" id="submitBtn">
                  {isSubmitting ? 'Guardando...' : 'Unirme a la lista'}
                </button>
              </form>
            ) : (
              <div className="success-message" id="successMessage">
                <i className="fas fa-check-circle"></i> ¡Gracias! Te hemos añadido a la lista.
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
