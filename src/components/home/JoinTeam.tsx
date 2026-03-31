'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function JoinTeam() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 scale-105">
                <Image
                    src="/assets/WhatsApp Image 2025-08-12 at 4.05.17 PM.jpeg"
                    alt="Join the Pheel team"
                    fill
                    className="object-cover object-center grayscale brightness-[0.2] opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-center md:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase mb-6">
                            Be Part Of The <br />
                            <span className="text-[#5EEAD4]">Pheel Story</span>
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                            We are always looking for visionary creators and storytellers. Join a team that values innovation, passion, and extraordinary experiences.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-3 bg-[#5EEAD4] text-black font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm md:text-base hover:shadow-[0_0_30px_rgba(94,234,212,0.4)] transition-all group"
                                data-cursor="big"
                            >
                                Explorer Careers
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:block relative w-[400px] h-[500px]"
                    >
                        <div className="absolute inset-0 border-2 border-[#5EEAD4]/20 rounded-[40px] translate-x-6 translate-y-6" />
                        <div className="relative w-full h-full rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/assets/WhatsApp Image 2025-08-12 at 4.01.52 PM.jpeg"
                                alt="Team Spirit"
                                fill
                                className="object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-110 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
