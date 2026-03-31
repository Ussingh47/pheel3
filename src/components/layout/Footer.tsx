'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useCallback, useState, useEffect } from 'react';

function PheelLetter({ letter, isLightMode }: { letter: string, isLightMode: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const strokeColor = isLightMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.08)';
    const fillColor = isLightMode ? '#000' : '#fff';

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setIsHovered(true);
        controls.start({
            clipPath: `circle(150% at ${x}% ${y}%)`,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        });
    }, [controls]);

    const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setIsHovered(false);
        controls.start({
            clipPath: `circle(0% at ${x}% ${y}%)`,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        });
    }, [controls]);

    return (
        <div
            className="relative"
            style={{
                height: 'clamp(70px, 18vw, 250px)',
                overflow: isHovered ? 'visible' : 'hidden',
                zIndex: isHovered ? 10 : 1,
            }}
        >
            <motion.div
                ref={containerRef}
                className="relative cursor-pointer select-none"
                data-cursor="hide"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={{ y: isHovered ? -60 : 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <span
                    className="text-[28vw] sm:text-[24vw] md:text-[20vw] lg:text-[22vw] font-black leading-[0.85] tracking-[0.15em] block text-transparent uppercase"
                    style={{
                        fontFamily: 'var(--font-outfit)',
                        WebkitTextStroke: `2px ${strokeColor}`,
                    }}
                >
                    {letter}
                </span>
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={controls}
                >
                    <span
                        className="text-[28vw] sm:text-[24vw] md:text-[20vw] lg:text-[22vw] font-black leading-[0.85] tracking-[0.15em] block uppercase"
                        style={{ fontFamily: 'var(--font-outfit)', color: fillColor }}
                    >
                        {letter}
                    </span>
                </motion.div>
            </motion.div>
        </div>
    );
}

const QUICK_LINKS = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Team', href: '/about' },
    { label: 'Our Portfolio', href: '#work' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
];

const ABOUT_LINKS = [
    { label: 'Strategic Alliance', href: '#about' },
    { label: 'Goals', href: '#about' },
    { label: 'Experience', href: '#services' },
    { label: 'Playgrounds', href: '#services' },
];

const CONTACT_LINKS = [
    { label: 'info@pheelgroup.com', href: 'mailto:info@pheelgroup.com' },
    { label: '+966 50 000 0000', href: 'tel:+966500000000' },
    { label: 'Riyadh, Saudi Arabia', href: '#contact' },
];

const SOCIAL_LINKS = [
    {
        label: 'Instagram',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        )
    },
    {
        label: 'Facebook',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        )
    },
    {
        label: 'LinkedIn',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        )
    },
    {
        label: 'Twitter',
        href: '#',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        )
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const socialItemHover = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5 }
};

export default function Footer() {
    const [isLightMode, setIsLightMode] = useState(false);

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

    return (
        <footer id="contact" className="relative w-full bg-black pb-0">
            <div className="relative z-10 pt-16 pb-4 px-4 sm:px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-zinc-900/40 border border-white/[0.06] rounded-[2rem] p-8 md:p-10 lg:p-14 relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-10"
                        >
                            <motion.div variants={fadeInUp} className="lg:col-span-5">
                                <Link href="/" className="block relative w-78 h-34 mb-6 footer-logo">
                                    <Image
                                        src="/assets/logo-full-w.png"
                                        alt="Pheel Entertainment"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </Link>
                                <p className="text-gray-400/80 text-[13px] leading-[1.7] mb-7 max-w-[320px]">
                                    We are a premier entertainment company dedicated to creating unforgettable experiences through innovative events and creative solutions.
                                </p>
                                <div className="flex items-center gap-2">
                                    {SOCIAL_LINKS.map((social) => (
                                        <motion.div
                                            key={social.label}
                                            variants={socialItemHover}
                                            initial="rest"
                                            whileHover="hover"
                                            animate="rest"
                                        >
                                            <Link
                                                href={social.href}
                                                onClick={(e) => {
                                                    if (social.href === '#') {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10"
                            >
                                <div>
                                    <h3 className="text-[13px] font-semibold mb-5 text-white/90 tracking-wide uppercase">
                                        Quick Links
                                    </h3>
                                    <ul className="space-y-3">
                                        {QUICK_LINKS.map((link, index) => (
                                            <li key={link.label}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300"
                                                        data-cursor="oval"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </motion.div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[13px] font-semibold mb-5 text-white/90 tracking-wide uppercase">
                                        About Us
                                    </h3>
                                    <ul className="space-y-3">
                                        {ABOUT_LINKS.map((link, index) => (
                                            <li key={link.label}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300"
                                                        data-cursor="oval"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </motion.div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-[13px] font-semibold mb-5 text-white/90 tracking-wide uppercase">
                                        Contact Us
                                    </h3>
                                    <ul className="space-y-3 mb-5">
                                        {CONTACT_LINKS.map((link, index) => (
                                            <li key={link.label}>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="text-[13px] text-gray-400/80 hover:text-white transition-colors duration-300"
                                                        data-cursor="oval"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </motion.div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="w-full h-28 rounded-xl overflow-hidden bg-zinc-800 relative shadow-md grayscale invert-[0.1] contrast-[1.2] border border-white/5" data-cursor="hide">
                                        <iframe
                                            title="Google Map showing Riyadh, Saudi Arabia office"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7437064374!2d46.7!3d24.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzAwLjAiTiA0NsKwNDInMDAuMCJF!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4"
                        >
                            <p className="text-[13px] text-gray-500/80 font-light">
                                © 2025 Pheel Entertainment. All Rights Reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <Link href="#" className="text-[13px] text-gray-500/80 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-white/40">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="text-[13px] text-gray-500/80 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-white/40">
                                    Terms of Service
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative z-50 mt-2">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex justify-center items-end"
                >
                    <div className="flex gap-0 sm:gap-1">
                        {['P', 'H', 'E', 'E', 'L'].map((letter, index) => (
                            <PheelLetter key={index} letter={letter} isLightMode={isLightMode} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
