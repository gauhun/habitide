import React, { useRef } from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

/**
 * Horizontal strip of all 5 app screenshots.
 * Sits right below the hero phone mockup.
 * Scrollable on mobile, full-row on desktop.
 */
const ScreenshotsRow = ({ screenshots }) => {
  const sectionRef = useFadeUp();
  const rowRef = useRef(null);

  const labels = [
    'Habit Dashboard',
    'Quick Habit Setup',
    'Life in Dots',
    'Insight Trends',
    'Monthly Streak Grid',
  ];

  return (
    <section className="screenshots-row-section" ref={sectionRef}>
      <div className="screenshots-row-scroll" ref={rowRef}>
        {screenshots.map((src, i) => (
          <div
            key={i}
            className={`screenshot-thumb fade-up fade-up-delay-${Math.min(i + 1, 4)}`}
          >
            <img
              src={src}
              alt={`Habitide ${labels[i]} screen`}
              loading="lazy"
            />
            <p className="screenshot-label">{labels[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotsRow;
