'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isLightMode, setIsLightMode] = useState<boolean | null>(null);

    useEffect(() => {
        const checkLightMode = () => {
            setIsLightMode(document.documentElement.classList.contains('light-mode'));
        };

        checkLightMode();

        const observer = new MutationObserver(checkLightMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.volume = 1.0;
        }
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const themeReady = isLightMode !== null;
    const bgColor = themeReady ? (isLightMode ? '#f8f9fa' : '#000') : undefined;
    const fgColor = themeReady ? (isLightMode ? '#000' : '#fff') : undefined;
    const overlayBg = themeReady ? (isLightMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.6)') : undefined;
    const cardShadow = themeReady ? (isLightMode ? '0 0 0 4px rgba(0, 0, 0, 0.1)' : '0 0 0 4px rgba(255, 255, 255, 0.1)') : undefined;
    const primaryText = themeReady ? (isLightMode ? '#000' : '#fff') : undefined;
    const highlightColor = themeReady ? (isLightMode ? '#22c55e' : '#B4F8C8') : undefined;
    const paragraphColor = themeReady ? (isLightMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)') : undefined;
    const buttonBg = themeReady ? (isLightMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255,255,255,0.05)') : undefined;
    const buttonBorder = themeReady ? (isLightMode ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255,255,255,0.1)') : undefined;
    const buttonHoverBg = themeReady ? (isLightMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)') : undefined;
    const iconColor = themeReady ? (isLightMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)') : undefined;

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-16 overflow-hidden w-full" style={{ backgroundColor: bgColor, color: fgColor }}>
            {/* Background Image with Original Animation */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 w-full"
            >
                <div className="absolute inset-0 z-10 w-full" style={{ backgroundColor: overlayBg }} />
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/assets/Artboard 1.png')` }}
                />
            </motion.div>

            {/* Optional background glow */}
            <div className="absolute top-[40%] right-[10%] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#9EF0CC] opacity-[0.03] rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10 w-full max-w-7xl pt-8 lg:pt-10">
                {/* Left Side: Magic Box with Video */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <div suppressHydrationWarning className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[650px] aspect-[4/3] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl px-4 sm:px-6 relative overflow-hidden" style={{ boxShadow: cardShadow }}>
                        <video
                            ref={videoRef}
                            autoPlay={true}
                            loop={true}
                            muted={isMuted}
                            playsInline={true}
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/assets/pheel_vid.mp4" type="video/mp4" />
                        </video>

                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.4
                            }
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold uppercase leading-[1.1] tracking-wide drop-shadow-lg"
                        style={{ color: primaryText }}
                    >
                        WE DON'T<br />
                        JUST CREATE.<br />
                        WE MAKE<br />
                        YOU <span style={{ color: highlightColor }}>PHEEL</span> IT.
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
                        }}
                        className="text-sm sm:text-base md:text-lg font-light max-w-lg leading-relaxed mt-2 drop-shadow-md"
                        style={{ color: paragraphColor, fontFamily: 'var(--font-noto-kufi-arabic), sans-serif' }}
                    >
                        A Saudi-Born Creative Powerhouse Delivering World-Class Production And Transformative Live Experiences Across The Region And Beyond.
                    </motion.p>
                </motion.div>
            </div>

            {/* Mute Toggle Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={toggleMute}
                className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-30 p-3 sm:p-4 rounded-full backdrop-blur-sm transition-colors group"
                style={{
                    backgroundColor: buttonBg,
                    border: buttonBorder,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverBg || '';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = buttonBg || '';
                }}
            >
                {isMuted ? (
                    <VolumeX size={20} className="sm:w-6 sm:h-6" style={{ color: iconColor }} />
                ) : (
                    <Volume2 size={20} className="sm:w-6 sm:h-6" style={{ color: isLightMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)' }} />
                )}
            </motion.button>
        </section>
    );
}
