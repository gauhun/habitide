
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Twitter, Linkedin } from 'lucide-react';

const Header = ({ logoUrl }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container flex h-16 sm:h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <motion.a
          href="#"
          className="flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="Habitide Logo" className="h-8 sm:h-10 w-8 sm:w-10 rounded-2xl shadow-lg" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hidden sm:inline">
            HabiTide
          </span>
        </motion.a>
        <nav className="flex items-center gap-1 sm:gap-3">
           {/* Social Links */}
           <motion.div 
             className="flex items-center gap-1 sm:gap-2 mr-2 sm:mr-4"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
           >
             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => openSocialLink('https://x.com/xgaroono')}
               className="p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-white/70 hover:text-primary"
               aria-label="Follow on X (Twitter)"
             >
               <Twitter className="h-4 sm:h-5 w-4 sm:w-5" />
             </motion.button>
             <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => openSocialLink('https://www.linkedin.com/in/gauhun/')}
               className="p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-white/70 hover:text-primary"
               aria-label="Connect on LinkedIn"
             >
               <Linkedin className="h-4 sm:h-5 w-4 sm:w-5" />
             </motion.button>
           </motion.div>

           <motion.div 
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.95 }}
             className="ios-button hidden sm:block"
           >
             <Button 
               variant="ghost" 
               size="sm" 
               onClick={() => scrollToSection('features')}
               className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl px-3 sm:px-4 py-2 text-sm"
             >
               Features
             </Button>
           </motion.div>
           <motion.div 
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.95 }}
             className="ios-button"
           >
             <Button 
               size="sm" 
               className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-xl rounded-xl px-4 sm:px-6 py-2 border-0 text-sm" 
               onClick={() => scrollToSection('cta')}
             >
               Download
             </Button>
           </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
