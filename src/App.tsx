import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { JoinCta } from './components/JoinCta';
import { Footer } from './components/Footer';
import { config } from './config';

export default function App() {
  useEffect(() => {
    document.title = config.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

  }, []);

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
