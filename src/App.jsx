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

// New direct i.ibb.co screenshot links
const screenshots = {
  dashboard: 'https://i.ibb.co/pvKqSSQn/jpeg-optimizer-1.png',  // screen 1 — dashboard / hero
  quantified: 'https://i.ibb.co/DHbKYKRM/jpeg-optimizer-2.png',  // screen 2 — quantified habit toggle
  proofSnaps: 'https://i.ibb.co/N2nQjFq0/jpeg-optimizer-3.png',  // screen 3 — proof snaps / friends feed
  radar: 'https://i.ibb.co/N27rSdfX/jpeg-optimizer-4.png',  // screen 4 — growth radar chart
  insights: 'https://i.ibb.co/8nfMjnY2/jpeg-optimizer-5.png',  // screen 5 — weekly insights
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

      {/* 4.3 Quantified Habits — phone left, copy right (soft bg) */}
      <FeatureSection
        eyebrow="Quantified Habits"
        headline={<>Track the number,<br />not the checkbox.</>}
        subhead="Set real targets — 20 pages, 8 glasses, 5 km, 90 minutes. Log how much you actually did. Watch progress fill in."
        extraContent={
          <div className="quantity-pills">
            {['📖 Read 20 pages', '💧 Drink 8 glasses', '🏃 Run 5 km', '⏱ Focus 90 minutes'].map((p) => (
              <p key={p} className="qty-pill">{p}</p>
            ))}
          </div>
        }
        imageUrl={screenshots.quantified}
        imageAlt="Habitide screen showing quantified habit setup with numeric targets"
        imageRight={false}
        soft={true}
      />

      {/* 4.4 Proof Snaps — copy left, phone right (white bg) */}
      <FeatureSection
        eyebrow="Proof Snaps"
        headline={<>Photo proof.<br />Friends watching.<br />No more lying to yourself.</>}
        subhead="After every habit, snap a photo. It posts to your friends' feed automatically. They cheer. You actually do the thing."
        imageUrl={screenshots.dashboard}
        imageAlt="Habitide proof snaps — stories row and photo grid showing completed habits"
        imageRight={true}
        soft={false}
      />

      {/* 4.5 Growth Radar — phone left, copy right (soft bg) */}
      <FeatureSection
        eyebrow="Growth Radar"
        headline={<>See every part of your life.<br />One screen.</>}
        subhead="Fitness. Sleep. Mindset. Nutrition. Productivity. Discipline. Habitide maps your habits to six life dimensions so you know exactly where you're winning and where you're slipping."
        imageUrl={screenshots.radar}
        imageAlt="Habitide growth radar showing six life dimension chart"
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
