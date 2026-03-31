'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersCTA() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/WhatsApp Image 2025-08-12 at 4.01.52 PM.jpeg"
                    alt="Join the Pheel team"
                    fill
                    className="object-cover object-center grayscale brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl mx-auto uppercase">
                        Ready To Create <br />
                        Something <span className="text-[#5EEAD4]">Extraordinary</span>?
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Your next chapter starts here. Join Pheel and be part of a team that&apos;s shaping the future of entertainment in the Middle East.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="mailto:careers@pheelgroup.com?subject=Career Inquiry"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#5EEAD4] text-black font-black uppercase tracking-widest px-10 py-4 rounded-full text-sm md:text-base hover:shadow-[0_0_20px_rgba(94,234,212,0.4)] transition-all"
                        >
                            Apply Now
                        </motion.a>
                        <motion.a
                            href="mailto:careers@pheelgroup.com?subject=General Career Inquiry"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 text-white font-bold uppercase tracking-widest px-10 py-4 rounded-full text-sm md:text-base hover:border-white/60 transition-all"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
