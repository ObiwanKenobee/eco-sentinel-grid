
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <footer className={cn("bg-muted py-12", className)} {...props}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ecosentinel-green-500 to-ecosentinel-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">ES</span>
              </div>
              <span>EcoSentinel AI</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              The first full-stack ecosystem intelligence platform tackling both wildlife trafficking and modern slavery. 
              Headquartered in Nairobi, Kenya.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>"Tracking Crime. Protecting Life. Powering Change."</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/60 mt-8 pt-8 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} EcoSentinel AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
