import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const FOCUSON_SCREENSHOT = 'https://i.ibb.co/y9dX3RX/focuson-shots.png';
const FOCUSON_APP_STORE  = 'https://apps.apple.com/in/app/focuson-pomodoro-timer/id6744202684';

const FocusOnBanner = () => {
  const sectionRef = useFadeUp();

  return (
    <section className="focuson-section" ref={sectionRef}>
      <div className="container">
        <div className="focuson-inner fade-up">

          {/* Text side */}
          <div className="focuson-copy">
            <p className="eyebrow" style={{ marginBottom: 12 }}>Also by Garoono</p>
            <h2 className="focuson-headline">
              FocusOn<br />Pomodoro Timer
            </h2>
            <p className="focuson-sub">
              A distraction-free focus timer built for deep work.
              Pair it with Habitide to build a productivity routine that actually sticks.
            </p>
            <a
              id="focuson-link"
              href={FOCUSON_APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="focuson-link"
            >
              Get FocusOn on the App Store →
            </a>
          </div>

          {/* Landscape screenshot */}
          <div className="focuson-image-wrap fade-up fade-up-delay-1">
            <img
              src={FOCUSON_SCREENSHOT}
              alt="FocusOn Pomodoro Timer app screenshot"
              className="focuson-screenshot"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FocusOnBanner;
