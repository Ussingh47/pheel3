'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <div className="relative">
            <AboutSection />
            <Vision />
            <Mission />
          </div>
          <Clients />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
