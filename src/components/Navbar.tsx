import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { config } from '../config';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
            {config.title}
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Komunitas</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Event</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Testimoni</a>
          <a href="#" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Join
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <Icon icon="lucide:x" className="w-6 h-6" /> : <Icon icon="lucide:menu" className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="#community"
              className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Komunitas
            </a>
            <a
              href="#"
              className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Event
            </a>
            <a
              href="#"
              className="text-foreground font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </a>
            <a
              href="#"
              className="bg-primary text-primary-foreground text-center px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
