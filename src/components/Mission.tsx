'use client';

import { motion } from 'framer-motion';

export default function Mission() {
    return (
        <section className="sticky top-0 z-30 min-h-[45vh] flex items-center py-12 md:py-20 px-6 bg-white text-black">
            <div className="container mx-auto max-w-7xl flex flex-col items-end text-right">
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[var(--color-pheel-black)]"
                >
                    MISSION
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-light text-black/80 leading-relaxed max-w-4xl"
                >
                    To collaborate, create, and deliver powerful experiences that move people and elevate brands. At Pheel, we embed ourselves into every story blending insight, imagination, and execution to bring visions to life.
                </motion.p>
            </div>
        </section>
    );
}
