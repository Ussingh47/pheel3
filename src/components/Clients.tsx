'use client';

import Image from 'next/image';

const CLIENT_LOGOS = [
    { src: '/assets/c1.png', alt: 'Client 1' },
    { src: '/assets/c2.png', alt: 'Client 2' },
    { src: '/assets/c3.png', alt: 'Client 3' },
    { src: '/assets/c4.png', alt: 'Client 4' },
    { src: '/assets/c5.png', alt: 'Client 5' },
    { src: '/assets/c6.png', alt: 'Client 6' },
];

export default function Clients() {
    // Double the logos for seamless looping
    const allLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section className="relative bg-white py-8 md:py-12 overflow-x-clip flex items-center">

            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Scrolling track */}
                <div className="marquee-track">
                    {allLogos.map((logo, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 mx-10 md:mx-14 flex items-center justify-center"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={140}
                                height={60}
                                className="h-12 md:h-16 w-auto object-contain brightness-0 hover:brightness-100 hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
