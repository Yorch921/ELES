import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Videos.css';

const videosData = [
  {
    id: 1,
    title: 'Pilates para Principiantes',
    duration: '25 min',
    level: 'Principiante',
    category: 'basic',
    thumbnail: '🧘‍♀️',
    description: 'Introducción al pilates con ejercicios básicos'
  },
  {
    id: 2,
    title: 'Fortalecimiento del Core',
    duration: '30 min',
    level: 'Intermedio',
    category: 'basic',
    thumbnail: '💪',
    description: 'Rutina enfocada en fortalecer el abdomen'
  },
  {
    id: 3,
    title: 'Pilates Matutino',
    duration: '20 min',
    level: 'Principiante',
    category: 'basic',
    thumbnail: '☀️',
    description: 'Ejercicios suaves para comenzar el día'
  },
  {
    id: 4,
    title: 'Flexibilidad y Estiramiento',
    duration: '35 min',
    level: 'Todos',
    category: 'basic',
    thumbnail: '🤸‍♀️',
    description: 'Mejora tu flexibilidad con esta rutina'
  },
  {
    id: 5,
    title: 'Pilates Avanzado',
    duration: '45 min',
    level: 'Avanzado',
    category: 'premium',
    thumbnail: '🔥',
    description: 'Rutina intensiva para usuarios experimentados',
    premium: true
  },
  {
    id: 6,
    title: 'Pilates con Accesorios',
    duration: '40 min',
    level: 'Intermedio',
    category: 'premium',
    thumbnail: '🎯',
    description: 'Ejercicios con banda elástica y pelota',
    premium: true
  },
  {
    id: 7,
    title: 'Clase Exclusiva: Espalda Sana',
    duration: '50 min',
    level: 'Todos',
    category: 'premium',
    thumbnail: '⭐',
    description: 'Rutina especial para fortalecer la espalda',
    premium: true
  },
  {
    id: 8,
    title: 'Power Pilates',
    duration: '55 min',
    level: 'Avanzado',
    category: 'premium',
    thumbnail: '💥',
    description: 'Entrenamiento de alta intensidad',
    premium: true
  }
];

function Videos() {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div className="videos-page">
        <div className="access-denied">
          <h2>Acceso Restringido</h2>
          <p>Debes iniciar sesión para ver los videos</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  if (!user?.plan) {
    return (
      <div className="videos-page">
        <div className="access-denied">
          <h2>Sin Suscripción</h2>
          <p>Necesitas un plan activo para acceder a los videos</p>
          <button onClick={() => navigate('/planes')} className="btn btn-primary">
            Ver Planes
          </button>
        </div>
      </div>
    );
  }

  const canAccessVideo = (video) => {
    if (user.plan === 'premium') return true;
    if (user.plan === 'simple' && !video.premium) return true;
    return false;
  };

  const basicVideos = videosData.filter(v => v.category === 'basic');
  const premiumVideos = videosData.filter(v => v.category === 'premium');

  return (
    <div className="videos-page">
      <div className="videos-header">
        <h1>Biblioteca de Videos</h1>
        <p>Tienes el <strong>{user.plan === 'simple' ? 'Plan Simple' : 'Plan Premium'}</strong></p>
      </div>

      <div className="videos-container">
        <section className="video-section">
          <h2>Videos Básicos</h2>
          <div className="videos-grid">
            {basicVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                canAccess={canAccessVideo(video)}
              />
            ))}
          </div>
        </section>

        <section className="video-section">
          <h2>Videos Premium</h2>
          <div className="videos-grid">
            {premiumVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                canAccess={canAccessVideo(video)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function VideoCard({ video, canAccess }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!canAccess) {
      if (confirm('Este video requiere el Plan Premium. ¿Deseas actualizar tu plan?')) {
        navigate('/planes');
      }
    } else {
      alert(`Reproduciendo: ${video.title}\n(En una versión completa, aquí se abriría el reproductor de video)`);
    }
  };

  return (
    <div className={`video-card ${!canAccess ? 'locked' : ''}`} onClick={handleClick}>
      {video.premium && <div className="premium-badge">Premium</div>}
      {!canAccess && <div className="lock-overlay">🔒</div>}

      <div className="video-thumbnail">{video.thumbnail}</div>

      <div className="video-info">
        <h3>{video.title}</h3>
        <p className="video-description">{video.description}</p>
        <div className="video-meta">
          <span className="duration">{video.duration}</span>
          <span className="level">{video.level}</span>
        </div>
      </div>
    </div>
  );
}

export default Videos;
