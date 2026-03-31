'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersLife() {
    const images = [
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.01.34 PM.jpeg', alt: 'Team hiking adventure' },
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.01.52 PM.jpeg', alt: 'Pheel the spirit' },
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.03.53 PM.jpeg', alt: 'Team at work' },
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.04.44 PM.jpeg', alt: 'Behind the scenes' },
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.02.03 PM.jpeg', alt: 'Creative collaboration' },
        { src: '/assets/WhatsApp Image 2025-08-12 at 4.03.28 PM.jpeg', alt: 'Team bonding' },
    ];

    return (
        <section className="bg-black py-20 md:py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6">
                        Life At <span className="text-[#5EEAD4]">Pheel</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        From mountain treks to world-class productions — our team doesn&apos;t just work together, we grow together.
                    </p>
                </motion.div>

                {/* Photo Grid - Masonry-like */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`relative overflow-hidden rounded-xl group ${
                                i === 0 || i === 3 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                            }`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
