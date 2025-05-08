import React from 'react';
import Header from '@/components/layout/Header.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import AboutSection from '@/components/sections/AboutSection.jsx';
import ScreenshotsSection from '@/components/sections/ScreenshotsSection.jsx';
import FeaturesSection from '@/components/sections/FeaturesSection.jsx';
import CtaSection from '@/components/sections/CtaSection.jsx';
import Footer from '@/components/layout/Footer.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import { Target, BellRing, TrendingUp, BarChart, Moon, WifiOff, Import, FileText } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  const featureList = [
    { icon: Target, title: "Habit Creation", description: "Easily set up new habits tailored to your goals." },
    { icon: BellRing, title: "Daily Reminders", description: "Stay on track with customizable notifications." },
    { icon: TrendingUp, title: "Streak Tracking", description: "Visualize your consistency and build momentum." },
    { icon: BarChart, title: "Visual Analytics", description: "Gain insights into your progress with clear charts." },
    { icon: FileText, title: "Create Journal", description: "Create a journal to track your thoughts and feelings." },
    { icon: WifiOff, title: "Offline Support", description: "Track habits anytime, anywhere, even without internet." },
    { icon: Import, title: "Import/Export Data", description: "Import and export your data to other apps." },
  ];

  const screenshotUrls = [
    "https://i.postimg.cc/3JWC4RtW/hab-1.png",
    
    "https://i.postimg.cc/gk5yvW7s/hab-2.png",
    "https://i.postimg.cc/0Q87826k/hab-6.png",
    "https://i.postimg.cc/7Z239R8k/hab-4.png",
    "https://i.postimg.cc/nLfvP1pQ/hab-5.png",
    "https://i.postimg.cc/YSN1KmCD/hab-3.png",
    
  ];

  const appLogoUrl = "https://i.postimg.cc/vB0F6WJj/round-habitide-logo.png";
  const playStoreUrl = "https://t.co/6OxRTvQYeI";
  // Placeholder App Store URL - replace # with the actual URL when available
  const appStoreUrl = "https://apps.apple.com/in/app/habit-tracker-habitide/id6745226793";

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
        <Testimonials />
        <CtaSection
          playStoreUrl={playStoreUrl}
          appStoreUrl={appStoreUrl}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
