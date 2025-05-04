import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container max-w-screen-2xl px-4 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Habitide. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-4">
            <a href="https://sites.google.com/view/habitidehelp/home" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="https://sites.google.com/view/habitide/privacypolicy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="mailto:garoono.digital@gmail.com" className="hover:text-primary transition-colors">support@habitide.app</a>
          </div>
         <div className="flex items-center gap-3 mt-4 md:mt-0">
           <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
           <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
           <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
