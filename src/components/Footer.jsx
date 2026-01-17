import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h1>ELES</h1>
          </div>
          <nav className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">YT</a>
          <a href="#" className="social-icon">TK</a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Eles Club. Todos los derechos reservados.</p>
          <p>Diseñado por Dominacode</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
