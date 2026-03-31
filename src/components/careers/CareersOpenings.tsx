'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ChevronDown, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
}

const JOB_OPENINGS: JobOpening[] = [
    {
        id: 'exec-producer',
        title: 'Executive Producer',
        department: 'Production',
        location: 'Riyadh, Saudi Arabia',
        type: 'Full-time',
        description: 'Lead end-to-end production of large-scale entertainment events and media projects across the Kingdom.',
        responsibilities: [
            'Oversee all aspects of production from concept to execution',
            'Manage budgets, timelines, and creative teams',
            'Liaise with high-profile clients and stakeholders',
            'Ensure world-class delivery standards on every project',
        ],
        requirements: [
            '10+ years of experience in event or media production',
            'Proven track record with large-scale regional events',
            'Strong leadership and communication skills',
            'Arabic and English fluency preferred',
        ],
    },
    {
        id: 'creative-director',
        title: 'Creative Director',
        department: 'Creative',
        location: 'Riyadh, Saudi Arabia',
        type: 'Full-time',
        description: 'Drive the creative vision for Pheel\'s projects, from brand activations to immersive experiences.',
        responsibilities: [
            'Develop innovative creative concepts and pitch decks',
            'Lead a team of designers, copywriters, and content creators',
            'Present creative strategies to clients and partners',
            'Stay ahead of industry trends and cultural moments',
        ],
        requirements: [
            '8+ years in a senior creative role',
            'Portfolio showcasing large-scale event or entertainment work',
            'Expertise in visual storytelling and brand strategy',
            'Experience working in the Middle East market is a plus',
        ],
    },
    {
        id: 'event-coordinator',
        title: 'Event Coordinator',
        department: 'Operations',
        location: 'Riyadh, Saudi Arabia',
        type: 'Full-time',
        description: 'Coordinate logistics, vendors, and on-ground operations for high-profile entertainment events.',
        responsibilities: [
            'Manage vendor relationships and procurement',
            'Coordinate setup, breakdown, and on-site operations',
            'Develop parking and emergency contingency plans',
            'Ensure compliance with health and safety standards',
        ],
        requirements: [
            '3+ years in event management or coordination',
            'Excellent organizational and problem-solving skills',
            'Ability to work under pressure in fast-paced environments',
            'Valid driving license and willingness to travel',
        ],
    },
    {
        id: 'cinematographer',
        title: 'Cinematographer / DOP',
        department: 'Film & Content',
        location: 'Riyadh, Saudi Arabia',
        type: 'Full-time',
        description: 'Capture stunning visuals for films, commercials, and event documentation across the region.',
        responsibilities: [
            'Plan and execute cinematography for diverse projects',
            'Collaborate with directors and producers on visual style',
            'Manage camera equipment and technical crew',
            'Deliver high-quality footage meeting international standards',
        ],
        requirements: [
            '5+ years of professional cinematography experience',
            'Proficiency with cinema cameras and lighting setups',
            'Strong portfolio of commercial or narrative work',
            'Ability to travel for on-location shoots',
        ],
    },
    {
        id: 'graphic-designer',
        title: 'Senior Graphic Designer',
        department: 'Design',
        location: 'Riyadh, Saudi Arabia',
        type: 'Full-time',
        description: 'Create impactful visual designs for events, brand activations, and digital platforms.',
        responsibilities: [
            'Design event branding, signage, and promotional materials',
            'Create digital assets for social media and web platforms',
            'Collaborate with the creative team on campaign visuals',
            'Maintain brand consistency across all deliverables',
        ],
        requirements: [
            '5+ years of graphic design experience',
            'Expert proficiency in Adobe Creative Suite',
            'Experience in event or entertainment industry design',
            'Strong typographic and layout skills',
        ],
    },
];

function JobCard({ job }: { job: JobOpening }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/[0.06] rounded-2xl overflow-hidden bg-zinc-900/30 hover:border-[#5EEAD4]/20 transition-all duration-500"
        >
            {/* Header — always visible */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group cursor-pointer"
            >
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] bg-[#5EEAD4]/10 px-3 py-1 rounded-full">
                            {job.department}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#5EEAD4] transition-colors duration-300">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[#5EEAD4]" />
                            {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-[#5EEAD4]" />
                            {job.type}
                        </span>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#5EEAD4]/30 transition-colors"
                >
                    <ChevronDown size={20} className="text-gray-400 group-hover:text-[#5EEAD4] transition-colors" />
                </motion.div>
            </button>

            {/* Expandable details */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-8 border-t border-white/[0.06] pt-6">
                            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
                                {job.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                                        Responsibilities
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {job.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-gray-400 text-[14px]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] mt-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                                        Requirements
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {job.requirements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-gray-400 text-[14px]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] mt-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a
                                href={`mailto:careers@pheelgroup.com?subject=Application: ${job.title}`}
                                className="inline-flex items-center gap-2 bg-[#5EEAD4] text-black font-black uppercase tracking-wider px-8 py-3.5 rounded-full text-sm hover:shadow-[0_0_20px_rgba(94,234,212,0.3)] transition-all hover:scale-105 active:scale-95"
                            >
                                <Briefcase size={16} />
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function CareersOpenings() {
    return (
        <section className="bg-black py-20 md:py-32 px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20"
                >
                    <h2 className="text-left text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6">
                        Open <span className="text-[#5EEAD4]">Positions</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        We&apos;re always looking for talented individuals who share our passion for creating unforgettable experiences. Explore our current openings below.
                    </p>
                </motion.div>

                {/* Job listings */}
                <div className="space-y-4">
                    {JOB_OPENINGS.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                {/* Don't see your role? */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-zinc-900/30 border border-white/[0.06] rounded-2xl p-8 md:p-12">
                        <h3 className="text-white font-bold text-2xl mb-4">
                            Don&apos;t see your role?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                            We&apos;re always open to exceptional talent. Send us your portfolio and let us know how you can contribute to the Pheel story.
                        </p>
                        <a
                            href="mailto:careers@pheelgroup.com?subject=Open Application"
                            className="inline-flex items-center gap-2 border border-[#5EEAD4] text-[#5EEAD4] font-bold uppercase tracking-wider px-8 py-3.5 rounded-full text-sm hover:bg-[#5EEAD4] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(94,234,212,0.3)]"
                        >
                            Send Open Application
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
