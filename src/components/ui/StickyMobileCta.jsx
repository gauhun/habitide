import React, { useEffect, useState } from 'react';
import { StoreBadges } from '../ui/StoreBadges.jsx';

const StickyMobileCta = ({ appStoreUrl, playStoreUrl }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user has scrolled past ~100vh
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky-mobile-cta ${show ? '' : 'hidden'}`}
      style={{ display: 'none' }} // hidden on desktop via CSS
      id="sticky-mobile-cta"
    >
      <StoreBadges appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
    </div>
  );
};

export default StickyMobileCta;
