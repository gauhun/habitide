import React from 'react';
import { useFadeUp } from '../../lib/useFadeUp.js';

const reviews = [
  {
    name: 'Havish Gupta',
    date: 'Dec 30, 2025',
    stars: 5,
    headline: 'Actually the best among all',
    body: 'I have tried multiple habit tracker apps but this one is actually the best among all. It\'s clean, minimalist and actually makes me complete my tasks.',
  },
  {
    name: 'Darren Brewer',
    date: 'Apr 27, 2026',
    stars: 5,
    headline: 'Superb app, well worth trying',
    body: 'A simple but very well made and useful app with various functions and settings. Pretty sure you won\'t be disappointed. Good luck with your future improvements 👍🏻',
  },
  {
    name: 'Koushik K.V.S',
    date: 'Oct 30, 2025',
    stars: 5,
    headline: 'Using it for 2 years, will for life',
    body: 'One of the best apps I\'ve used in my life. I have been using it for 2 years and I\'ll use it for my entire life — it\'s so simple to make a big difference.',
  },
  {
    name: 'Yash Raj Bhardwaj',
    date: 'Oct 12, 2025',
    stars: 5,
    headline: 'User experience over profit',
    body: 'Habitide is different — it lets you add many habits freely and still provides useful analytics. Really appreciate the developer for focusing on user experience over profit. 💓',
  },
];

const Stars = ({ count }) => (
  <span className="review-stars" aria-label={`${count} out of 5 stars`}>
    {'★'.repeat(count)}
  </span>
);

const AppReviews = () => {
  const sectionRef = useFadeUp();

  return (
    <section className="section reviews-section" ref={sectionRef}>
      <div className="container">
        {/* Aggregate rating header */}
        <div className="reviews-header fade-up">
          <div className="reviews-aggregate">
            <span className="reviews-big-star">4.6</span>
            <span className="reviews-big-star-icon">★★★★★</span>
          </div>
          <p className="reviews-count">6,500+ users across App Store &amp; Play Store</p>
        </div>

        {/* 2×2 grid */}
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`app-review-card fade-up fade-up-delay-${i % 2 === 0 ? 1 : 2}`}
            >
              <div className="app-review-top">
                <Stars count={r.stars} />
                <span className="app-review-name">{r.name}</span>
              </div>
              <p className="app-review-headline">"{r.headline}"</p>
              <p className="app-review-body">{r.body}</p>
              <p className="app-review-date">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppReviews;
