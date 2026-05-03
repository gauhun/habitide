import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const InsightsSection = () => {
  const sectionRef = useFadeUp();

  return (
    <section className="section" ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="eyebrow fade-up">Weekly Insights</p>
          <h2 className="display-section fade-up fade-up-delay-1" style={{ marginTop: 16 }}>
            The data tells you<br />what works.
          </h2>
        </div>

        <div className="insights-grid fade-up fade-up-delay-2">
          <div className="insight-cell">
            <p className="insight-label">Most consistent habit</p>
            <p className="insight-value">Sleep</p>
            <p className="insight-sub">92% completion</p>
          </div>
          <div className="insight-cell">
            <p className="insight-label">Most productive day</p>
            <p className="insight-value">Thu</p>
            <p className="insight-sub">Thursday</p>
          </div>
          <div className="insight-cell">
            <p className="insight-label">Average completion</p>
            <p className="insight-value">78%</p>
            <p className="insight-sub">+12% this week</p>
          </div>
          <div className="insight-cell">
            <p className="insight-label">Performance score</p>
            <p className="insight-value">78</p>
            <p className="insight-sub">out of 100</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
