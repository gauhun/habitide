
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Apple, Play } from 'lucide-react';

const CtaSection = ({ playStoreUrl, appStoreUrl }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

 const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
// test
  return (
    <motion.section
      id="cta"
      className="py-20 md:py-32 bg-gradient-to-t from-background via-accent/10 to-background text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your habit journey today with Habitide.</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Download the app now and begin transforming your life, one habit at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
        </div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
