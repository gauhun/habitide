import React from 'react';
import { StoreBadges } from '../ui/StoreBadges.jsx';
import { useFadeUp } from '../../lib/useFadeUp.js';

const Sparkle = ({ className = '' }) => (
  <svg className={`sparkle ${className}`} viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2 L13.6 9.2 L21 11 L13.6 12.8 L12 20 L10.4 12.8 L3 11 L10.4 9.2 Z"
      fill="currentColor"
    />
  </svg>
);

/* Scrolling stats bar — pairs with hero */
const StatsBar = () => {
  const items = [
    { label: 'Active users', value: '6,500+' },
    { label: 'App Store rating', value: '4.6 ★' },
    { label: 'Habits tracked total', value: '14,000+' },
    { label: 'Streaks kept', value: '4000+' },
    { label: 'Photo proofs shared', value: '8000+' },
    { label: 'Life dimensions mapped', value: '6' },
    { label: 'Active users', value: '6,500+' },
    { label: 'App Store rating', value: '4.6 ★' },
    { label: 'Habits tracked total', value: '14,000+' },
    { label: 'Photo proofs shared', value: '8000+' },
    { label: 'Life dimensions mapped', value: '6' },
  ];

  return (
    <div className="stats-bar">
      <div className="stats-bar-track">
        {items.map((item, i) => (
          <div key={i} className="stats-bar-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = ({ appStoreUrl, playStoreUrl }) => {
  const sectionRef = useFadeUp();

  return (
    <>
      <section className="hero-section" ref={sectionRef}>
        {/* Shared gradient defs for SVG strokes (hero underline) */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="hero-underline-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0F73FF" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#FF3B6B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Funky floating chips around the hero (desktop only) */}
        <span className="float-chip float-chip-1" aria-hidden="true">📸 Photo proof</span>
        <span className="float-chip float-chip-2" aria-hidden="true">🔥 14-day streak</span>
        <span className="float-chip float-chip-3" aria-hidden="true">📊 20 / 20 pages</span>
        <span className="float-chip float-chip-4" aria-hidden="true">💪 No cheating</span>

        {/* Sparkle accents */}
        <Sparkle className="sparkle-hero sparkle-hero-1" />
        <Sparkle className="sparkle-hero sparkle-hero-2" />
        <Sparkle className="sparkle-hero sparkle-hero-3" />

        <div className="container">
          <div className="hero-content">
            {/* Animated accent pill */}
            <div className="fade-up">
              <span className="accent-pill">
                <span className="accent-pill-dot" />
                The habit tracker for people who actually want to change
              </span>
            </div>

            <h1 className="display-hero hero-headline fade-up fade-up-delay-1" style={{ maxWidth: 820 }}>
              You don't have a<br />
              <span className="hero-strike">motivation problem.</span><br />
              You have a{' '}
              <span className="hero-highlight">
                proof problem
                <svg className="hero-underline" viewBox="0 0 320 18" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M3 12 C 70 2, 150 18, 220 8 S 310 4, 317 10"
                    fill="none"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="subhead fade-up fade-up-delay-2" style={{ maxWidth: 580 }}>
              Checking a box doesn't build a habit. Habitide does — with
              numeric targets, photo proof, and friends who can see your streak.
            </p>

            <div className="fade-up fade-up-delay-3" style={{ display: 'flex', justifyContent: 'center' }}>
              <StoreBadges appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
            </div>

            <div className="star-badge star-badge-glass fade-up fade-up-delay-4">
              <span className="stars">★★★★★</span>
              <span><strong>4.6</strong> · 6,500+ users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats marquee — sits between hero and reviews */}
      <StatsBar />
    </>
  );
};

export default HeroSection;
