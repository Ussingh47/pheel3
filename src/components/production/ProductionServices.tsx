'use client';

import { motion } from 'framer-motion';

const PRODUCTION_SERVICES = [
    {
        num: '01',
        title: 'CREATIVE DEVELOPMENT',
        desc: 'Conceptualizing and Designing The Visual Narrative From Script To Screen.'
    },
    {
        num: '02',
        title: 'PRE-PRODUCTION',
        desc: 'Comprehensive Planning, Casting, Location Scouting, And Script Breakdown.'
    },
    {
        num: '03',
        title: 'PRODUCTION',
        desc: 'On-set Execution With High-End Cinema Equipment And Professional Crews.'
    },
    {
        num: '04',
        title: 'POST-PRODUCTION',
        desc: 'Expert Editing, Sound Design, Color Grading, And VFX Implementation.'
    }
];

const ADVERTISEMENT_SERVICES = [
    {
        num: '01',
        title: 'BRAND STORYTELLING',
        desc: 'Connecting brands with audiences through cinematic advertisements and commercials.'
    },
    {
        num: '02',
        title: 'CREATIVE STRATEGY',
        desc: 'Crafting visually compelling campaigns that resonate globally.'
    },
    {
        num: '03',
        title: 'DIGITAL CONTENT',
        desc: 'Optimized video content for digital platforms and social media campaigns.'
    }
];

export default function ProductionServices() {
    return (
        <section className="bg-black py-20 md:py-32 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Production Services */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-16 tracking-tighter"
                >
                    PRODUCTION SERVICES
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32">
                    {PRODUCTION_SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#EC5863] p-10 lg:p-12 hover:scale-[1.03] transition-all duration-500 rounded-[4px] flex flex-col justify-between group h-full shadow-[0_20px_60px_rgba(236,88,99,0.25)] relative overflow-hidden"
                        >
                            <h3 className="text-white font-black text-7xl md:text-9xl mb-12 opacity-30 group-hover:opacity-100 transition-opacity absolute -top-4 -left-4">
                                {service.num}
                            </h3>
                            <div className="relative z-10">
                                <h4 className="text-white font-black text-2xl mb-4 uppercase tracking-tighter leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-white font-medium leading-relaxed opacity-90">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Advertisement Services */}
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-16 tracking-tighter"
                >
                    ADVERTISEMENT SERVICES
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {ADVERTISEMENT_SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#EC5863] p-10 lg:p-12 hover:scale-[1.03] transition-all duration-500 rounded-[4px] flex flex-col justify-between group h-full shadow-[0_20px_60px_rgba(236,88,99,0.25)] relative overflow-hidden"
                        >
                            <h3 className="text-white font-black text-7xl md:text-9xl mb-12 opacity-30 group-hover:opacity-100 transition-opacity absolute -top-4 -left-4">
                                {service.num}
                            </h3>
                            <div className="relative z-10">
                                <h4 className="text-white font-black text-2xl mb-4 uppercase tracking-tighter leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-white font-medium leading-relaxed opacity-90">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
