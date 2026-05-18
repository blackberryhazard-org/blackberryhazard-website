import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { JoinCta } from './components/JoinCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Community />
        <Testimonials />
        <JoinCta />
      </main>
      <Footer />
    </div>
  );
}
