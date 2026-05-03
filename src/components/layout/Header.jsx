import React, { useEffect, useRef } from 'react';

const Header = ({ logoUrl, appStoreUrl, playStoreUrl }) => {
  const navRef = useRef(null);

  return (
    <header className="site-nav" ref={navRef}>
      <div className="container">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            {logoUrl && (
              <img
                src={logoUrl}
                alt="Habitide"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <span>Habitide</span>
          </a>
          <a href={appStoreUrl || '#'} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
