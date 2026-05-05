import React from 'react';
import Header from '@/components/layout/Header.jsx';
import Footer from '@/components/layout/Footer.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import ScreenshotsRow from '@/components/sections/ScreenshotsRow.jsx';
import AppReviews from '@/components/sections/AppReviews.jsx';
import ProblemSection from '@/components/sections/ProblemSection.jsx';
import FeatureSection from '@/components/sections/FeatureSection.jsx';
import InsightsSection from '@/components/sections/InsightsSection.jsx';
import SocialProof from '@/components/sections/SocialProof.jsx';
import FocusOnBanner from '@/components/sections/FocusOnBanner.jsx';
import CtaSection from '@/components/sections/CtaSection.jsx';
import VideoFeed from '@/components/sections/VideoFeed.jsx';
import StickyMobileCta from '@/components/ui/StickyMobileCta.jsx';

/* ─── App config ─────────────────────────────────────────────────── */
const appLogoUrl = 'https://i.ibb.co/zW9s3X8B/habitide-new-logo.png';
const appStoreUrl = 'https://apps.apple.com/in/app/habit-tracker-habitide/id6745226793';
const playStoreUrl = 'https://t.co/6OxRTvQYeI';

// Updated direct i.ibb.co screenshot links
const screenshots = {
  dashboard: 'https://i.ibb.co/gFPPZPrQ/1.png',   // screen 1 — dashboard / hero
  quantified: 'https://i.ibb.co/h1gnKcLW/2.png',  // screen 2 — quantified habit toggle
  proofSnaps: 'https://i.ibb.co/k2zRqCPC/3.png',  // screen 3 — proof snaps / friends feed
  radar: 'https://i.ibb.co/HpNgLFVJ/4.png',       // screen 4 — growth radar chart
  insights: 'https://i.ibb.co/N6dj6rdH/5.png',    // screen 5 — weekly insights
};

const App = () => (
  <>
    <Header
      logoUrl={appLogoUrl}
      appStoreUrl={appStoreUrl}
      playStoreUrl={playStoreUrl}
    />

    <main>
      {/* Hero + Stats marquee */}
      <HeroSection
        appStoreUrl={appStoreUrl}
        playStoreUrl={playStoreUrl}
        heroImageUrl={screenshots.dashboard}
      />

      {/* All 5 screenshots horizontal strip */}
      <ScreenshotsRow
        screenshots={[
          screenshots.dashboard,
          screenshots.quantified,
          screenshots.proofSnaps,
          screenshots.radar,
          screenshots.insights,
        ]}
      />

      {/* Real App Store / Play Store reviews — 2×2 grid */}
      <AppReviews />

      {/* Video Guides — horizontal YouTube Shorts */}
      <VideoFeed />

      {/* 4.2 The Problem */}
      <ProblemSection />

      {/* 4.3 Quick Habit Setup — phone left, copy right (soft bg) */}
      <FeatureSection
        eyebrow="Quick Habit Setup"
        headline={<>Set up a new habit<br />in seconds.</>}
        subhead="Add a habit, choose quantified or normal tracking, and start instantly. No clutter, no long setup."
        extraContent={
          <div className="quantity-pills">
            {['📖 Read 20 pages', '💧 8 glasses', '🏃 5 km', '✅ Simple daily habit'].map((p) => (
              <p key={p} className="qty-pill">{p}</p>
            ))}
          </div>
        }
        imageUrl={screenshots.quantified}
        imageAlt="Habitide quick habit setup screen showing quantified and normal options"
        imageRight={false}
        soft={true}
      />

      {/* 4.4 Your Life in Dots — copy left, phone right (white bg) */}
      <FeatureSection
        eyebrow="Your Life in Dots"
        headline={<>See your progress<br />as simple dots.</>}
        subhead="One glance tells you what got done and what got missed. It is clean, visual, and easy to follow."
        imageUrl={screenshots.proofSnaps}
        imageAlt="Habitide life in dots view showing daily progress status"
        imageRight={true}
        soft={false}
      />

      {/* 4.5 Insight Trends — phone left, copy right (soft bg) */}
      <FeatureSection
        eyebrow="Insight Trends"
        headline={<>See what's working<br />with insights.</>}
        subhead="Track consistency, winning habits, and your monthly streak grid view so you can improve week by week."
        imageUrl={screenshots.insights}
        imageAlt="Habitide insights screen with streak grid and trend summaries"
        imageRight={false}
        soft={true}
      />

      {/* 4.6 Insights — no phone, just numbers */}
      <InsightsSection />

      {/* 4.7 Social Proof */}
      <SocialProof />

      {/* FocusOn cross-promo — drives productivity traffic */}
      <FocusOnBanner />

      {/* 4.9 Final CTA */}
      <CtaSection appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
    </main>

    <Footer />

    {/* Mobile sticky CTA */}
    <StickyMobileCta appStoreUrl={appStoreUrl} playStoreUrl={playStoreUrl} />
  </>
);

export default App;
