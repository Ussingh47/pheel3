'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="bg-black py-20 px-6 font-outfit">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <h2 className="inline-block text-3xl md:text-4xl font-black text-black bg-[#5EEAD4] px-4 py-2 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Every powerful story starts with a simple message. 
                                Tell us what you're building — we'll help you bring it to life.
                            </p>
                        </div>

                        <form className="space-y-8">
                            <div className="space-y-4">
                                <label className="block text-white font-bold text-xl ml-1">Name :</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900/50 border-none rounded-sm px-6 py-4 text-white focus:ring-2 focus:ring-[#5EEAD4] outline-none transition-all"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="block text-white font-bold text-xl ml-1">Email Address :</label>
                                <input
                                    type="email"
                                    className="w-full bg-zinc-900/50 border-none rounded-sm px-6 py-4 text-white focus:ring-2 focus:ring-[#5EEAD4] outline-none transition-all"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="block text-white font-bold text-xl ml-1">Project Title:</label>
                                <input
                                    type="text"
                                    className="w-full bg-zinc-900/50 border-none rounded-sm px-6 py-4 text-white focus:ring-2 focus:ring-[#5EEAD4] outline-none transition-all"
                                    placeholder=""
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="block text-white font-bold text-xl ml-1">Tell Us About Your Vision :</label>
                                <textarea
                                    className="w-full bg-zinc-900/50 border-none rounded-sm px-6 py-4 text-white focus:ring-2 focus:ring-[#5EEAD4] outline-none transition-all resize-none h-40"
                                    placeholder=""
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#5EEAD4] text-black font-black uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#4dd0ba] transition-colors active:scale-95"
                                data-cursor="big"
                            >
                                Start the Conversation
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info & Text */}
                    <div className="flex flex-col justify-center space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                                We believe great collaborations <span className="text-[#5EEAD4] font-bold">-Start with clarity and trust.</span> Reach out the way you're most comfortable.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col items-center text-center space-y-4 group"
                            >
                                <div className="w-16 h-16 bg-[#5EEAD4] rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <Phone className="text-black" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-[#5EEAD4] font-bold text-xl mb-1 uppercase tracking-wider">Phone Number</h3>
                                    <p className="text-white text-lg">+91 XXXXXXXXXX</p>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-center text-center space-y-4 group"
                            >
                                <div className="w-16 h-16 bg-[#5EEAD4] rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <Mail className="text-black" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-[#5EEAD4] font-bold text-xl mb-1 uppercase tracking-wider">Email Address</h3>
                                    <p className="text-white text-lg">info@pheelgroup.com</p>
                                </div>
                            </motion.div>

                            {/* Whatsapp */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-center text-center space-y-4 group"
                            >
                                <div className="w-16 h-16 bg-[#5EEAD4] rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <MessageSquare className="text-black" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-[#5EEAD4] font-bold text-xl mb-1 uppercase tracking-wider">Whatsapp</h3>
                                    <p className="text-white text-lg">+91 XXXXXXXXXX</p>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col items-center text-center space-y-4 group"
                            >
                                <div className="w-16 h-16 bg-[#5EEAD4] rounded-sm flex items-center justify-center transition-transform group-hover:rotate-12">
                                    <MapPin className="text-black" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-[#5EEAD4] font-bold text-xl mb-1 uppercase tracking-wider">Location</h3>
                                    <p className="text-white text-lg">Riyadh, Saudi Arabia</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
