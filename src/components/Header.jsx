import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

// SVG Icons - Filled versions
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MinusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const BagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // Bloquear scroll cuando menú o carrito están abiertos
  useEffect(() => {
    document.body.style.overflow = menuOpen || cartOpen ? "hidden" : "";
  }, [menuOpen, cartOpen]);

  return (
    <>
      {/* Barra Superior - Redes Sociales */}
      <div className="topbar">
        <div className="social-icons">
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

      {/* Overlay carrito */}
      <div
        className={`cart-sidebar-overlay ${cartOpen ? "active" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Sidebar carrito */}
      <aside className={`cart-sidebar ${cartOpen ? "active" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>
            <BagIcon /> Mi Carrito
          </h2>
          <button className="cart-close-btn" onClick={() => setCartOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <CartIcon />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">{item.price.toFixed(2)} €</div>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        setCartItems((prev) =>
                          prev
                            .map((i) =>
                              i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                            )
                            .filter((i) => i.quantity > 0)
                        )
                      }
                    >
                      <MinusIcon />
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        setCartItems((prev) =>
                          prev.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                          )
                        )
                      }
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => setCartItems((prev) => prev.filter((i) => i.id !== item.id))}
                >
                  <TrashIcon />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-amount">{totalPrice.toFixed(2)} €</span>
            </div>
            <button className="cart-checkout-btn">Finalizar Compra</button>
          </div>
        )}
      </aside>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://eles.dominacode.com/wp-content/uploads/2025/12/logo-ELES.webp"
                alt="ELES Pilates"
              />
            </Link>
          </div>

          <nav className={`main-nav ${menuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/club" className="nav-link">
                  The Club
                </NavLink>
              </li>
              <li>
                <NavLink to="/method" className="nav-link">
                  The Method
                </NavLink>
              </li>
              <li>
                <NavLink to="/workouts" className="nav-link">
                  Workouts
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="nav-link">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>

              <li className="mobile-subscribe-item">
                <NavLink to="/login" className="nav-link subscribe-link">
                  <i className="fas fa-star" /> Suscríbete
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="icon-btn cart-btn" onClick={() => setCartOpen(true)}>
              <i className="fas fa-shopping-cart" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>

            <Link to="/login" className="icon-btn login-btn">
              <i className="fas fa-user" />
            </Link>

            <Link to="/login" className="subscribe-btn">
              <span>Subscribe</span>
            </Link>

            <button
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
