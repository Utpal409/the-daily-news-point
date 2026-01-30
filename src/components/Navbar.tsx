"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "World", href: "/category/world" },
    { name: "Tech", href: "/category/tech" },
    { name: "Business", href: "/category/business" },
    { name: "Science", href: "/category/science" },
    { name: "Viral", href: "/category/viral" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Masthead Section (Not Sticky) */}
            <header className="relative w-full pt-12 pb-8 bg-background border-b border-white/5">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                    <Link href="/" className="group flex flex-col md:flex-row items-baseline gap-2 md:gap-4 mb-4 text-center">
                        <span className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-white drop-shadow-2xl">
                            TheDailyNews
                        </span>
                        <span className="text-3xl md:text-5xl font-sans font-light text-gray-400 group-hover:text-white transition-colors">
                            Point
                        </span>
                    </Link>
                    <div className="flex items-center gap-4 text-sm md:text-base font-mono text-gray-400 uppercase tracking-widest">
                        <span className="hidden md:inline-block w-8 h-[1px] bg-gray-700"></span>
                        {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        <span className="hidden md:inline-block w-8 h-[1px] bg-gray-700"></span>
                    </div>
                </div>
            </header>

            {/* Sticky Navigation Bar */}
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
                    isScrolled ? "py-3 bg-white/95 backdrop-blur-md shadow-lg" : "py-4 bg-white"
                }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Mobile Logo (Visible only when scrolled or on mobile) */}
                    <Link href="/" className={`md:hidden ${isScrolled ? 'opacity-100' : 'opacity-0'} transition-opacity font-serif font-bold text-lg text-black`}>
                        TDN Point
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center justify-center gap-10 mx-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-wider text-black hover:text-gray-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4 absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
                        <button className="p-2 text-black hover:bg-black/5 rounded-full transition-all">
                            <Search size={18} />
                        </button>
                        <button className="hidden md:block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold hover:bg-gray-800 transition-all">
                            SUBSCRIBE
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-black absolute left-4 top-1/2 -translate-y-1/2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-2xl font-serif font-medium text-white block py-2 border-b border-white/10"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <button className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-widest mt-4">
                            Subscribe Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}