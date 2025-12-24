"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#innovation", label: "Innovation" },
    { href: "#services", label: "Services" },
    { href: "#track-record", label: "Track Record" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight"
                    >
                        <span className="text-[var(--cyan-accent)]">Plynk</span>
                        <span className="text-white">Data</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--cyan-accent)] text-[var(--navy)] hover:shadow-[0_0_30px_var(--cyan-glow)] transition-all duration-300"
                    >
                        Partner with Us
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-[var(--text-muted)] hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[var(--cyan-accent)] text-[var(--navy)] mt-2"
                        >
                            Partner with Us
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
