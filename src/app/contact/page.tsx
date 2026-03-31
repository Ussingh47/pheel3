'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactPage() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-black text-white selection:bg-[#5EEAD4] selection:text-black font-outfit">
                <Navbar />
                <ContactHero />
                <div className="relative z-10 w-full overflow-hidden bg-black">
                    <ContactForm />
                    <ContactCTA />
                </div>
                <Footer />
            </main>
        </SmoothScroll>
    );
}
