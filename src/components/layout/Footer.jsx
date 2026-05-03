import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            Habitide · Built solo by Garoono
          </p>
          <nav className="footer-links">
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="mailto:garoonotech@gmail.com">Support</a>
            <a href="mailto:garoonotech@gmail.com">garoonotech@gmail.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
