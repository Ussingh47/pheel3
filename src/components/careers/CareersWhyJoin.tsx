'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Globe, Zap, Heart, TrendingUp } from 'lucide-react';

const PERKS = [
    {
        icon: Sparkles,
        title: 'Creative Freedom',
        description: 'Work on iconic projects across the Middle East — from Riyadh Season to Red Sea Film Festival.',
    },
    {
        icon: Users,
        title: 'Collaborative Culture',
        description: 'A diverse team of passionate creators who push each other to deliver extraordinary experiences.',
    },
    {
        icon: Globe,
        title: 'Regional Impact',
        description: 'Shape the entertainment landscape of Saudi Arabia and beyond with globally recognized events.',
    },
    {
        icon: Zap,
        title: 'Fast Growth',
        description: 'Accelerate your career in one of the fastest-growing entertainment companies in the region.',
    },
    {
        icon: Heart,
        title: 'Team Spirit',
        description: 'We celebrate wins together — from mountain retreats to team events that fuel our creativity.',
    },
    {
        icon: TrendingUp,
        title: 'Career Development',
        description: 'Continuous learning, mentorship, and real opportunities to grow into leadership roles.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function CareersWhyJoin() {
    return (
        <section className="bg-black py-20 md:py-32 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6">
                        Why Join <span className="text-[#5EEAD4]">Pheel</span>?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        We&apos;re more than a company — we&apos;re a creative family. Here&apos;s what makes working at Pheel an experience like no other.
                    </p>
                </motion.div>

                {/* Perks grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PERKS.map((perk) => (
                        <motion.div
                            key={perk.title}
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                            className="group relative bg-zinc-900/40 border border-white/[0.06] rounded-2xl p-8 hover:border-[#5EEAD4]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#5EEAD4]/0 group-hover:bg-[#5EEAD4]/5 blur-[80px] transition-all duration-700 -mr-20 -mt-20" />
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[#5EEAD4]/10 border border-[#5EEAD4]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5EEAD4]/20 transition-all duration-500">
                                    <perk.icon className="text-[#5EEAD4]" size={28} />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-wide">
                                    {perk.title}
                                </h3>
                                <p className="text-gray-400 text-[15px] leading-relaxed">
                                    {perk.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
