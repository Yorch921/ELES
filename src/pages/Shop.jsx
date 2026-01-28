import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setSubscribed(true);
  };

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1 className="shop-title">Shop Coming Soon</h1>
        <p className="shop-subtitle">
          Exclusive ELES merchandise and premium fitness gear arriving soon
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="shop-newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
              required
              className="shop-email-input"
            />
            <button type="submit" className="shop-submit-btn">
              Notify Me
            </button>
          </form>
        ) : (
          <div className="shop-success-message">
            ✓ Thanks! We'll notify you when the shop launches.
          </div>
        )}

        <Link to="/planes" className="shop-cta-link">
          Explore Membership Plans Instead →
        </Link>
      </div>
    </div>
  );
}

export default Shop;
