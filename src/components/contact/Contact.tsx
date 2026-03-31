'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 md:py-40 px-6 bg-white text-black relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Left Column: Text & Info */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 from-black to-zinc-500 bg-gradient-to-b bg-clip-text text-transparent"
                        >
                            LET'S CREATE <br /> SOMETHING <br /> ICONIC.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl font-light text-black/60 max-w-md leading-relaxed mb-12"
                        >
                            We are always looking for new challenges and collaborations.
                            Whether you have a specific project in mind or just want to explore possibilities,
                            we would love to hear from you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC5863" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-[#EC5863] mb-1 font-medium">Call Us</p>
                                    <p className="text-xl font-medium tracking-tight">+966 50 000 0000</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC5863" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-[#EC5863] mb-1 font-medium">Email Us</p>
                                    <p className="text-xl font-medium tracking-tight">info@pheelgroup.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EC5863" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-[#EC5863] mb-1 font-medium">Headquarters</p>
                                    <p className="text-xl font-medium tracking-tight leading-snug">
                                        King Fahd Road, Al Mohammadiyah <br />
                                        Riyadh 12363, Saudi Arabia
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: High Contrast Black Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-black p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group"
                    >
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EC5863]/5 blur-[100px] -mr-32 -mt-32 transition-colors duration-700 group-hover:bg-[#EC5863]/10" />

                        <form className="space-y-8 relative z-10">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-[#EC5863] transition-colors placeholder:text-zinc-800 text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-[#EC5863] transition-colors placeholder:text-zinc-800 text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                                <textarea
                                    id="default"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-[#EC5863] transition-colors placeholder:text-zinc-800 text-white resize-none"
                                    defaultValue="Hello, World!"
                                />
                            </div>

                            <button
                                data-cursor="big"
                                className="group relative w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden mt-4 rounded-xl transition-transform active:scale-[0.98]"
                            >
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Send Message</span>
                                <div className="absolute inset-0 bg-[#EC5863] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
