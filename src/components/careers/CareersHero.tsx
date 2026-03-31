'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersHero() {
    return (
        <section className="relative w-full">
            {/* Image Banner */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[25/9]">
                <Image
                    src="/assets/WhatsApp Image 2025-08-12 at 4.05.17 PM.jpeg"
                    alt="Join the Pheel Team"
                    fill
                    className="object-cover object-top grayscale brightness-[0.35]"
                    priority
                    sizes="100vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
            </div>

            {/* Title overlapping the bottom of the image */}
            <div className="relative -mt-20 md:-mt-32 lg:-mt-40 z-10">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tight uppercase text-white drop-shadow-2xl"
                    >
                        Car<span className="text-[#5EEAD4]">eers</span>
                    </motion.h1>
                </div>
            </div>

            {/* Separator line */}
            <div className="w-full flex justify-center py-8">
                <div className="w-full max-w-5xl h-px bg-white/10 mx-4" />
            </div>

            {/* Subtitle */}
            <div className="bg-black pb-16">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-medium"
                    >
                        Join a team of storytellers, filmmakers, and experience builders. At Pheel, we don&apos;t just create events — we create moments that move people.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
