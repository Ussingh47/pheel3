'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import ProductionHero from '@/components/production/ProductionHero';
import ProductionIntro from '@/components/production/ProductionIntro';
import ProductionServices from '@/components/production/ProductionServices';
import ProductionProjects from '@/components/production/ProductionProjects';
import ProductionAction from '@/components/production/ProductionAction';

export default function ProductionPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-black text-white selection:bg-[#EC5863] selection:text-white font-outfit">
                <Navbar />
                <ProductionHero />
                <div className="relative z-10 w-full overflow-hidden bg-black">
                    <ProductionIntro />
                    <ProductionServices />
                    <ProductionProjects />
                    <ProductionAction />
                </div>
                <Footer />
            </main>
        </SmoothScroll>
    );
}
