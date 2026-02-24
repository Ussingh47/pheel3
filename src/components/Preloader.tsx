'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        // Reduced total duration to ~1.8s
        const timer = setTimeout(() => {
            onComplete();
        }, 1800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: '-100%',
                transition: {
                    duration: 1.0,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.2
                }
            }}
            className="fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Top Loading Bar - Vanishes constantly on Exit */}
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-1 bg-white z-50"
                />

                {/* Bottom Loading Bar - Vanishes constantly on Exit */}
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 h-1 bg-white z-50"
                />

                {/* Center Logo - Stays fixed relative to container during exit, effectively sliding up with it */}
                <div className="relative w-64 h-20 md:w-96 md:h-32 overflow-hidden">
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{
                            // No exit animation needed if we want it to move up WITH the container
                            // It will just stick to the black background as it slides up
                            opacity: 1,
                            transition: { duration: 0.2 }
                        }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/assets/logo-white.png"
                            alt="Pheel Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
