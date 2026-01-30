"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-black text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] invert" />
            </div>

            <div className="container mx-auto px-4 z-10 relative w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 border-b border-white mb-6">
                            <Zap size={14} className="fill-white text-white" />
                            <span className="uppercase tracking-widest text-xs font-bold">Latest Headline</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-black leading-tight mb-6 tracking-tight">
                            The Age of <br />
                            <span className="text-gray-500 italic">Silicon Minds</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed font-serif">
                            Explore the breakthroughs shaping our world. From quantum computing to interstellar travel, we cover the stories that matter.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
                                Read Full Story <ArrowRight size={18} />
                            </button>
                            <button className="px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
                                View All Categories
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer border border-white/10 bg-white/5">
                            {/* Grayscale Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black z-0 group-hover:scale-105 transition-transform duration-700" />
                            
                            {/* Overlay Content within Card */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3 font-mono">
                                    <span className="px-2 py-1 bg-white text-black rounded-none text-xs font-bold uppercase tracking-wider">Live</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> 2 min ago</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                                    SpaceX Launches New Generation Satellites for Global Coverage
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}