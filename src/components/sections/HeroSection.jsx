import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Apple } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import FocusOnSection from "@/components/sections/FocusOnSection.jsx";

const HeroSection = ({
  playStoreUrl,
  appStoreUrl,
  heroImageUrl,
  allScreenshots = [],
}) => {
  const { toast } = useToast();

  const handleAppStoreClick = (event) => {
    if (appStoreUrl === "#") {
      event.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "The App Store version is currently in review.",
      });
    } else {
      openLink(appStoreUrl);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-white-400 to-black-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md mb-2 animate-pulse">
              2000+ Downloads
            </span>
            <br />
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build Habits
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Transform Your Life
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-blue-400 font-bold"> "Habitide"</span> A
              beautifully simple yet powerful app to help you build better
              habits every day
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Android Button */}
              <motion.button
                onClick={() => openLink(playStoreUrl)}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-mid font-bold tracking-wider cursor-pointer focus:outline-none flex items-center justify-center gap-2"
                style={{
                  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                  minWidth: "100px",
                  letterSpacing: "0.05em",
                }}
              >
                <Play className="h-4 w-4" />
                Android
              </motion.button>
              <motion.button
                onClick={handleAppStoreClick}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white rounded-lg px-4 py-2 shadow-lg text-mid font-bold tracking-wider cursor-pointer focus:outline-none flex items-center justify-center gap-2 border border-white/10 ios-button"
                style={{
                  minWidth: "100px",
                  letterSpacing: "0.05em",
                }}
                size="lg"
              >
                <span className="flex items-center justify-center w-full">
                  <Apple className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" /> iOS
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Slash Divider */}
          <motion.div
            className="hidden lg:flex items-center justify-center text-6xl sm:text-8xl font-bold text-white/20 select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            /
          </motion.div>

          {/* FocusOn Section */}
          <div className="flex-shrink-0">
            <FocusOnSection />
          </div>
        </div>
      </div>

      {/* All Screenshots - Mobile-First Responsive Design */}
      <motion.div
        className="mt-16 md:mt-24 px-6 z-10 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.1,
          type: "spring",
          stiffness: 30,
        }}
      >
        {/* Mobile Layout - Show only center screenshot prominently */}
        <div className="block md:hidden">
          <div className="flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-xl rounded-3xl"></div>
                <img
                  className="relative w-64 rounded-3xl shadow-2xl border border-white/10 aspect-[9/19] object-cover object-top"
                  alt="Habitide app screenshot 1"
                  src={allImages[0]}
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile: Small preview thumbnails below */}
          <div className="flex justify-center gap-3 mt-8 overflow-x-auto pb-4">
            {allImages.slice(1).map((imageUrl, index) => (
              <motion.div
                key={index + 1}
                className="relative flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative opacity-70 hover:opacity-100 transition-opacity">
                  <img
                    className="w-36 h-80 rounded-xl shadow-lg border border-white/10 object-cover object-top"
                    alt={`Habitide app screenshot ${index + 2}`}
                    src={imageUrl}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Original side-by-side design */}
        <div className="hidden md:flex justify-center items-end">
          <div className="flex items-end gap-4 lg:gap-8 max-w-6xl mx-auto">
            {allImages.map((imageUrl, index) => {
              const isCenter = index === 0; // First image (hero) is center
              const isSecond = index === 1;
              const isLast = index === allImages.length - 1;

              return (
                <motion.div
                  key={index}
                  className={`relative ${isCenter ? "z-20" : "z-10"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div
                    className={`relative ${
                      isCenter
                        ? "transform scale-110"
                        : isSecond || isLast
                        ? "transform scale-95 opacity-90"
                        : "transform scale-100 opacity-95"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isCenter
                          ? "from-primary/20 to-transparent"
                          : "from-primary/10 to-transparent"
                      } blur-xl rounded-3xl`}
                    ></div>
                    <img
                      className={`relative rounded-3xl shadow-2xl border border-white/10 aspect-[9/19] object-cover object-top ${
                        isCenter ? "w-64 lg:w-80" : "w-48 lg:w-64"
                      }`}
                      alt={`Habitide app screenshot ${index + 1}`}
                      src={imageUrl}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
