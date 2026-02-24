'use client';

import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <section className="sticky top-0 z-20 min-h-[60vh] flex items-center py-16 md:py-28 px-6 bg-[#40E0D0] border-b border-black/5 text-black">
            <div className="container mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[var(--color-pheel-black)]"
                >
                    VISION
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl text-black/80"
                >
                    To craft a legacy of Saudi-born stories, brands, and experiences that echo beyond borders blending heritage with innovation to shape a world-class creative future.
                </motion.p>
            </div>
        </section>
    );
}
