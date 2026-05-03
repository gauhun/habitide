import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

/**
 * Reusable feature split section.
 * Props:
 *   eyebrow     — string
 *   headline    — JSX or string
 *   subhead     — string
 *   extraContent — optional JSX rendered below subhead
 *   imageUrl    — screenshot URL
 *   imageAlt    — alt text
 *   imageRight  — bool (phone on right side)
 *   soft        — bool (bg-soft background)
 */
const FeatureSection = ({
  eyebrow,
  headline,
  subhead,
  extraContent,
  imageUrl,
  imageAlt,
  imageRight = false,
  soft = false,
}) => {
  const sectionRef = useFadeUp();

  const copy = (
    <div className="section-header">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h2 className="display-section fade-up fade-up-delay-1">{headline}</h2>
      <p className="subhead fade-up fade-up-delay-2">{subhead}</p>
      {extraContent && (
        <div className="fade-up fade-up-delay-3">{extraContent}</div>
      )}
    </div>
  );

  const phone = (
    <div
      className="phone-mockup fade-up fade-up-delay-1"
      style={{ margin: '0 auto' }}
    >
      <img src={imageUrl} alt={imageAlt} loading="lazy" />
    </div>
  );

  return (
    <section className={`section${soft ? ' section-soft' : ''}`} ref={sectionRef}>
      <div className="container">
        <div
          className="feature-split"
          style={{ direction: imageRight ? 'ltr' : 'ltr' }}
        >
          {imageRight ? (
            <>
              {copy}
              {phone}
            </>
          ) : (
            <>
              {phone}
              {copy}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
