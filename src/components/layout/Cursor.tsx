'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface HoverSize {
    width: number;
    height: number;
}

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [hoverSize, setHoverSize] = useState<HoverSize>({ width: 18, height: 18 });
    const [borderRadius, setBorderRadius] = useState('999px');

    const getInteractiveElement = useCallback((target: HTMLElement): HTMLElement | null => {
        if (target.tagName === 'A' || target.tagName === 'BUTTON') return target;
        return target.closest('a') || target.closest('button');
    }, []);

    useEffect(() => {
        const applyHoverState = (nextIsHovering: boolean, nextSize: HoverSize, nextIsHidden: boolean = false, nextBorderRadius: string = '999px') => {
            setIsHovering((prev) => (prev === nextIsHovering ? prev : nextIsHovering));
            setIsHidden(nextIsHidden);
            setHoverSize((prev) => {
                if (prev.width === nextSize.width && prev.height === nextSize.height) {
                    return prev;
                }
                return nextSize;
            });
            setBorderRadius(nextBorderRadius);
        };

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = getInteractiveElement(target);
            const forcedBig = !!target.closest('[data-cursor="big"]');
            const forcedHide = !!target.closest('[data-cursor="hide"]');
            const forcedOval = !!target.closest('[data-cursor="oval"]');

            if (forcedHide) {
                applyHoverState(false, { width: 0, height: 0 }, true);
                return;
            }

            if (forcedOval) {
                applyHoverState(true, { width: 24, height: 24 }, false, '50%');
                return;
            }

            if (interactive && !forcedBig) {
                const rect = interactive.getBoundingClientRect();
                const isNavLink = !!interactive.closest('.nav-links');

                if (isNavLink) {
                    applyHoverState(true, {
                        width: rect.width + 24,
                        height: rect.height + 16,
                    });
                } else {
                    const size = Math.max(rect.width, rect.height) + 20;
                    applyHoverState(true, { width: size, height: size });
                }
            } else {
                // Check for text elements & form fields (headings, paragraphs, inputs, etc.)
                const isTextOrInput = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'INPUT', 'TEXTAREA', 'LABEL', 'LI'].includes(target.tagName)
                    || !!target.closest('h1,h2,h3,h4,h5,h6,p,input,textarea,label,li')
                    || forcedBig;

                if (isTextOrInput) {
                    applyHoverState(false, { width: 35, height: 35 });
                } else {
                    applyHoverState(false, { width: 18, height: 18 });
                }
            }
        };

        const handleMouseOut = () => {
            applyHoverState(false, { width: 18, height: 18 });
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY, getInteractiveElement]);

    return (
        <motion.div
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                mixBlendMode: 'difference',
            }}
            animate={{
                width: hoverSize.width,
                height: hoverSize.height,
                backgroundColor: '#fff',
                borderRadius: borderRadius,
                opacity: isHidden ? 0 : (isHovering ? 0.85 : 1),
                scale: isHidden ? 0 : 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 0.5,
            }}
            className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        />
    );
}
