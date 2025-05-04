
import React from 'react';
import Header from '@/components/layout/Header.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import AboutSection from '@/components/sections/AboutSection.jsx';
import ScreenshotsSection from '@/components/sections/ScreenshotsSection.jsx';
import FeaturesSection from '@/components/sections/FeaturesSection.jsx';
import CtaSection from '@/components/sections/CtaSection.jsx';
import Footer from '@/components/layout/Footer.jsx';
import { Target, BellRing, TrendingUp, BarChart, Moon, WifiOff } from 'lucide-react';

const App = () => {
  const featureList = [
    { icon: Target, title: "Habit Creation", description: "Easily set up new habits tailored to your goals." },
    { icon: BellRing, title: "Daily Reminders", description: "Stay on track with customizable notifications." },
    { icon: TrendingUp, title: "Streak Tracking", description: "Visualize your consistency and build momentum." },
    { icon: BarChart, title: "Visual Analytics", description: "Gain insights into your progress with clear charts." },
    { icon: Moon, title: "Dark Mode", description: "Enjoy a comfortable viewing experience at night." },
    { icon: WifiOff, title: "Offline Support", description: "Track habits anytime, anywhere, even without internet." },
  ];

  const screenshotUrls = [
    "https://i.postimg.cc/Gt90P4rp/habitide-1.png",
    "https://i.postimg.cc/ryY2VNCR/habitide-2.png",
    "https://i.postimg.cc/8PJQjftK/habitide-3.png",
    "https://i.postimg.cc/BbzrmJQB/habitide-4.png",
    "https://i.postimg.cc/mgCvSfx7/habitide-5.png",
    "https://i.postimg.cc/zXsmWDQJ/habitide-6.png",
  ];

  const appLogoUrl = "https://i.postimg.cc/vB0F6WJj/round-habitide-logo.png";
  const playStoreUrl = "https://t.co/6OxRTvQYeI";
  // Placeholder App Store URL - replace # with the actual URL when available
  const appStoreUrl = "#";

  return (
    <div className="flex flex-col min-h-screen">
      <Header logoUrl={appLogoUrl} />
      <main className="flex-grow">
        <HeroSection
          playStoreUrl={playStoreUrl}
          appStoreUrl={appStoreUrl}
          heroImageUrl={screenshotUrls[0]}
        />
        <AboutSection />
        <ScreenshotsSection screenshotUrls={screenshotUrls.slice(1)} />
        <FeaturesSection featureList={featureList} />
        <CtaSection
          playStoreUrl={playStoreUrl}
          appStoreUrl={appStoreUrl}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
