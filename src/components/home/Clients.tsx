'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CLIENT_LOGOS = [
    { src: '/assets/Clients/KAUST 1.png', alt: 'KAUST' },
    { src: '/assets/Clients/Diriyah Season 1.png', alt: 'Diriyah Season' },
    { src: '/assets/Clients/KAEC 1.png', alt: 'KAEC' },
    { src: '/assets/Clients/Daihatsu 1.png', alt: 'Daihatsu' },
    { src: '/assets/Clients/Lexus 1.png', alt: 'Lexus' },
    { src: '/assets/Clients/Mars 1.png', alt: 'Mars' },
    { src: '/assets/Clients/Ministry of Culture 1.png', alt: 'Ministry of Culture' },
    { src: '/assets/Clients/Nesma 1.png', alt: 'Nesma' },
    { src: '/assets/Clients/P&G 1.png', alt: 'P&G' },
    { src: '/assets/Clients/Peugeot 1.png', alt: 'Peugeot' },
    { src: '/assets/Clients/Pringles 1.png', alt: 'Pringles' },
    { src: '/assets/Clients/Riyadh Season 1.png', alt: 'Riyadh Season' },
    { src: '/assets/Clients/Sahara City 1.png', alt: 'Sahara City' },
    { src: '/assets/Clients/Swatch 1.png', alt: 'Swatch' },
    { src: '/assets/Clients/Toyota 1.png', alt: 'Toyota' },
    { src: '/assets/Clients/Unilever 1.png', alt: 'Unilever' },
    { src: '/assets/Clients/itfc 1.png', alt: 'ITFC' },
    { src: '/assets/Clients/red sea film festival 1.png', alt: 'Red Sea Film Festival' },
];

export default function Clients() {
    // Row 1: original order, duplicated for seamless loop
    const row1Logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
    // Row 2: offset by half so the same brand never appears at the same position in both rows
    const half = Math.ceil(CLIENT_LOGOS.length / 2);
    const offsetLogos = [...CLIENT_LOGOS.slice(half), ...CLIENT_LOGOS.slice(0, half)];
    const row2Logos = [...offsetLogos, ...offsetLogos];
    const [isLightMode, setIsLightMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkLightMode = () => {
            setIsLightMode(document.documentElement.classList.contains('light-mode'));
        };

        checkLightMode();

        const observer = new MutationObserver(checkLightMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`relative ${mounted && isLightMode ? 'bg-white' : 'bg-black'} py-6 sm:py-8 md:py-12 overflow-x-clip flex flex-col gap-8 md:gap-12`}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full"
            >
                {/* Fade edges */}
                <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r z-10 ${isLightMode ? 'from-white to-transparent' : 'from-black to-transparent'}`} />
                <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l z-10 ${isLightMode ? 'from-white to-transparent' : 'from-black to-transparent'}`} />

                {/* Scrolling track - Right to Left */}
                <div className="marquee-track">
                    {row1Logos.map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 mx-6 sm:mx-10 md:mx-14 flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={50}
                                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Scrolling track - Left to Right */}
                <div className="marquee-track-reverse mt-6 sm:mt-8 md:mt-12">
                    {row2Logos.map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 mx-6 sm:mx-10 md:mx-14 flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={50}
                                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
