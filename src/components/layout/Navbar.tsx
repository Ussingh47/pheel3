'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Rocket } from 'lucide-react';

const NAV_ITEMS = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICES', href: '/#services' },
    { label: 'CAREERS', href: '/careers' },
    { label: 'CONTACT US', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isDark, setIsDark] = useState(true);
    const [isLightMode, setIsLightMode] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const detectBackground = useCallback(() => {
        if (!navRef.current) return;
        
        // If we're at the very bottom of the page, we know the footer is dark
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (isAtBottom) {
            setIsDark(true);
            return;
        }

        const navRect = navRef.current.getBoundingClientRect();
        const checkX = navRect.left + navRect.width / 2;
        const checkY = navRect.bottom + 10; // Check a bit lower to avoid the navbar's own shadow/border

        navRef.current.style.visibility = 'hidden';
        const elementBehind = document.elementFromPoint(checkX, checkY);
        navRef.current.style.visibility = '';

        if (!elementBehind) {
            setIsDark(true);
            return;
        }

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
            setIsDark(true);
            return;
        }

        const match = bgColor.match(/\d+/g);
        if (match) {
            const [r, g, b] = match.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            const nextIsDark = luminance < 0.5;
            setIsDark(nextIsDark); // Update directly
        } else {
            setIsDark(true);
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
            const scrollDelta = currentScrollY - lastScrollY;

            // Only toggle visibility if we've scrolled more than 5px to avoid jitter/accidental surfacing
            if (Math.abs(scrollDelta) > 5) {
                // Show if we're at the very top, or if we're scrolling UP
                // Hide only if we're scrolling DOWN and past the 100px threshold
                const nextVisible = currentScrollY < 50 || scrollDelta < 0 || !(currentScrollY > 100);
                setVisible(nextVisible);
                lastScrollY = currentScrollY;
            }

            const nextScrolled = currentScrollY > 50;
            setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

            queueBackgroundDetection();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', queueBackgroundDetection, { passive: true });

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

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    useEffect(() => {
        if (isLightMode) {
            document.documentElement.classList.add('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
        }
    }, [isLightMode]);

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
                <div className="nav-left">
                    <a href="/" className="nav-logo-link">
                        <Image
                            src={isLightMode || !isDark ? '/assets/PHEEL Navbar black Logo.png' : '/assets/PHEEL navbar Logo White.png'}
                            alt="Pheel Logo"
                            width={120}
                            height={40}
                            className="nav-logo"
                            priority
                        />
                    </a>
                </div>

                <ul className="nav-links nav-center-links">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={isActive ? 'active' : ''}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="nav-actions nav-right-actions">
                    <a
                        href="/assets/Company Profile.docx"
                        download
                        className="inline-flex items-center gap-2 border border-current px-6 py-2.5 rounded-full text-[12px] uppercase tracking-wider font-bold transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        <span>COMPANY PROFILE</span>
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

            <div
                className={`mobile-menu ${menuOpen ? 'open' : ''} ${isLightMode ? 'mobile-menu-light' : 'mobile-menu-dark'}`}
            >
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="mobile-menu-link"
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="/assets/Company Profile.docx"
                    download
                    className="mobile-cta-button"
                    onClick={() => setMenuOpen(false)}
                >
                    <span>COMPANY PROFILE</span>
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
        </>
    );
}
