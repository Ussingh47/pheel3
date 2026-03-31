'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const QUOTES = [
    {
        text: "We Don't Just Produce Content\nWe Create Moments That Audiences Truly Pheel.",
        lang: 'en',
        dir: 'ltr' as const,
    },
    {
        text: "نحن لا ننتج محتوى فحسب،\nبل نخلق لحظات يشعر بها الجمهور حقاً.",
        lang: 'ar',
        dir: 'rtl' as const,
    },
];

export default function AboutWhoWeAre() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const wordContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
            },
        },
    };

    const wordVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            filter: 'blur(8px)',
            scale: 0.9,
        },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut' as const,
            },
        },
        exit: { 
            opacity: 0, 
            y: -20,
            filter: 'blur(4px)',
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: 'easeIn' as const,
            },
        },
    };

    const renderWords = (text: string) => {
        const lines = text.split('\n');
        return lines.map((line, lineIndex) => (
            <span key={lineIndex} style={{ display: 'block' }}>
                {line.split(' ').map((word, wordIndex) => (
                    <motion.span
                        key={`${lineIndex}-${wordIndex}`}
                        variants={wordVariants}
                        style={{ display: 'inline-block', marginRight: '0.3em' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </span>
        ));
    };

    return (
        <section className="py-24 px-4 bg-black overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                {/* Rotating Quote Section */}
                <div className="text-center mb-24 min-h-[180px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentQuote}
                            variants={wordContainerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-2xl md:text-4xl lg:text-5xl italic leading-tight px-4"
                            style={{
                                fontFamily: "var(--font-dancing-script), cursive",
                                color: '#86EFAC',
                                direction: QUOTES[currentQuote].dir,
                            }}
                            lang={QUOTES[currentQuote].lang}
                        >
                            {renderWords(QUOTES[currentQuote].text)}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                {/* Gallery Section - 3 images with rounded corners */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
                >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                        <Image src="/assets/AboutUs/Rectangle 16.jpg" alt="Gallery 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                        <Image src="/assets/AboutUs/Rectangle 17.jpg" alt="Gallery 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                        <Image src="/assets/AboutUs/Rectangle 18.jpg" alt="Gallery 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </motion.div>

                {/* WHO WE ARE Section - left aligned */}
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight uppercase leading-none">
                            WHO WE ARE
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-base md:text-lg text-gray-300 leading-relaxed"
                        >
                            Pheel Entertainment Is A Multidisciplinary Media And Entertainment Company Operating At 
                            The Intersection Of Film Production, Live Experiences, And Creative Strategy.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300 leading-relaxed"
                        >
                            Our Team Of Producers, Creatives, And Industry Experts Collaborates With Brands, 
                            Governments, And Global Partners To Craft Impactful Stories And Immersive Experiences.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base md:text-lg text-gray-300 leading-relaxed"
                        >
                            From Cinematic Storytelling To Large-Scale Events, We Transform Bold Ideas Into 
                            Productions That Inspire Audiences And Leave Lasting Impressions.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
