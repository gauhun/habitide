
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Apple, Play } from 'lucide-react';

const HeroSection = ({ playStoreUrl, appStoreUrl, heroImageUrl }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.section
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 text-center overflow-hidden bg-gradient-to-b from-background via-accent/10 to-background"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container max-w-4xl px-4 z-10 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Build Habits. Transform Your Life.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A simple yet powerful app to help you build better habits every day.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white shadow-lg"
            onClick={() => openLink(appStoreUrl)}
            disabled={!appStoreUrl || appStoreUrl === '#'}
          >
            <Apple className="mr-2 h-5 w-5" /> Download on App Store
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 shadow-lg"
            onClick={() => openLink(playStoreUrl)}
            disabled={!playStoreUrl || playStoreUrl === '#'}
          >
            <Play className="mr-2 h-5 w-5 fill-current" /> Get it on Google Play
          </Button>
        </motion.div>
      </div>
       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
       <motion.div
         className="mt-12 md:mt-16 flex justify-center px-4 z-10 relative"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
       >
         <img
           className="w-full max-w-xs md:max-w-[280px] rounded-xl shadow-2xl border border-border/10 aspect-[9/19] object-cover object-top"
           alt="Habitide app interface mockup on a phone"
           src={heroImageUrl || "https://i.postimg.cc/Gt90P4rp/habitide-1.png"}
          />
       </motion.div>
    </motion.section>
  );
};

export default HeroSection;
