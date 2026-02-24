import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-pheel-black)] text-[var(--color-pheel-light-gray)] py-20 px-6 border-t border-[var(--color-pheel-light-gray)]/10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="flex flex-col gap-6">
                    <Link href="/" className="block relative w-32 h-10">
                        <Image
                            src="/assets/logo-white.png"
                            alt="Pheel Entertainment"
                            fill
                            className="object-contain object-left"
                        />
                    </Link>
                    <p className="text-xl md:text-2xl font-light text-[var(--color-pheel-light-gray)]/60 max-w-md">
                        Storytellers, creators, and experience builders.
                    </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">PHEEL THE MOMENT.</h2>
                    <div className="flex gap-6 mt-4">
                        <Link href="#" className="text-sm uppercase tracking-widest hover:text-[var(--color-pheel-turquoise)] transition-colors">Instagram</Link>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:text-[var(--color-pheel-turquoise)] transition-colors">LinkedIn</Link>
                        <Link href="#" className="text-sm uppercase tracking-widest hover:text-[var(--color-pheel-turquoise)] transition-colors">Twitter</Link>
                    </div>
                    <p className="text-xs text-[var(--color-pheel-light-gray)]/40 mt-8">© {new Date().getFullYear()} Pheel Entertainment. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
