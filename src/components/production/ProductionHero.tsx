'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductionHero() {
    return (
        <section className="relative flex flex-col w-full overflow-hidden">
            {/* Top Area: Foreground Cinematic Image */}
            <div className="relative w-full h-[75vh] md:h-[95vh] overflow-hidden">
                <Image
                    src="/assets/Productions/productionHero.jpg"
                    alt="Pheel Production Crew"
                    fill
                    className="object-cover object-center grayscale opacity-90 scale-[1.05]"
                    priority
                />
                {/* Visual anchor fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Bottom Area: Grouped Content & Branding (Transparent) */}
            <div className="relative w-full pb-28 md:pb-40 px-6 text-center -mt-20 md:-mt-32 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="flex flex-col items-center select-none uppercase mb-8 md:mb-12">
                        <span className="text-[28px] md:text-6xl lg:text-[90px] font-black text-white leading-[0.85] tracking-[-0.03em] whitespace-nowrap">
                            WE DON&apos;T SHOOT CONTENT
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-8 mt-3 md:mt-5">
                            <span className="text-[28px] md:text-6xl lg:text-[90px] font-black text-white leading-[0.85] tracking-[-0.03em] whitespace-nowrap">
                                WE CRAFT
                            </span>
                            <span
                                className="text-[#EC5863] font-['Dancing_Script'] capitalize text-[48px] md:text-7xl lg:text-[140px] leading-none transform -rotate-3 md:-translate-y-6"
                                style={{
                                    fontFamily: 'var(--font-dancing-script)',
                                    textShadow: '0 0 50px rgba(236,88,99,1), 0 0 25px rgba(236,88,99,0.7)',
                                    display: 'inline-block'
                                }}
                            >
                                Cinema
                            </span>
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-gray-200 text-xs md:text-lg lg:text-[22px] max-w-4xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-lg opacity-90 px-4 mb-8 md:mb-10"
                    >
                        Pheel Production Transforms Ideas Into Powerful Visual Stories.
                        Blending Cinematic Storytelling, Creative Vision, And World-Class Execution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-block rounded-full bg-[#ee3f4a] px-12 py-5 text-base font-black uppercase tracking-[0.25em] text-[#ffea63] shadow-[0_0_50px_rgba(238,63,74,0.6)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_70px_rgba(238,63,74,0.8)] active:scale-95 md:px-18 md:py-6 md:text-lg lg:text-xl"
                        >
                            Start A Project
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
