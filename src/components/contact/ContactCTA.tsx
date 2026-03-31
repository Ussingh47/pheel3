'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactCTA() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/ContactUs/contact2.jpeg"
                    alt="Creative Team"
                    fill
                    className="object-cover object-center grayscale brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto uppercase">
                        We&apos;re Always Ready <br /> 
                        To Capture Something Extraordinary
                    </h2>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#5EEAD4] text-black font-black uppercase tracking-widest px-10 py-4 rounded-full text-sm md:text-base hover:shadow-[0_0_20px_rgba(94,234,212,0.4)] transition-all"
                        data-cursor="big"
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
