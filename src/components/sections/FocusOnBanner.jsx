import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';
import { StoreBadges } from '../ui/StoreBadges';

const FOCUSON_SCREENSHOT = 'https://i.ibb.co/y9dX3RX/focuson-shots.png';
const FOCUSON_LINK = 'https://linktr.ee/focusontimer';

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
            <StoreBadges 
              appStoreUrl="https://apps.apple.com/us/app/focuson-flip-clock-pomodoro/id6751473488"
              playStoreUrl="https://play.google.com/store/apps/details?id=in.garoono.focuson"
              className="focuson-badges"
            />
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
