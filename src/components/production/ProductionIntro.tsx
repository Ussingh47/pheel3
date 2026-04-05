'use client';

import { motion } from 'framer-motion';

export default function ProductionIntro() {
    return (
        <section className="relative bg-black pt-24 md:pt-44 pb-12 md:pb-20 overflow-hidden">
            {/* 1:1 Reference Half-Circle - Reduced Atmosphere */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        background: 'radial-gradient(circle 1000px at 100% 100%, rgba(229, 59, 73, 0.35) 0%, rgba(229, 59, 73, 0.12) 40%, transparent 100%)'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                <div className="max-w-[1000px]">
                    {/* Title Section Lockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 md:mb-28 relative"
                    >
                        <h2
                            className="text-[#E53B49] font-['Dancing_Script'] text-[60px] md:text-[80px] lg:text-[90px] mb-[-1.2rem] md:mb-[-1.8rem] ml-1 relative z-20"
                            style={{
                                fontFamily: 'var(--font-dancing-script)',
                                textShadow: '0 0 20px rgba(229,59,73,0.8), 0 0 40px rgba(229,59,73,0.4)',
                                WebkitTextStroke: '1px rgba(229,59,73,0.2)'
                            }}
                        >
                            Pheel
                        </h2>
                        <h3 className="text-[#F7F2ED] font-black text-[40px] md:text-[60px] lg:text-[72px] uppercase tracking-tighter leading-[0.8] relative z-10">
                            PRODUCTION
                        </h3>
                    </motion.div>

                    {/* Content Section - Updated to Title Case and matched spacing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-10 md:space-y-12"
                    >
                        <p className="text-[#E5E5E5] text-[18px] md:text-[22px] lg:text-[24px] font-normal leading-relaxed text-left max-w-[850px]">
                            Pheel Production Was Born From A Simple Dinner In 2022 Where A Group Of Friends, Bonded
                            By Their Love For Film And Storytelling, Asked A Bold Question: <span className="text-[#E53B49] font-bold">"Why Not Turn This Passion Into Something Bigger?"</span>
                        </p>

                        <p className="text-[#BDBDBD] text-[16px] md:text-[19px] lg:text-[21px] leading-relaxed font-normal text-left max-w-[850px]">
                            By 2023, That Spark Became Pheel Production & Content Solutions A Creative Collective Of
                            Industry-Leading Experts With A Shared Vision For Cinematic Excellence. Today, We Craft
                            Powerful, Visually Driven, And Emotionally Resonant Content That Blends Imagination With
                            Precision. Every Project We Take On Is An Opportunity To Transform An Idea Into An
                            Unforgettable Experience.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
