'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CareersHero from '@/components/careers/CareersHero';
import CareersWhyJoin from '@/components/careers/CareersWhyJoin';
import CareersLife from '@/components/careers/CareersLife';
import CareersOpenings from '@/components/careers/CareersOpenings';
import CareersCTA from '@/components/careers/CareersCTA';

export default function CareersPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-black text-white selection:bg-[#5EEAD4] selection:text-black font-outfit">
                <Navbar />
                <CareersHero />
                <div className="relative z-10 w-full overflow-hidden bg-black">
                    <CareersWhyJoin />
                    <CareersLife />
                    <CareersOpenings />
                    <CareersCTA />
                </div>
                <Footer />
            </main>
        </SmoothScroll>
    );
}
