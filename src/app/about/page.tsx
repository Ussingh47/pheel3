'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre';
import AboutGoals from '@/components/about/AboutGoals';
import MeetThePheelers from '@/components/about/MeetThePheelers';
import AboutClients from '@/components/about/AboutClients';
import SmoothScroll from '@/components/layout/SmoothScroll';

export default function AboutPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black font-outfit">
                <Navbar />
                <AboutHero />
                <div className="relative z-10 w-full overflow-hidden bg-black">
                    <AboutWhoWeAre />
                    <AboutGoals />
                    <MeetThePheelers />
                    <AboutClients />
                </div>
                <Footer />
            </main>
        </SmoothScroll>
    );
}
