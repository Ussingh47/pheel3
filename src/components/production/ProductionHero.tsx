'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductionHero() {
    return (
        <section className="relative w-full h-[110vh] overflow-hidden bg-black flex items-center justify-center">
            {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Productions/Group 24.png"
                    alt="Pheel Production Crew"
                    fill
                    className="object-cover object-center grayscale opacity-60"
                    priority
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="flex flex-col items-center select-none uppercase">
                        <span className="text-5xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.8] tracking-[-0.05em] mb-0">
                            WE DON&apos;T SHOOT CONTENT
                        </span>
                        <div className="flex flex-wrap items-center justify-center gap-x-4 md:mt-0">
                            <span className="text-5xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.8] tracking-[-0.05em]">
                                WE CRAFT
                            </span>
                            <span 
                                className="text-[#EC5863] font-['Dancing_Script'] capitalize text-6xl md:text-8xl lg:text-[130px] leading-none transform -rotate-3 -translate-y-4 ml-4" 
                                style={{ fontFamily: 'var(--font-dancing-script)', textShadow: '0 0 40px rgba(236,88,99,0.7)' }}
                            >
                                Cinema
                            </span>
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-gray-200 text-lg md:text-2xl mt-12 max-w-5xl mx-auto font-light leading-relaxed tracking-wide drop-shadow-lg"
                    >
                        Pheel Production Transforms Ideas Into Powerful Visual Stories. Blending Cinematic Storytelling, Creative Vision, And World-Class Execution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-16"
                    >
                        <Link
                            href="/contact"
                            className="inline-block bg-[#EC5863] text-white font-black uppercase tracking-[0.25em] px-14 py-6 rounded-full text-base md:text-lg shadow-[0_0_60px_rgba(236,88,99,0.6)] hover:shadow-[0_0_80px_rgba(236,88,99,0.8)] hover:scale-105 transition-all duration-500 active:scale-95"
                        >
                            Start A Project
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
