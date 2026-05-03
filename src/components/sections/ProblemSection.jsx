import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const ProblemSection = () => {
  const sectionRef = useFadeUp();

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <div className="problem-section">
          <p className="eyebrow fade-up">The Truth</p>

          <h2 className="display-section fade-up fade-up-delay-1" style={{ marginTop: 16 }}>
            Most habit apps<br />lie to you.
          </h2>

          <div className="problem-body fade-up fade-up-delay-2">
            <p>
              You check a box. The app says "streak: 47 days."
              But you didn't actually run 5km. You didn't read 20 pages.
              You just tapped a button.
            </p>
            <p>
              Habits aren't built by tapping. They're built by doing,
              measuring, and being seen doing them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
