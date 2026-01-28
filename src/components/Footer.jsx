import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <Link to="/">
              <img
                src="https://eles.dominacode.com/wp-content/uploads/2025/12/logo-ELES.webp"
                alt="ELES Pilates"
              />
            </Link>
          </div>

          {/* Links legales */}
          <div className="footer-links">
            <nav>
              <Link to="/privacy">Privacy</Link>
              <span className="separator" />
              <Link to="/cookies">Cookies</Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="footer-social">
            <a
              href="https://www.instagram.com/laura.eles/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/@lauraeles"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.tiktok.com/@laura.eles"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok" />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2026 Eles Club. Todos los derechos reservados.</p>
          <p className="footer-credits">
            Diseñado por{" "}
            <a
              href="https://www.dominacode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dominacode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
