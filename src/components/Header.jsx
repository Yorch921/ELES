import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, userPlan, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Pilates Online</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/planes">Planes</Link>
          {isLoggedIn ? (
            <>
              <span className="user-plan">{userPlan} Plan</span>
              <button onClick={onLogout} className="btn-logout">Cerrar Sesión</button>
            </>
          ) : (
            <Link to="/login" className="btn-login">Iniciar Sesión</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
