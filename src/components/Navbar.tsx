'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isDark, setIsDark] = useState(true); // true = white text, false = dark text
    const navRef = useRef<HTMLElement>(null);

    const detectBackground = useCallback(() => {
        if (!navRef.current) return;
        const navRect = navRef.current.getBoundingClientRect();
        const checkX = navRect.left + navRect.width / 2;
        const checkY = navRect.bottom + 2; // just below the navbar

        // Temporarily hide navbar to sample what's behind it
        navRef.current.style.visibility = 'hidden';
        const elementBehind = document.elementFromPoint(checkX, checkY);
        navRef.current.style.visibility = '';

        if (!elementBehind) return;

        // Walk up the DOM tree to find the first element with a real background color
        let el: Element | null = elementBehind;
        let bgColor = '';
        while (el && el !== document.documentElement) {
            const computed = window.getComputedStyle(el);
            const bg = computed.backgroundColor;
            if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
                bgColor = bg;
                break;
            }
            el = el.parentElement;
        }

        if (!bgColor) {
            setIsDark((prev) => (prev ? prev : true));
            return;
        }

        // Parse rgb values
        const match = bgColor.match(/\d+/g);
        if (match) {
            const [r, g, b] = match.map(Number);
            // Calculate perceived luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            const nextIsDark = luminance < 0.5;
            setIsDark((prev) => (prev === nextIsDark ? prev : nextIsDark)); // dark bg = white text, light bg = dark text
        }
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let detectRafId = 0;

        const queueBackgroundDetection = () => {
            if (detectRafId !== 0) return;
            detectRafId = window.requestAnimationFrame(() => {
                detectBackground();
                detectRafId = 0;
            });
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const nextScrolled = currentScrollY > 50;
            setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

            const nextVisible = !(currentScrollY > lastScrollY && currentScrollY > 100);
            setVisible((prev) => (prev === nextVisible ? prev : nextVisible));

            lastScrollY = currentScrollY;
            queueBackgroundDetection();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', queueBackgroundDetection, { passive: true });

        // Initial detection
        queueBackgroundDetection();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', queueBackgroundDetection);
            if (detectRafId !== 0) {
                window.cancelAnimationFrame(detectRafId);
            }
        };
    }, [detectBackground]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className={`navbar ${scrolled ? 'scrolled' : ''} ${isDark ? 'navbar-dark' : 'navbar-light'}`}
                style={{
                    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease',
                }}
            >
                <a href="#home" className="nav-logo-link">
                    <Image
                        src={isDark ? '/assets/PHEEL navbar Logo White.png' : '/assets/PHEEL Navbar black Logo.png'}
                        alt="Pheel Logo"
                        width={120}
                        height={40}
                        className="nav-logo"
                        priority
                    />
                </a>

                <ul className="nav-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <a href="/Company_Profile.docx" download className="nav-cta nav-cta-desktop">
                        Company Portfolio
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                    </a>
                </div>

                <button
                    type="button"
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>


        </>
    );
}
