'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const PROJECTS = [
    {
        category: 'FEATURED FILMS',
        items: [
            { src: '/assets/Productions/Rectangle 76.jpg', title: 'REHLA 404' },
            { src: '/assets/Productions/Rectangle 100.jpg', title: 'HAWA' },
            { src: '/assets/Productions/Rectangle 101.jpg', title: 'SEVEN SUMMITS' },
            { src: '/assets/Productions/Rectangle 102.jpg', title: 'RED SEA' },
            { src: '/assets/Productions/Rectangle 110.jpg', title: 'UNE SECONDE VIE' }
        ]
    },
    {
        category: 'DOCUMENTRIES',
        items: [
            { src: '/assets/Productions/Rectangle 89.jpg', title: 'HAMIL AL-LAQAB' },
            { src: '/assets/Productions/Rectangle 118.jpg', title: 'THE ONLY WITNESS' },
            { src: '/assets/Productions/Rectangle 119.jpg', title: 'EL SIGN' }
        ]
    },
    {
        category: 'SHORT FILMS',
        items: [
            { src: '/assets/Productions/Rectangle 121.jpg', title: 'WHITE COAT' },
            { src: '/assets/Productions/Rectangle 123.jpg', title: 'LITTLE GIRL' }
        ]
    },
    {
        category: 'COMMERCIALS',
        items: [
            { src: '/assets/Productions/Rectangle 120.jpg', title: 'SPRITE' },
            { src: '/assets/Productions/Rectangle 122.jpg', title: 'FOMO' },
            { src: '/assets/Productions/Rectangle 92.jpg', title: 'LEXUS' },
            { src: '/assets/Productions/Rectangle 96.jpg', title: 'DAIHATSU' }
        ]
    },
    {
        category: 'DISTRIBUTIONS',
        items: [
            { src: '/assets/Productions/Rectangle 115.jpg', title: 'RRR' },
            { src: '/assets/Productions/Rectangle 116.jpg', title: 'GOLD' },
            { src: '/assets/Productions/Rectangle 966.jpg', title: 'DOG' }
        ]
    }
];

export default function ProductionProjects() {
    const [hoveredItem, setHoveredItem] = useState<{ section: number; index: number } | null>(null);

    return (
        <section className="relative bg-black py-24 md:py-32 overflow-hidden">
            {/* Standard Atmosphere - Transitioning between sections */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Localized Left-Side Atmosphere - Specialized for Documentaries and Short Films */}
                <div
                    className="absolute left-0 top-[40%] -translate-y-1/2 w-full h-[1200px] opacity-60"
                    style={{
                        background: 'radial-gradient(circle 800px at 0% 50%, rgba(229, 59, 73, 0.25) 0%, rgba(229, 59, 73, 0.05) 50%, transparent 100%)'
                    }}
                />
                {/* Bottom-Right Glow specifically for Distributions - Meeting Action top-half */}
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        background: 'radial-gradient(circle 1000px at 100% 100%, rgba(229, 59, 73, 0.35) 0%, rgba(229, 59, 73, 0.12) 40%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-[100vw] lg:max-w-7xl px-6 lg:px-8 relative z-10">
                {PROJECTS.map((section, sectionIdx) => {
                    return (
                        <div key={sectionIdx} className="mb-24 last:mb-0 relative group/section">
                            {/* Title Bar with brand red dash */}
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-[#F7F2ED] text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-10 md:mb-12 tracking-tight flex items-center gap-4 border-l-4 border-[#E53B49] pl-6 ml-6 lg:ml-0"
                            >
                                {section.category}
                            </motion.h2>

                            <div className="relative">
                                <div className="flex overflow-x-auto overflow-y-hidden gap-6 scrollbar-hide snap-x snap-mandatory px-6 lg:px-0 pb-8 -mx-6 lg:mx-0">
                                    {section.items.map((item, i) => {
                                        const isHovered = hoveredItem?.section === sectionIdx && hoveredItem?.index === i;
                                        const isAnyInsectionHovered = hoveredItem?.section === sectionIdx;

                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                whileHover={{ scale: 1.05, zIndex: 20 }}
                                                className="flex-shrink-0 w-[240px] md:w-[320px] group relative aspect-[3/4.2] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl snap-center"
                                            >
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
