import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Apple } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const HeroSection = ({ playStoreUrl, appStoreUrl, heroImageUrl, allScreenshots = [] }) => {
  const { toast } = useToast();

  const handleAppStoreClick = (event) => {
    if (appStoreUrl === '#') {
      event.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "The App Store version is currently in review.",
      });
    }else {
      openLink(appStoreUrl);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }else {
    
    }
  };

  // Combine hero image with other screenshots, ensuring hero image is in center
  const allImages = [heroImageUrl, ...allScreenshots];

  return (
    <motion.section
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 text-center overflow-hidden bg-gradient-to-b from-black via-gray-900/20 to-black"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container max-w-7xl px-6 z-10 relative">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Build Habits.
          <br />
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Transform Your Life.
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A beautifully simple yet powerful app to help you build better habits every day.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
           <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto glass-light border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 shadow-2xl rounded-2xl px-8 py-4 text-lg ios-button"
            onClick={() => openLink(playStoreUrl)}
            disabled={!playStoreUrl || playStoreUrl === '#'}
          >
            <Play className="mr-3 h-6 w-6 fill-current" /> Get it on Google Play
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white shadow-2xl rounded-2xl px-8 py-4 text-lg border border-white/10 ios-button"
            onClick={handleAppStoreClick}
          >
            <Apple className="mr-3 h-6 w-6" /> Download on App Store
          </Button>
        </motion.div>
      </div>
       
       {/* All Screenshots Side by Side */}
       <motion.div
         className="mt-16 md:mt-24 flex justify-center items-end px-6 z-10 relative"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.1, delay: 0.1, type: 'spring', stiffness: 30 }}
       >
         <div className="flex items-end gap-4 md:gap-8 max-w-6xl mx-auto">
           {allImages.map((imageUrl, index) => {
             const isCenter = index === 0; // First image (hero) is center
             const isSecond = index === 1;
             const isLast = index === allImages.length - 1;
             
             return (
               <motion.div
                 key={index}
                 className={`relative ${isCenter ? 'z-20' : 'z-10'}`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.3, delay: 0.05 + index * 0.1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
               >
                 <div className={`relative ${
                   isCenter 
                     ? 'transform scale-110' 
                     : isSecond || isLast 
                       ? 'transform scale-95 opacity-90' 
                       : 'transform scale-100 opacity-95'
                 }`}>
                   <div className={`absolute inset-0 bg-gradient-to-t ${
                     isCenter 
                       ? 'from-primary/20 to-transparent' 
                       : 'from-primary/10 to-transparent'
                   } blur-xl rounded-3xl`}></div>
                   <img
                     className={`relative rounded-3xl shadow-2xl border border-white/10 aspect-[9/19] object-cover object-top ${
                       isCenter 
                         ? 'w-64 md:w-80' 
                         : 'w-48 md:w-64'
                     }`}
                     alt={`Habitide app screenshot ${index + 1}`}
                     src={imageUrl}
                   />
                 </div>
               </motion.div>
             );
           })}
         </div>
       </motion.div>
    </motion.section>
  );
};

export default HeroSection;
