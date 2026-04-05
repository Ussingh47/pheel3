'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ProductionHero() {
    const fullRow1 = [...ROW1_LOGOS, ...ROW1_LOGOS, ...ROW1_LOGOS];
    const row2Offset = [...ROW2_LOGOS.slice(4), ...ROW2_LOGOS.slice(0, 4)];
    const fullRow2 = [...row2Offset, ...row2Offset, ...row2Offset];

    return (
        <section className="relative flex w-full flex-col overflow-hidden bg-[#050505]">
            <div className="relative h-[470px] overflow-hidden sm:h-[530px] md:h-[590px] lg:h-[640px] xl:h-[680px]">
                <Image
                    src="/assets/Productions/productionHero.jpg"
                    alt="Pheel Production Crew"
                    fill
                    sizes="100vw"
                    className="object-cover object-center grayscale brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#050505]" />

                <div className="absolute inset-x-0 bottom-[24px] z-10 flex justify-center px-4 sm:bottom-[30px] sm:px-6 md:bottom-[36px] lg:bottom-[42px]">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto w-full max-w-[780px] text-center"
                    >
                        <h1 className="mb-2 flex select-none flex-col items-center sm:mb-3 md:mb-4">
                            <span className="text-[26px] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#F7F2ED] sm:whitespace-nowrap sm:text-[34px] md:text-[46px] lg:text-[52px] xl:text-[56px]">
                                WE DON&apos;T SHOOT CONTENT
                            </span>
                            <div className="mt-0.5 flex flex-wrap items-end justify-center gap-x-2 gap-y-1 md:gap-x-3">
                                <span className="text-[26px] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#F7F2ED] sm:whitespace-nowrap sm:text-[34px] md:text-[46px] lg:text-[52px] xl:text-[56px]">
                                    WE CRAFT
                                </span>
                                <span
                                    className="font-['Dancing_Script'] text-[54px] leading-none text-[#E53B49] -rotate-[7deg] sm:text-[66px] md:-translate-y-1 md:text-[78px] lg:text-[88px] xl:text-[94px]"
                                    style={{
                                        fontFamily: 'var(--font-dancing-script)',
                                        textShadow: '0 0 20px rgba(229,59,73,0.6), 0 0 60px rgba(229,59,73,0.3)',
                                        display: 'inline-block',
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
                            className="mx-auto max-w-[680px] px-4 text-[13px] font-light leading-[1.45] tracking-[0.01em] text-white/90 sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]"
                        >
                            Pheel Production Transforms Ideas Into Powerful Visual Stories. Blending Cinematic Storytelling, Creative Vision, And World-Class Execution.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            <div className="relative z-10 flex justify-center bg-[#050505] px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-5 md:pb-16 md:pt-6 lg:pb-18 lg:pt-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="relative inline-flex justify-center"
                >
                    <Link
                        href="/contact"
                        className="relative z-10 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#E84B4B] to-[#D4343A] px-10 py-3 text-[15px] font-bold tracking-wide text-[#FFE665] transition-all duration-300 hover:scale-[1.03] active:scale-95 sm:px-12 sm:py-3.5 sm:text-[16px] md:min-w-[200px] md:text-[17px]"
                        style={{
                            boxShadow: '0 0 18px rgba(229,59,73,0.6), 0 0 40px rgba(229,59,73,0.25)',
                        }}
                    >
                        Start A Project
                    </Link>
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[30px] sm:blur-[40px]"
                        style={{ width: '180px', height: '60px', background: 'rgba(229, 59, 73, 0.4)' }}
                    />
                </motion.div>
            </div>

            <div className="relative z-10 w-full bg-[#0a0a0a]">
                {/* Row 1 */}
                <div className="relative overflow-hidden border-y border-white/30">
                    <div className="marquee-track py-0" style={{ animationDuration: '34s' }}>
                        {fullRow1.map((logo, i) => (
                            <div
                                key={`row1-${i}`}
                                className="relative flex h-[84px] w-[220px] flex-shrink-0 items-center justify-center border-r border-white/30 px-5"
                            >
                                <div className="logo-white relative w-full flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={65}
                                        className="object-contain max-h-[65px] w-auto"
                                    />
                                </div>
                                {/* Corner diamonds */}
                                <div className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -left-[3px] -bottom-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -right-[3px] -bottom-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gap between rows */}
                <div className="h-[20px] bg-[#0a0a0a]" />

                {/* Row 2 */}
                <div className="relative overflow-hidden border-t border-b border-white/30">
                    <div className="marquee-track-reverse py-0" style={{ animationDuration: '36s' }}>
                        {fullRow2.map((logo, i) => (
                            <div
                                key={`row2-${i}`}
                                className="relative flex h-[84px] w-[220px] flex-shrink-0 items-center justify-center border-r border-b border-white/30 px-5"
                            >
                                <div className="logo-white relative w-full flex items-center justify-center">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={160}
                                        height={65}
                                        className="object-contain max-h-[65px] w-auto"
                                    />
                                </div>
                                {/* Corner diamonds */}
                                <div className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -left-[3px] -bottom-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                                <div className="absolute -right-[3px] -bottom-[3px] h-[6px] w-[6px] rotate-45 bg-white/70" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
