
import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-bold mr-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-ecosentinel-green-500 to-ecosentinel-blue-500 flex items-center justify-center">
            <span className="text-white text-sm">ES</span>
          </div>
          <span className="hidden sm:inline-block">EcoSentinel AI</span>
        </div>
        
        <nav className="hidden md:flex gap-6 mx-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
          <a href="#stakeholders" className="text-muted-foreground hover:text-foreground transition-colors">Stakeholders</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>
        
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">Login</Button>
          <Button size="sm" className="bg-gradient-to-r from-ecosentinel-green-500 to-ecosentinel-blue-500 hover:opacity-90">
            Request Demo
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
