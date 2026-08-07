import React, { useEffect, useRef } from 'react';
import { AppleLogo, PlayLogo } from '../ui/StoreBadges';

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
          <div className="nav-downloads" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Download:</span> */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="/blog/" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                Blog
              </a>
              <a href={appStoreUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                <AppleLogo fill="currentColor" style={{ width: '16px', height: 'auto' }} />
                App Store
              </a>
              <a href={playStoreUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                <PlayLogo style={{ width: '16px', height: 'auto' }} />
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
