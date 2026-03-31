'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MEMBERS = [
    { 
        name: 'Roua Almadani', 
        role: 'Co-Founder / CEO', 
        image: '/assets/AboutUs/Rectangle 28.jpg',
        description: 'Roua Almadani is A Saudi Media Entrepreneur And Executive Producer With Over 10 Years Of Experience In Film, Television, And Large-Scale Productions. As Co-Founder and CEO of Pheel Entertainment, She Leads Storytelling To Global Standards While Supporting Local Creative Talent.' 
    },
    { 
        name: 'Amr Bardeesi', 
        role: 'Co-Founder / Managing Director', 
        image: '/assets/AboutUs/Rectangle 29.jpg',
        description: "Amr Bardeesi Is The Co-Founder And Managing Director Of Pheel With Over 15 Years Of Experience In Finance, Venture Capital, And Strategic Strategy... Strengthening The Company's International Expansion And Operations Infrastructure, Bringing Deep Expertise In Treasury, Strategy, Structural Products, And Risk Management." 
    },
];

const OTHER_MEMBERS = [
    { name: 'Rayyan Shaker', role: 'Executive Producer' },
    { name: 'Khaled Jameel Alotaiba', role: 'Technical Director' },
    { name: 'Mohamed Saeed Baroud', role: 'Creative Director - Live Events' },
    { name: 'Ibrahim Muhammad Al-Anizi', role: 'Project Manager - Live Events' },
    { name: 'Mishari Al-Farraj', role: 'Project Manager - Media Production' },
    { name: 'Fahad Al-Humaidhi', role: 'Assistant Project Manager - Media Production' },
    { name: 'Abdulrahman Al-Rasheed', role: 'Event Coordinator' },
    { name: 'Lama Jameel', role: 'Social Media Management' },
    { name: 'Dana Abdullah', role: 'Marketing Communication Manager' },
    { name: 'Hamad Patel', role: 'Video Editor' },
    { name: 'Hamzah Alsabbah', role: 'Colorist' },
    { name: 'Ahmed Muttaqi', role: 'Video Editor / 2D Artist' },
    { name: 'Fahim Mushtaq', role: 'UI/UX Designer' },
];

export default function MeetThePheelers() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black mb-16 tracking-tight uppercase text-left"
                >
                    MEET THE PHEELERS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
                    {MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl group">
                                <Image 
                                    src={member.image} 
                                    alt={member.name} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                     <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-[0.3em] mb-2 block">Founders</span>
                                     <h3 className="text-3xl font-black text-white leading-none uppercase tracking-tight">
                                        {member.name}
                                     </h3>
                                     <p className="text-sm text-gray-400 font-medium uppercase mt-2 tracking-wider">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                {member.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
                    {OTHER_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="flex flex-col"
                        >
                            <div className="aspect-square bg-zinc-900 rounded-lg mb-4 flex items-center justify-center text-zinc-800 font-bold shadow-inner">
                                 {member.name.split(' ').map(n=>n[0]).join('')}
                            </div>
                            <h4 className="text-[13px] font-bold text-white uppercase leading-tight mb-1">
                                {member.name}
                            </h4>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-tight">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
