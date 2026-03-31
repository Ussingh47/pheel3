'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WORK_ITEMS = [
    { src: '/assets/w1.jpeg', title: 'Project 1', category: 'Production' },
    { src: '/assets/w2.jpeg', title: 'Project 2', category: 'Events' },
    { src: '/assets/w3.jpeg', title: 'Project 3', category: 'Production' },
    { src: '/assets/w4.jpeg', title: 'Project 4', category: 'Experience' },
    { src: '/assets/w5.jpeg', title: 'Project 5', category: 'Production' },
    { src: '/assets/w6.jpeg', title: 'Project 6', category: 'Events' },
    { src: '/assets/w7.jpeg', title: 'Project 7', category: 'Experience' },
];

export default function OurWork() {
    // Duplicate items for seamless loop
    const allWork = [...WORK_ITEMS, ...WORK_ITEMS];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="work" className="py-24 md:py-32 bg-black text-white rounded-t-[48px] overflow-hidden">
            <div className="container mx-auto max-w-7xl px-6 mb-12">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        OUR WORK
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="#work"
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 glass-button-white text-white hover:bg-white/20 transition-all duration-300 tracking-widest text-sm sm:text-base rounded-full font-medium"
                        >
                            View More
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Row */}
            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

                <div className="marquee-track-reverse py-8">
                    {allWork.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    filter: isAnyHovered && !isHovered ? 'blur(4px)' : 'blur(0px)',
                                    opacity: isAnyHovered && !isHovered ? 0.7 : 1,
                                    zIndex: isHovered ? 20 : 1
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative flex-shrink-0 w-[240px] md:w-[320px] h-[320px] md:h-[450px] mx-4 group overflow-hidden rounded-[40px] cursor-pointer"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-cyan-500)] mb-1 block font-bold">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{item.title}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
