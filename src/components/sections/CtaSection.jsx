import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Apple, Play } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const CtaSection = ({ playStoreUrl, appStoreUrl }) => {
  const { toast } = useToast();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleAppStoreClick = (event) => {
    if (appStoreUrl === '#') {
      event.preventDefault();
      toast({
        title: "Coming Soon!",
        description: "The App Store version is currently in review.",
      });
    }
  };

  return (
    <motion.section
      id="cta"
      className="py-20 md:py-32 bg-gradient-to-t from-black to-gray-900/50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="container max-w-5xl px-6 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get Habitide Today!
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start building better habits now. Download the app and take control of your daily routine.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="glass-light border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 shadow-2xl rounded-2xl px-8 py-4 text-lg ios-button w-full sm:w-auto"
          >
            <a 
              href={playStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Play className="mr-3 h-6 w-6 fill-current" /> Get it on Google Play
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white shadow-2xl rounded-2xl px-8 py-4 text-lg border border-white/10 ios-button w-full sm:w-auto"
          >
            <a 
              href={appStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleAppStoreClick}
              className="w-full sm:w-auto"
            >
              <Apple className="mr-3 h-6 w-6" /> Download on App Store
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
