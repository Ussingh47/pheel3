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
        <section className="bg-black py-20 overflow-hidden">
            <div className="container mx-auto max-w-[100vw] lg:max-w-7xl px-6 lg:px-0">
                {PROJECTS.map((section, sectionIdx) => {
                    const isDistributions = section.category === 'DISTRIBUTIONS';
                    
                    return (
                        <div key={sectionIdx} className="mb-24 last:mb-0 relative group/section">
                            {/* Title Bar with dash and side padding for mobile */}
                            <motion.h2 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-10 md:mb-12 tracking-tight flex items-center gap-4 border-l-4 border-[#EC5863] pl-6 ml-6 lg:ml-0"
                            >
                                {section.category}
                            </motion.h2>

                            {/* Conditional Layout: Static Grid for Distributions, Rail for others */}
                            {isDistributions ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-6 lg:px-0">
                                    {section.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            className="relative aspect-[3/4.2] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl group"
                                        >
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="flex overflow-x-auto overflow-y-hidden gap-6 scrollbar-hide snap-x snap-mandatory px-6 lg:px-0 pb-8 -mx-6 lg:mx-0">
                                        {section.items.map((item, i) => {
                                            const isHovered = hoveredItem?.section === sectionIdx && hoveredItem?.index === i;
                                            const isAnyInsectionHovered = hoveredItem?.section === sectionIdx;

                                            return (
                                                <motion.div
                                                    key={i}
                                                    onMouseEnter={() => setHoveredItem({ section: sectionIdx, index: i })}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                    animate={{
                                                        scale: isHovered ? 1.05 : 1,
                                                        filter: isAnyInsectionHovered && !isHovered ? 'blur(4px)' : 'blur(0px)',
                                                        opacity: isAnyInsectionHovered && !isHovered ? 0.7 : 1,
                                                        zIndex: isHovered ? 20 : 1
                                                    }}
                                                    className="flex-shrink-0 w-[240px] md:w-[320px] group relative aspect-[3/4.2] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl snap-center"
                                                >
                                                    <Image
                                                        src={item.src}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    {/* Hover Overlay - Simplified (No Text) */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    {/* Faded edges to indicate scroll */}
                                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            )}
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
