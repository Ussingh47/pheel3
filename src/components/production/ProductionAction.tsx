'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductionAction() {
    return (
        <section className="relative bg-black py-32 px-6 overflow-hidden">
            {/* 1:1 Reference Atmosphere - Handshake with Projects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top-Right Glow */}
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        background: 'radial-gradient(circle 1000px at 100% 0%, rgba(229, 59, 73, 0.35) 0%, rgba(229, 59, 73, 0.12) 40%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">

                    {/* Left: Heading with brand consistency */}
                    <div className="w-full lg:w-1/3 relative flex flex-col items-center lg:items-start text-center lg:text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h2
                                className="text-[#E53B49] text-5xl md:text-6xl lg:text-[80px] font-['Dancing_Script'] leading-tight mb-[-0.8rem] md:mb-[-1.5rem] relative z-20"
                                style={{
                                    fontFamily: 'var(--font-dancing-script)',
                                    textShadow: '0 0 20px rgba(229,59,73,0.6)'
                                }}
                            >
                                Pheel in
                            </h2>
                            <h3 className="text-[#F7F2ED] text-[40px] md:text-[60px] lg:text-[72px] font-black uppercase tracking-tighter leading-[0.8] relative z-10">
                                ACTION
                            </h3>

                            {/* Connecting Line (Horizontal) */}
                            <div className="hidden lg:block absolute left-full top-1/2 w-32 h-px bg-white/30 -translate-y-1/2 ml-8 z-10" />
                        </motion.div>
                    </div>

                    {/* Right: Bento Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-12 gap-0 relative">
                        {/* Column 1 (Leftmost in grid) */}
                        <div className="col-span-3 flex flex-col pt-20">
                            <motion.div
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="relative aspect-square border-b border-l border-white/20"
                            >
                                <Image src="/assets/WhatsApp Image 2025-08-12 at 4.01.34 PM.jpeg" alt="Pheel Action 1" fill className="object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="relative aspect-[3/5] border-l border-white/20"
                            >
                                <Image src="/assets/WhatsApp Image 2025-08-12 at 4.04.44 PM.jpeg" alt="Pheel Action 2" fill className="object-cover" />
                            </motion.div>
                        </div>

                        {/* Column 2 (Middle) */}
                        <div className="col-span-6 flex flex-col">
                            <div className="grid grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    className="relative aspect-square border-l border-b border-white/20"
                                >
                                    <Image src="/assets/WhatsApp Image 2025-08-12 at 4.02.03 PM.jpeg" alt="Pheel Action 3" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    className="relative aspect-square border-l border-b border-white/20"
                                >
                                    <Image src="/assets/WhatsApp Image 2025-08-12 at 4.02.48 PM.jpeg" alt="Pheel Action 4" fill className="object-cover" />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="relative aspect-[16/9] border-l border-b border-white/20"
                            >
                                <Image src="/assets/WhatsApp Image 2025-08-12 at 4.05.17 PM.jpeg" alt="Pheel Action 5" fill className="object-cover" />
                            </motion.div>
                            <div className="grid grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    className="relative aspect-square border-l border-white/20"
                                >
                                    <Image src="/assets/WhatsApp Image 2025-08-12 at 4.02.29 PM.jpeg" alt="Pheel Action 6" fill className="object-cover" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    className="relative aspect-square border-l border-white/20"
                                >
                                    <Image src="/assets/WhatsApp Image 2025-08-12 at 4.03.28 PM.jpeg" alt="Pheel Action 7" fill className="object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Column 3 (Right) */}
                        <div className="col-span-3 flex flex-col pt-40">
                            <motion.div
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="relative aspect-[4/3] border-l border-r border-b border-white/20"
                            >
                                <Image src="/assets/WhatsApp Image 2025-08-12 at 4.05.40 PM.jpeg" alt="Pheel Action 8" fill className="object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                className="relative flex-grow border-l border-r border-white/20 min-h-[300px]"
                            >
                                <Image src="/assets/WhatsApp Image 2025-08-12 at 4.01.52 PM.jpeg" alt="Pheel Action 9" fill className="object-cover" />
                            </motion.div>
                        </div>

                        {/* Vertical Axis Line through the header middle */}
                        <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-white/10 -translate-y-1/2 z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
