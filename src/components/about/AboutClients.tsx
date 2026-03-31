'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CLIENTS = [
    { name: 'KAUST', src: '/assets/Clients/KAUST 1.png' },
    { name: 'DIRIYAH SEASON', src: '/assets/Clients/Diriyah Season 1.png' },
    { name: 'KAEC', src: '/assets/Clients/KAEC 1.png' },
    { name: 'DAIHATSU', src: '/assets/Clients/Daihatsu 1.png' },
    { name: 'LEXUS', src: '/assets/Clients/Lexus 1.png' },
    { name: 'MARS', src: '/assets/Clients/Mars 1.png' },
    { name: 'MINISTRY OF CULTURE', src: '/assets/Clients/Ministry of Culture 1.png' },
    { name: 'NESMA', src: '/assets/Clients/Nesma 1.png' },
    { name: 'P&G', src: '/assets/Clients/P&G 1.png' },
    { name: 'PEUGEOT', src: '/assets/Clients/Peugeot 1.png' },
    { name: 'PRINGLES', src: '/assets/Clients/Pringles 1.png' },
    { name: 'RIYADH SEASON', src: '/assets/Clients/Riyadh Season 1.png' },
    { name: 'SAHARA CITY', src: '/assets/Clients/Sahara City 1.png' },
    { name: 'SWATCH', src: '/assets/Clients/Swatch 1.png' },
    { name: 'TOYOTA', src: '/assets/Clients/Toyota 1.png' },
    { name: 'UNILEVER', src: '/assets/Clients/Unilever 1.png' },
    { name: 'ITFC', src: '/assets/Clients/itfc 1.png' },
    { name: 'RED SEA FILM FESTIVAL', src: '/assets/Clients/red sea film festival 1.png' },
];

export default function AboutClients() {
    return (
        <section className="py-24 px-4 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black mb-16 tracking-tight uppercase text-left"
                >
                    OUR CLIENTS
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center justify-items-center">
                    {CLIENTS.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="w-full max-w-[140px] aspect-[2/1] relative flex items-center justify-center hover:scale-110 transition-all duration-300"
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
