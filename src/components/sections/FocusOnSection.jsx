import React from "react";
import { motion } from "framer-motion";
import { Play, Apple } from "lucide-react";

const FocusOnSection = () => {
  const focusOnImageUrl = "https://i.postimg.cc/76NCkN00/focuson-3shots.jpg";
  const allAppLink = "https://linktr.ee/garoono";
  const focusOnAndroidUrl =
    "https://play.google.com/store/apps/details?id=in.garoono.focuson"; // Replace with actual Android store URL
  const focusOnIosUrl =
    "https://apps.apple.com/us/app/focuson-productivity-timer/id6751473488?platform=iphone"; // Replace with actual iOS store URL

  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className="relative flex-shrink-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Title */}
      <motion.h3
        className="text-4xl sm:text-5xl md:text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Our other <span className="text-blue-500 font-bold">PRODUCTIVITY</span>{" "}
        app <span className="text-blue-500 font-bold">TRENDING</span>
      </motion.h3>

      {/* FocusOn App Screenshots */}
      <div className="relative">
        <img
          src={focusOnImageUrl}
          alt="FocusOn - Pomodoro Timer App Screenshots"
          className="w-96 sm:w-[28rem] h-64 sm:h-72 object-cover rounded-xl shadow-lg border border-white/10"
        />

        {/* Bouncy Banner */}
        <motion.div
          className="absolute -top-3 -right-3"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <motion.a
            href={allAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-3 py-1 shadow-lg text-xs font-bold tracking-wider rounded-md cursor-pointer focus:outline-none"
            style={{
              boxShadow: "0 2px 8px rgba(239,68,68,0.15)",
              display: "inline-block",
              minWidth: "80px",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              delay: 0.5,
            }}
          >
            100+ installs
          </motion.a>
        </motion.div>

        {/* App Name Banner */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/20"
          >
            FocusOn - Pomodoro Timer
          </motion.div>
        </motion.div>
      </div>

      {/* Platform Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        {/* Android Button */}
        <motion.button
          onClick={() => openLink(focusOnAndroidUrl)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold tracking-wider cursor-pointer focus:outline-none flex items-center justify-center gap-2"
          style={{
            boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
            minWidth: "100px",
            letterSpacing: "0.05em",
          }}
        >
          <Play className="h-4 w-4" />
          Android
        </motion.button>

        {/* iOS Button */}
        <motion.button
          onClick={() => openLink(focusOnIosUrl)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold tracking-wider cursor-pointer focus:outline-none flex items-center justify-center gap-2 border border-white/20"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            minWidth: "100px",
            letterSpacing: "0.05em",
          }}
        >
          <Apple className="h-4 w-4" />
          iOS
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FocusOnSection;
