import React from 'react';
import { StoreBadges } from '../ui/StoreBadges.jsx';
import { useFadeUp } from '../../lib/useFadeUp.js';

const CtaSection = ({ appStoreUrl, playStoreUrl }) => {
  const sectionRef = useFadeUp();

  return (
    <section className="section section-soft" ref={sectionRef}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="display-section fade-up" style={{ maxWidth: 600, margin: '0 auto' }}>
          Build a habit<br />that actually sticks.
        </h2>

        <div
          className="fade-up fade-up-delay-1"
          style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}
        >
          <StoreBadges appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
        </div>

        <p
          className="fade-up fade-up-delay-2"
          style={{
            marginTop: 20,
            fontSize: 14,
            color: 'var(--text-tertiary)',
          }}
        >
          iOS 14+ · Android 8+ · 4.6★ rating
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
