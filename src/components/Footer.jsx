import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pilates Online</h3>
            <p>Tu plataforma de pilates en línea</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/videos">Videos</a></li>
              <li><a href="/planes">Planes</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@pilatesonline.com</p>
            <p>Tel: +1 234 567 890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Pilates Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
