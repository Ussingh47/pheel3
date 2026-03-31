'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/About';
import Vision from '@/components/home/Vision';
import Mission from '@/components/home/Mission';
import Clients from '@/components/home/Clients';
import OurWork from '@/components/home/OurWork';
import Services from '@/components/home/Services';
import JoinTeam from '@/components/home/JoinTeam';
import Preloader from '@/components/home/Preloader';

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
          <Clients />
          {/* Stacking Cards Container — all cards share ONE parent so sticky overlapping works */}
          <div className="relative z-10 w-full overflow-clip bg-black light-mode-bg">
            <AboutSection />
            <Vision />
            <Mission />
          </div>
          <OurWork />
          <Services />
          <JoinTeam />
          <Footer />
        </>
      )}
    </main>
  );
}
