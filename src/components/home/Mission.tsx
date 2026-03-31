'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Mission() {
    return (
        <section className="sticky top-[20vh] z-30 min-h-[60vh] flex items-center py-10 md:py-16 lg:py-20 px-4 sm:px-6 bg-[#FFFD6A] text-black rounded-[32px] sm:rounded-[48px] shadow-2xl">
            <div className="container mx-auto max-w-7xl w-full flex justify-between items-end">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-6 md:mb-8 text-[var(--color-pheel-black)]">
                        MISSION
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-sm sm:text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl text-black/80"
                    >
                        To Collaborate, Create, And Deliver Powerful Experiences That Move People And Elevate Brands. At Pheel, We Embed Ourselves Into Every Story Blending Insight, Imagination, And Execution To Bring Visions To Life.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="shrink-0 hidden sm:block"
                >
                    <Link
                        href="#mission"
                        className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 glass-button-white text-white hover:bg-black/20 transition-all duration-300 tracking-widest text-sm sm:text-base rounded-full font-medium"
                        data-cursor="oval"
                    >
                        View More
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
