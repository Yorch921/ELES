import './Cookies.css';

function Cookies() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Cookie Policy</h1>
        <p className="legal-last-updated">Last Updated: January 2026</p>

        <section className="legal-section">
          <h2 className="legal-section-title">What Are Cookies</h2>
          <p className="legal-text">
            Cookies are small text files stored on your device when you visit
            our website. They help us improve your experience and provide
            personalized content and features.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">How We Use Cookies</h2>
          <p className="legal-text">We use cookies for the following purposes:</p>
          <ul className="legal-list">
            <li className="legal-list-item">
              <strong>Essential cookies:</strong> Required for site functionality
              and security
            </li>
            <li className="legal-list-item">
              <strong>Analytics cookies:</strong> Help us understand how visitors
              use our website
            </li>
            <li className="legal-list-item">
              <strong>Preference cookies:</strong> Remember your settings and
              preferences
            </li>
            <li className="legal-list-item">
              <strong>Marketing cookies:</strong> Used to provide relevant content
              and offers
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">Managing Cookies</h2>
          <p className="legal-text">
            You can control and manage cookies through your browser settings.
            Note that disabling certain cookies may affect the functionality of
            our website and your user experience.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">Contact Us</h2>
          <p className="legal-text">
            For questions about our cookie policy, please contact us at{' '}
            <a href="mailto:privacy@elesclub.com" className="legal-link">
              privacy@elesclub.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Cookies;
