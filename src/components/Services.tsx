'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Line draw progress (0 to 1)
    const lineProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    // Glow intensity
    const glowOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
    // Card glow
    const cardGlow = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-24 md:py-40 px-6 bg-white text-black relative overflow-hidden"
        >
            <div className="container mx-auto max-w-6xl relative">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 md:mb-32"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        WHAT WE DO
                    </h2>

                </motion.div>

                {/* SVG Connecting Lines — overflow visible to reach headings */}
                <div className="relative h-48 md:h-64 -mt-16 md:-mt-20 mb-4 overflow-visible z-0">
                    <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 1000 300"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        style={{ overflow: 'visible' }}
                    >
                        <defs>
                            <filter id="glowRed" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            {/* Animated dash for traveling dot effect */}
                            <filter id="dotGlow" x="-200%" y="-200%" width="500%" height="500%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* === LEFT BRANCH (Red) === */}
                        {/* Static guide line */}
                        <path
                            d="M 500 0 L 500 80 Q 500 130 420 130 L 200 130 Q 150 130 150 180 L 150 310"
                            stroke="rgba(0,0,0,0.06)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            fill="none"
                        />
                        {/* Animated glow line */}
                        <motion.path
                            d="M 500 0 L 500 80 Q 500 130 420 130 L 200 130 Q 150 130 150 180 L 150 310"
                            stroke="#EC5863"
                            strokeWidth="2"
                            strokeLinecap="round"
                            filter="url(#glowRed)"
                            style={{
                                pathLength: lineProgress,
                                opacity: glowOpacity,
                            }}
                        />

                        {/* Circle at top center (start) */}
                        <motion.circle
                            cx="500" cy="0" r="5"
                            fill="#EC5863"
                            filter="url(#glowRed)"
                            style={{ opacity: glowOpacity }}
                        />
                        {/* Circle at junction (where line bends left) */}
                        <motion.circle
                            cx="500" cy="80" r="4"
                            fill="none"
                            stroke="#EC5863"
                            strokeWidth="1.5"
                            filter="url(#glowRed)"
                            style={{ opacity: glowOpacity, scale: useTransform(cardGlow, [0, 1], [0, 1]) }}
                        />
                        {/* Circle at corner */}
                        <motion.circle
                            cx="150" cy="130" r="4"
                            fill="none"
                            stroke="#EC5863"
                            strokeWidth="1.5"
                            filter="url(#glowRed)"
                            style={{ opacity: cardGlow }}
                        />
                        {/* Circle at end (points to Pheel PRODUCTION) */}
                        <motion.circle
                            cx="150" cy="310" r="8"
                            fill="#EC5863"
                            filter="url(#glowRed)"
                            style={{ opacity: cardGlow, scale: useTransform(cardGlow, [0, 1], [0.5, 1.2]) }}
                        />

                        {/* Traveling dot on left path */}
                        <circle r="3" fill="#EC5863" filter="url(#dotGlow)">
                            <animateMotion
                                dur="3s"
                                repeatCount="indefinite"
                                path="M 500 0 L 500 80 Q 500 130 420 130 L 200 130 Q 150 130 150 180 L 150 310"
                            />
                        </circle>

                        {/* === RIGHT BRANCH (Purple) === */}
                        {/* Static guide line */}
                        <path
                            d="M 500 0 L 500 80 Q 500 130 580 130 L 800 130 Q 850 130 850 180 L 850 310"
                            stroke="rgba(0,0,0,0.06)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            fill="none"
                        />
                        {/* Animated glow line */}
                        <motion.path
                            d="M 500 0 L 500 80 Q 500 130 580 130 L 800 130 Q 850 130 850 180 L 850 310"
                            stroke="#825EED"
                            strokeWidth="2"
                            strokeLinecap="round"
                            filter="url(#glowPurple)"
                            style={{
                                pathLength: lineProgress,
                                opacity: glowOpacity,
                            }}
                        />

                        {/* Circle at top center (shared with left) */}
                        <motion.circle
                            cx="500" cy="0" r="5"
                            fill="#825EED"
                            filter="url(#glowPurple)"
                            style={{ opacity: glowOpacity }}
                        />
                        {/* Circle at junction */}
                        <motion.circle
                            cx="500" cy="80" r="4"
                            fill="none"
                            stroke="#825EED"
                            strokeWidth="1.5"
                            filter="url(#glowPurple)"
                            style={{ opacity: glowOpacity, scale: useTransform(cardGlow, [0, 1], [0, 1]) }}
                        />
                        {/* Circle at corner */}
                        <motion.circle
                            cx="850" cy="130" r="4"
                            fill="none"
                            stroke="#825EED"
                            strokeWidth="1.5"
                            filter="url(#glowPurple)"
                            style={{ opacity: cardGlow }}
                        />
                        {/* Circle at end (points to Pheel EVENTS) */}
                        <motion.circle
                            cx="850" cy="310" r="8"
                            fill="#825EED"
                            filter="url(#glowPurple)"
                            style={{ opacity: cardGlow, scale: useTransform(cardGlow, [0, 1], [0.5, 1.2]) }}
                        />

                        {/* Traveling dot on right path */}
                        <circle r="3" fill="#825EED" filter="url(#dotGlow)">
                            <animateMotion
                                dur="3s"
                                repeatCount="indefinite"
                                begin="0.5s"
                                path="M 500 0 L 500 80 Q 500 130 580 130 L 800 130 Q 850 130 850 180 L 850 310"
                            />
                        </circle>
                    </svg>
                </div>

                {/* Service Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
                    {/* Pheel PRODUCTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative text-center"
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                            style={{
                                textShadow: useTransform(
                                    cardGlow,
                                    [0, 1],
                                    ['0 0 0px rgba(236,88,99,0)', '0 0 20px rgba(236,88,99,0.4)']
                                ),
                            }}
                        >
                            Pheel<br />
                            <span className="text-[var(--color-pheel-red)]">PRODUCTION</span>
                        </motion.h3>
                        <p className="text-base md:text-lg font-light text-black/50 leading-relaxed max-w-sm mx-auto">
                            Born from a shared passion for storytelling in 2022, Pheel Production is a collective of experts dedicated to cinematic excellence. We blend imagination with precision to craft visually driven, resonant content, transforming every idea into an unforgettable experience.
                        </p>

                        {/* Glow accent */}
                        <motion.div
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[var(--color-pheel-red)]/20 blur-[60px]"
                            style={{ opacity: cardGlow }}
                        />
                    </motion.div>

                    {/* EVENTS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative text-center"
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                            style={{
                                textShadow: useTransform(
                                    cardGlow,
                                    [0, 1],
                                    ['0 0 0px rgba(130,94,237,0)', '0 0 20px rgba(130,94,237,0.4)']
                                ),
                            }}
                        >
                            Pheel<br />
                            <span className="text-[var(--color-pheel-purple)]">EXPERIENCE</span>
                        </motion.h3>
                        <p className="text-base md:text-lg font-light text-black/50 leading-relaxed max-w-sm mx-auto">
                            Founded in 2008 and evolving in 2023, Pheel Experience transforms spaces into live narratives. We blend Saudi heritage with innovation to design immersive 360-degree journeys, turning every vision into a lasting reality.
                        </p>

                        {/* Glow accent */}
                        <motion.div
                            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[var(--color-pheel-purple)]/20 blur-[60px]"
                            style={{ opacity: cardGlow }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
