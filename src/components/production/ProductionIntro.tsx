'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ROW1_LOGOS = [
    { src: '/assets/Clients/KAUST 1.png', alt: 'KAUST' },
    { src: '/assets/Clients/Diriyah Season 1.png', alt: 'Diriyah Season' },
    { src: '/assets/Clients/Riyadh Season 1.png', alt: 'Riyadh Season' },
    { src: '/assets/Clients/Ministry of Culture 1.png', alt: 'Ministry of Culture' },
    { src: '/assets/Clients/KAEC 1.png', alt: 'KAEC' },
    { src: '/assets/Clients/red sea film festival 1.png', alt: 'Red Sea Film Festival' },
    { src: '/assets/Clients/itfc 1.png', alt: 'itfc' },
    { src: '/assets/Clients/P&G 1.png', alt: 'P&G' },
];

const ROW2_LOGOS = [
    { src: '/assets/Clients/Unilever 1.png', alt: 'Unilever' },
    { src: '/assets/Clients/Mars 1.png', alt: 'Mars' },
    { src: '/assets/Clients/Pringles 1.png', alt: 'Pringles' },
    { src: '/assets/Clients/Swatch 1.png', alt: 'Swatch' },
    { src: '/assets/Clients/Lexus 1.png', alt: 'Lexus' },
    { src: '/assets/Clients/Nesma 1.png', alt: 'Nesma' },
    { src: '/assets/Clients/Toyota 1.png', alt: 'Toyota' },
    { src: '/assets/Clients/Daihatsu 1.png', alt: 'Daihatsu' },
    { src: '/assets/Clients/Peugeot 1.png', alt: 'Peugeot' },
];

export default function ProductionIntro() {
    const fullRow1 = [...ROW1_LOGOS, ...ROW1_LOGOS, ...ROW1_LOGOS];
    // Offset Row 2 by slicing to stagger the logos
    const row2Offset = [...ROW2_LOGOS.slice(4), ...ROW2_LOGOS.slice(0, 4)];
    const fullRow2 = [...row2Offset, ...row2Offset, ...row2Offset];

    return (
        <section className="bg-black py-20 px-0 overflow-hidden border-b border-white/5">
            <div className="w-full mb-32 flex flex-col">
                {/* 1:1 Match Logo Marquee Row 1 */}
                <div className="relative border-t border-white/10 overflow-hidden">
                    <div className="marquee-track py-1 transition-all">
                        {fullRow1.map((logo, i) => (
                            <div key={`row1-${i}`} className="relative group w-[200px] md:w-[280px] h-[120px] md:h-[160px] flex items-center justify-center border-r border-white/10 px-8 flex-shrink-0">
                                {/* Intersection Markers */}
                                <div className="absolute -top-[1.5px] -right-[1.5px] w-[3px] h-[3px] bg-white z-10" />
                                <div className="absolute -bottom-[1.5px] -right-[1.5px] w-[3px] h-[3px] bg-white z-10" />
                                
                                <div className="relative w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain p-6"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 1:1 Match Logo Marquee Row 2 - Unified Belt (No Top Border) */}
                <div className="relative border-b border-white/10 overflow-hidden">
                    <div className="marquee-track-reverse py-1 transition-all">
                        {fullRow2.map((logo, i) => (
                            <div key={`row2-${i}`} className="relative group w-[200px] md:w-[280px] h-[120px] md:h-[160px] flex items-center justify-center border-r border-white/10 px-8 flex-shrink-0">
                                {/* Intersection Markers (Only bottom, top shared with row 1) */}
                                <div className="absolute -bottom-[1.5px] -right-[1.5px] w-[3px] h-[3px] bg-white z-10" />

                                <div className="relative w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain p-6"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-6">
                {/* Intro Text Section (Preserved) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 
                            className="text-[#EC5863] font-['Dancing_Script'] text-5xl md:text-6xl lg:text-7xl mb-2 -rotate-6 transform -translate-x-4"
                            style={{ fontFamily: 'var(--font-dancing-script)' }}
                        >
                            Pheel
                        </h2>
                        <h3 className="text-white font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8">
                            PRODUCTION
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                            At Pheel Production, Our Mission Is Simple Yet Ambitious: To Set A New Global Benchmark In Storytelling. We Believe That Every Brand Has A Unique Voice, And Every Narrative Deserves To Be Crafted With The Precision And Artistry Of A Feature Film.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            Through Our Strategic Partnership With Samurai Productions, We Bridge Creativity And Technology To Deliver High-End Content Across The EMEA Region. We Don&apos;t Just Shoot; We Imagine, We Design, And We Bring To Life Experiences That Resonate Long After The Final Frame.
                        </p>

                        <div className="w-24 h-1 bg-[#EC5863] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
