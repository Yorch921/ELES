import { useState } from "react";
import "./Workouts.css";

export default function Workouts() {
  const [stylesIndex, setStylesIndex] = useState(0);
  const [formatsIndex, setFormatsIndex] = useState(0);
  const [titlesIndex, setTitlesIndex] = useState(0);

  // Class Styles Data
  const classStyles = [
    {
      title: "HYBRID PILATES",
      videos: "24 videos",
      description: "Entrenamientos completos combinando fuerza y control.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80"
    },
    {
      title: "SCULPT",
      videos: "18 videos",
      description: "Tonificación enfocada en glúteos y core.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    },
    {
      title: "MOBILITY",
      videos: "12 videos",
      description: "Sesiones para liberar tensión y mejorar movilidad.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
    },
    {
      title: "EXPRESS",
      videos: "10 videos",
      description: "Entrena rápido sin perder efectividad.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    }
  ];

  // Class Formats Data
  const classFormats = [
    {
      title: "30 MIN FLOW",
      duration: "30 min",
      level: "All levels",
      description: "Perfecto para días con poco tiempo.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
    },
    {
      title: "45 MIN STRENGTH",
      duration: "45 min",
      level: "Intermediate",
      description: "Fuerza controlada y consciente.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80"
    },
    {
      title: "60 MIN FULL BODY",
      duration: "60 min",
      level: "Advanced",
      description: "Trabajo completo y profundo.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    },
    {
      title: "20 MIN CORE",
      duration: "20 min",
      level: "All levels",
      description: "Trabajo intenso de centro y abdomen.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80"
    }
  ];

  // Programs Data
  const programs = [
    {
      title: "7 Days Detox",
      videos: "7 videos",
      price: "19€",
      description: "Una semana para reiniciar cuerpo y energía.",
      image: "https://images.unsplash.com/photo-1544367563-12123d8966cd?w=800&q=80"
    },
    {
      title: "21 Days Transformation",
      videos: "21 videos",
      price: "39€",
      description: "3 semanas para crear un hábito real.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80"
    },
    {
      title: "Core Reset",
      videos: "14 videos",
      price: "29€",
      description: "Fortalece tu centro en 2 semanas.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80"
    },
    {
      title: "Posture Fix",
      videos: "10 videos",
      price: "24€",
      description: "Corrige tu postura y elimina dolores.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80"
    }
  ];

  const cardsPerView = 4;
  const maxStylesIndex = Math.max(0, classStyles.length - cardsPerView);
  const maxFormatsIndex = Math.max(0, classFormats.length - cardsPerView);
  const maxTitlesIndex = Math.max(0, programs.length - cardsPerView);

  const moveCarousel = (direction, currentIndex, setIndex, maxIndex) => {
    if (direction === "next" && currentIndex < maxIndex) {
      setIndex(currentIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  return (
    <main className="workouts-page">
      {/* CLASS STYLES SECTION */}
      <section className="class-styles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">CLASS STYLES</h2>
            <span className="view-all">View all →</span>
          </div>

          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${stylesIndex * (100 / cardsPerView)}%)` }}>
                {classStyles.map((item, idx) => (
                  <div className="class-card" key={idx}>
                    <img src={item.image} alt={item.title} className="card-image" />
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <div className="card-info">
                        <span className="video-count">{item.videos}</span>
                      </div>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-nav prev">
              <button
                className={`nav-button ${stylesIndex === 0 ? "disabled" : ""}`}
                onClick={() => moveCarousel("prev", stylesIndex, setStylesIndex, maxStylesIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="carousel-nav next">
              <button
                className={`nav-button ${stylesIndex === maxStylesIndex ? "disabled" : ""}`}
                onClick={() => moveCarousel("next", stylesIndex, setStylesIndex, maxStylesIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="carousel-dots">
            {[...Array(maxStylesIndex + 1)].map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === stylesIndex ? "active" : ""}`}
                onClick={() => setStylesIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CLASS FORMATS SECTION */}
      <section className="class-formats-section">
        <div className="formats-container">
          <div className="formats-header">
            <h2 className="formats-title">CLASS FORMATS</h2>
            <span className="formats-view-all">View all →</span>
          </div>

          <div className="formats-carousel-wrapper">
            <div className="formats-carousel-container">
              <div className="formats-carousel-track" style={{ transform: `translateX(-${formatsIndex * (100 / cardsPerView)}%)` }}>
                {classFormats.map((item, idx) => (
                  <div className="formats-card" key={idx}>
                    <img src={item.image} alt={item.title} className="formats-card-image" />
                    <div className="formats-card-content">
                      <h3 className="formats-card-title">{item.title}</h3>
                      <div className="formats-card-info">
                        <span className="formats-duration">{item.duration}</span>
                        <span className="formats-level">{item.level}</span>
                      </div>
                      <p className="formats-card-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="formats-carousel-nav prev">
              <button
                className={`formats-nav-button ${formatsIndex === 0 ? "disabled" : ""}`}
                onClick={() => moveCarousel("prev", formatsIndex, setFormatsIndex, maxFormatsIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="formats-carousel-nav next">
              <button
                className={`formats-nav-button ${formatsIndex === maxFormatsIndex ? "disabled" : ""}`}
                onClick={() => moveCarousel("next", formatsIndex, setFormatsIndex, maxFormatsIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="formats-carousel-dots">
            {[...Array(maxFormatsIndex + 1)].map((_, idx) => (
              <span
                key={idx}
                className={`formats-dot ${idx === formatsIndex ? "active" : ""}`}
                onClick={() => setFormatsIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="titles-purchase-section">
        <div className="titles-container">
          <div className="titles-header">
            <h2 className="titles-section-title">PROGRAMS & CHALLENGES</h2>
            <a href="#" className="titles-view-all">
              View All Shop <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="titles-carousel-wrapper">
            <div className="titles-carousel-container">
              <div className="titles-carousel-track" style={{ transform: `translateX(-${titlesIndex * (100 / cardsPerView)}%)` }}>
                {programs.map((item, idx) => (
                  <div className="titles-course-card" key={idx}>
                    <div className="titles-card-image-wrapper">
                      <img src={item.image} alt={item.title} className="titles-card-image" />
                    </div>
                    <div className="titles-card-content">
                      <h3 className="titles-card-title">{item.title}</h3>
                      <p className="titles-card-description">{item.description}</p>
                      <div className="titles-card-meta">
                        <span className="titles-card-videos">{item.videos}</span>
                      </div>
                      <div className="titles-card-footer">
                        <span className="titles-price">{item.price}</span>
                        <button className="titles-buy-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="titles-carousel-nav prev">
              <button
                className={`titles-nav-button ${titlesIndex === 0 ? "disabled" : ""}`}
                onClick={() => moveCarousel("prev", titlesIndex, setTitlesIndex, maxTitlesIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="titles-carousel-nav next">
              <button
                className={`titles-nav-button ${titlesIndex === maxTitlesIndex ? "disabled" : ""}`}
                onClick={() => moveCarousel("next", titlesIndex, setTitlesIndex, maxTitlesIndex)}
              >
                <svg viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="titles-carousel-dots">
            {[...Array(maxTitlesIndex + 1)].map((_, idx) => (
              <span
                key={idx}
                className={`titles-dot ${idx === titlesIndex ? "active" : ""}`}
                onClick={() => setTitlesIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
