import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>ELES</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/club" className={location.pathname === '/club' ? 'active' : ''}>The Club</Link>
          <Link to="/method" className={location.pathname === '/method' ? 'active' : ''}>The Method</Link>
          <Link to="/workouts" className={location.pathname === '/workouts' ? 'active' : ''}>Workouts</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''}>FAQ</Link>
          <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
        </nav>
        <div className="header-actions">
          <button className="header-icon" title="Cart">🛒</button>
          {isLoggedIn ? (
            <button onClick={onLogout} className="header-icon" title="Logout">👤</button>
          ) : (
            <Link to="/login" className="header-icon" title="Login">👤</Link>
          )}
          <Link to="/planes" className="btn-subscribe">Subscribe</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
