import './Privacy.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-last-updated">Last Updated: January 2026</p>

        <section className="legal-section">
          <h2 className="legal-section-title">Overview</h2>
          <p className="legal-text">
            ELES Club is committed to protecting your privacy. This policy
            outlines how we collect, use, and safeguard your personal information
            when you use our services and website.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">Information We Collect</h2>
          <p className="legal-text">
            We collect information you provide when creating an account,
            subscribing to our services, or contacting us. This may include
            your name, email address, payment information, and usage data.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">How We Use Your Information</h2>
          <p className="legal-text">
            Your information is used to provide and improve our services,
            process payments, send you updates about your membership, and
            communicate important information about ELES Club.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">Data Security</h2>
          <p className="legal-text">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section className="legal-section">
          <h2 className="legal-section-title">Contact Us</h2>
          <p className="legal-text">
            For privacy-related questions or concerns, please email us at{' '}
            <a href="mailto:privacy@elesclub.com" className="legal-link">
              privacy@elesclub.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
