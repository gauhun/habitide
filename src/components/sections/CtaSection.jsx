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
      className="py-16 md:py-24 bg-primary/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Habitide Today!</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Start building better habits now. Download the app and take control of your daily routine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button variant="outline" size="lg" asChild className="shadow-lg">

            <a 
              href={playStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5 fill-current" /> Get it on Google Play
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-lg">
            <a 
              href={appStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleAppStoreClick}
              className="w-full sm:w-auto"
            >
              <Apple className="mr-2 h-5 w-5" /> App Store
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
