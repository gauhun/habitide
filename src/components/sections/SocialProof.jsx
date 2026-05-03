import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const reviews = [
  {
    quote: "Finally an app that shows me numbers, not just checkmarks.",
    author: "Priya",
    duration: "6 months on Habitide",
  },
  {
    quote: "The proof snaps killed my excuses. I either run, or I don't post.",
    author: "Arjun",
    duration: "4 months on Habitide",
  },
  {
    quote: "I read 47 books last year because of this app.",
    author: "Sam",
    duration: "1 year on Habitide",
  },
];

const SocialProof = () => {
  const sectionRef = useFadeUp();

  return (
    <section className="section section-soft" ref={sectionRef}>
      <div className="container">
        <h2
          className="display-section fade-up"
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          People who actually changed.
        </h2>

        <div
          className="fade-up fade-up-delay-1"
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="review-quote">"{r.quote}"</p>
              <p className="review-attribution">
                — {r.author}, {r.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
