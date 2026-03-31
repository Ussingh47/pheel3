'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProductionAction() {
    return (
        <section className="bg-black py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
                    
                    {/* Left: Heading with connecting line */}
                    <div className="w-full lg:w-1/3 relative flex flex-col items-center lg:items-start text-center lg:text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h2 
                                className="text-[#EC5863] text-5xl md:text-6xl lg:text-7xl font-['Dancing_Script'] leading-tight -rotate-6 transform -translate-x-4 mb-0"
                                style={{ fontFamily: 'var(--font-dancing-script)' }}
                            >
                                Pheel in
                            </h2>
                            <h3 className="text-white text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.8] mt-0">
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
