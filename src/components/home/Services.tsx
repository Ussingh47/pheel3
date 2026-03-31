'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useMemo, useCallback } from 'react';

export default function Services() {
    const [isLightMode, setIsLightMode] = useState(false);
    const [, forceUpdate] = useState({});

    const checkLightMode = useCallback(() => {
        const isLight = document.documentElement.classList.contains('light-mode');
        setIsLightMode(isLight);
        forceUpdate({});
    }, []);

    useEffect(() => {
        checkLightMode();

        const observer = new MutationObserver(checkLightMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, [checkLightMode]);

    const headingColor = isLightMode ? '#000' : '#EC5863';
    const experienceColor = isLightMode ? '#000' : '#825EED';
    const textColor = isLightMode ? 'rgba(0, 0, 0, 0.7)' : '#a1a1aa';
    const hoverColor = isLightMode ? '#000' : '#ffffff';

    const productionVariants = useMemo(() => ({
        idle: { color: headingColor },
        hover: { color: hoverColor }
    }), [headingColor, hoverColor]);

    const experienceVariants = useMemo(() => ({
        idle: { color: experienceColor },
        hover: { color: hoverColor }
    }), [experienceColor, hoverColor]);

    const textVariants = useMemo(() => ({
        idle: { color: textColor },
        hover: { color: hoverColor }
    }), [textColor, hoverColor]);

    return (
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-black text-white relative overflow-hidden z-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                {/* Header */}
                <div className="flex flex-row items-center justify-between mb-10 sm:mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide"
                        style={{ color: isLightMode ? '#000' : '#fff' }}
                    >
                        OUR SERVICES
                    </motion.h2>
                </div>

                {/* Service Boxes Container */}
                <div className="flex flex-col lg:flex-row w-full gap-0">

                    {/* Pheel PRODUCTION Box */}
                    <Link href="/production" data-cursor="hide" className="group lg:w-1/2 w-full focus:outline-none block cursor-pointer">
                        <motion.div
                            initial="idle"
                            whileHover="hover"
                            animate="idle"
                            className="relative w-full h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:h-[600px] bg-[#1A1A1A] overflow-hidden flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-14 text-left items-start [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_15px),0_100%)] lg:[clip-path:polygon(0_0,100%_0,calc(100%_-_40px)_100%,0_100%)]"
                        >
                            {/* Hover Fill Background */}
                            <motion.div
                                variants={{
                                    idle: { clipPath: 'circle(0% at 0% 0%)' },
                                    hover: { clipPath: 'circle(150% at 0% 0%)' }
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#EC5863] z-0"
                            />

                            {/* Arrow for Production */}
                            <motion.div
                                variants={{ idle: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-20"
                                style={{ color: isLightMode ? '#000' : '#fff' }}
                            >
                                <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-auto">
                                <motion.h3
                                    key={`production-${isLightMode}`}
                                    variants={productionVariants}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-tight"
                                >
                                    PHEEL<br />PRODUCTION
                                </motion.h3>
                                <motion.p
                                    key={`production-text-${isLightMode}`}
                                    variants={textVariants}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs sm:text-sm md:text-base font-light leading-relaxed"
                                    style={{ fontFamily: 'var(--font-noto-kufi-arabic), sans-serif' }}
                                >
                                    Born From A Shared Passion For Storytelling In 2022, Pheel Production Is A Collective Of Experts Dedicated To Cinematic Excellence. We Blend Imagination With Precision To Craft Visually Driven, Resonant Content, Transforming Every Idea Into An Unforgettable Experience.
                                </motion.p>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Pheel EXPERIENCE Box */}
                    <Link href="#experience" data-cursor="hide" className="group lg:w-1/2 w-full focus:outline-none block cursor-pointer">
                        <motion.div
                            initial="idle"
                            whileHover="hover"
                            animate="idle"
                            className="relative w-full h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:h-[600px] bg-[#1A1A1A] overflow-hidden flex flex-col justify-end items-end p-6 sm:p-8 md:p-10 lg:p-14 text-right [clip-path:polygon(0_15px,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(40px_0,100%_0,100%_100%,0_100%)]"
                        >
                            {/* Hover Fill Background */}
                            <motion.div
                                variants={{
                                    idle: { clipPath: 'circle(0% at 100% 100%)' },
                                    hover: { clipPath: 'circle(150% at 100% 100%)' }
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#825EED] z-0"
                            />

                            {/* Arrow for Experience */}
                            <motion.div
                                variants={{ idle: { opacity: 0, x: 10 }, hover: { opacity: 1, x: 0 } }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-20"
                                style={{ color: isLightMode ? '#000' : '#fff' }}
                            >
                                <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-auto items-end">
                                <motion.h3
                                    key={`experience-${isLightMode}`}
                                    variants={experienceVariants}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter leading-tight"
                                >
                                    PHEEL<br />EXPERIENCE
                                </motion.h3>
                                <motion.p
                                    key={`experience-text-${isLightMode}`}
                                    variants={textVariants}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs sm:text-sm md:text-base font-light leading-relaxed"
                                    style={{ fontFamily: 'var(--font-noto-kufi-arabic), sans-serif' }}
                                >
                                    Founded In 2008 And Evolving In 2023, Pheel Experience Transforms Spaces Into Live Narratives. We Blend Saudi Heritage With Innovation To Design Immersive 360-Degree Journeys, Turning Every Vision Into A Lasting Reality.
                                </motion.p>
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
