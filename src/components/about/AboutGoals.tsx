'use client';

import { motion } from 'framer-motion';

const GOALS = [
    { 
        title: 'MARKET FOCUS',
        description: 'Identifying Market Opportunities And Bridging Creative Innovation With Strong Business Insight To Serve Evolving Entertainment And Media Markets.'
    },
    { 
        title: 'COMPREHENSIVE SERVICES',
        description: 'Delivering End-To-End Creative Solutions, Including Film Production, Event Design, And Full Project Management.'
    },
    { 
        title: 'CLIENT SATISFACTION',
        description: "Turning Our Clients' Visions Into Reality While Maintaining International Standards Of Creativity, Quality, And Execution."
    },
    { 
        title: 'INTERNATIONAL EXPANSION',
        description: 'Expanding Our Creative Footprint Across Saudi Arabia And The Wider EMEA Region Through Global Partnerships, Advanced Production Infrastructure, And Cutting-Edge Virtual Production Technologies.'
    },
];

export default function AboutGoals() {
    return (
        <section className="py-24 px-4 bg-black">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-left"
                >
                    OUR GOALS
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg text-gray-300 max-w-3xl mb-16 text-left leading-relaxed"
                >
                    At Pheel Entertainment, Our Growth Is Guided By Clear Strategic Ambitions That Shape The 
                    Way We Create And Collaborate.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GOALS.map((goal, index) => (
                        <motion.div
                            key={goal.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="goal-flip-card h-28 md:h-32 cursor-default"
                        >
                            <div className="goal-flip-card-inner">
                                {/* Front */}
                                <div className="goal-flip-card-front bg-[#FFFD6A] flex items-center justify-center p-6 rounded-lg">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-black tracking-tight text-center leading-tight uppercase">
                                        {goal.title}
                                    </h3>
                                </div>
                                {/* Back */}
                                <div className="goal-flip-card-back bg-[#FFFD6A] flex items-center justify-center p-6 rounded-lg">
                                    <p className="text-sm md:text-base text-black text-center leading-snug font-medium">
                                        {goal.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
