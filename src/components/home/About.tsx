'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section id="about" className="sticky top-0 z-10 min-h-[60vh] flex items-center py-10 md:py-16 lg:py-24 px-4 sm:px-6 border-b border-white/5 bg-black text-white rounded-[32px] sm:rounded-[48px]">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
                <motion.div
                    className="max-w-6xl"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 md:mb-8"
                    >
                        PHEEL US
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        className="text-base sm:text-xl md:text-2xl font-light text-white/70 leading-relaxed max-w-5xl"
                    >
                        We Are A Regional Powerhouse Of Creative Minds, United By Innovation, Driven By Purpose, And Fueled By Passion. Through Our Strategic Alliance With Samurai Productions, We Imagine, Craft, And Deliver Unforgettable, World-Class Experiences That Leave A Lasting Impact Across The EMEA Region.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="shrink-0"
                >
                    <Link
                        href="/about"
                        className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 glass-button-white text-white hover:bg-white/20 transition-all duration-300 tracking-widest text-sm sm:text-base rounded-full font-medium"
                    >
                        View More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
