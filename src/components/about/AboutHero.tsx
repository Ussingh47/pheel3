'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="relative w-full">
            {/* Image Banner - full width, shows complete image */}
            <div className="relative w-full aspect-[16/9]">
                <Image
                    src="/assets/AboutUs/Rectangle 14.jpg"
                    alt="The Story Behind Pheel"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                {/* Bottom gradient for smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            </div>

            {/* Title overlapping the bottom of the image */}
            <div className="relative -mt-36 z-10">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tight uppercase text-white drop-shadow-2xl"
                    >
                        THE STORY BEHIND PHEEL
                    </motion.h1>
                </div>
            </div>

            {/* Separator line */}
            <div className="w-full flex justify-center py-6">
                <div className="w-full max-w-5xl h-px bg-white/20 mx-4" />
            </div>

            {/* Description below on clean dark background */}
            <div className="bg-black pb-16">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-medium"
                    >
                        Pheel Entertainment Is A Regional Creative Powerhouse Bringing Together Storytellers, Filmmakers,
                        Strategists, And Experience Designers To Create Unforgettable Entertainment And
                        Media Experiences Across The Middle East And Beyond.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
