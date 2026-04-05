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
        <section className="relative bg-black pt-12 md:pt-20 pb-12 md:pb-20 px-6 overflow-hidden">
            {/* 1:1 Reference Half-Circle - Reduced Atmosphere */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        background: 'radial-gradient(circle 1000px at 100% 0%, rgba(229, 59, 73, 0.35) 0%, rgba(229, 59, 73, 0.12) 40%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Production Services */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#F7F2ED] text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-black uppercase mb-10 md:mb-12 tracking-[-0.06em] leading-[0.9]"
                >
                    PRODUCTION SERVICES
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-40">
                    {PRODUCTION_SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#E53B49] p-10 lg:p-12 hover:scale-[1.03] transition-all duration-500 rounded-[4px] flex flex-col justify-between group h-full relative overflow-hidden"
                        >
                            <h3 className="text-white font-black text-8xl md:text-[140px] mb-12 opacity-15 group-hover:opacity-40 transition-opacity absolute -top-8 -left-6 pointer-events-none">
                                {service.num}
                            </h3>
                            <div className="relative z-10 pt-16">
                                <h4 className="text-white font-black text-2xl mb-4 uppercase tracking-tighter leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-white font-normal leading-relaxed opacity-95 text-[15px] md:text-[16px]">
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
                    className="text-[#F7F2ED] text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] xl:text-[56px] font-black uppercase mb-10 md:mb-12 tracking-[-0.06em] leading-[0.9]"
                >
                    ADVERTISEMENT SERVICES
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {ADVERTISEMENT_SERVICES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#E53B49] p-10 lg:p-12 hover:scale-[1.03] transition-all duration-500 rounded-[4px] flex flex-col justify-between group h-full relative overflow-hidden"
                        >
                            <h3 className="text-white font-black text-8xl md:text-[140px] mb-12 opacity-15 group-hover:opacity-40 transition-opacity absolute -top-8 -left-6 pointer-events-none">
                                {service.num}
                            </h3>
                            <div className="relative z-10 pt-16">
                                <h4 className="text-white font-black text-2xl mb-4 uppercase tracking-tighter leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-white font-normal leading-relaxed opacity-95 text-[15px] md:text-[16px]">
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
