'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';

export default function AboutSection() {
    return (
        <section id="about" className="sticky top-0 z-10 min-h-[80vh] flex items-center py-20 md:py-40 px-6 border-b border-black/5 bg-white text-black">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
                    >
                        PHEEL US
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl font-light text-black/70 leading-relaxed max-w-5xl"
                    >
                        We are a regional powerhouse of creative minds, united by innovation, driven by purpose, and fueled by passion. Through our strategic alliance with Samurai Productions, we imagine, craft, and deliver unforgettable, world-class experiences that leave a lasting impact across the EMEA region.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="shrink-0"
                >
                    <Link
                        href="/about"
                        className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 tracking-widest text-base"
                    >
                        VIEW MORE
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
