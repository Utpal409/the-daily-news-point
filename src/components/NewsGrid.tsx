"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Share2 } from "lucide-react";

interface NewsItem {
    id: number;
    category: string;
    title: string;
    imageColor: string;
    description: string;
    author: string;
    time: string;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        category: "Technology",
        title: "The Rise of Quantum Internet",
        imageColor: "from-gray-700 to-black",
        description: "Researchers achieve stable quantum entanglement over 50km fiber networks.",
        author: "Dr. Sarah Chen",
        time: "4h ago",
    },
    {
        id: 2,
        category: "Environment",
        title: "Ocean Cleanup Project Reaches Milestone",
        imageColor: "from-gray-600 to-gray-900",
        description: "The largest innovative system has removed 50,000 tons of plastic.",
        author: "Mike Ross",
        time: "6h ago",
    },
    {
        id: 3,
        category: "AI",
        title: "Neural Interfaces for Everyone?",
        imageColor: "from-gray-500 to-gray-800",
        description: "New startup promises non-invasive BCI devices by 2026.",
        author: "Elena Fisher",
        time: "1h ago",
    },
    {
        id: 4,
        category: "Space",
        title: "Mars Colony Architecture Revealed",
        imageColor: "from-gray-800 to-black",
        description: "Architects unveil sustainable habitat designs for the Red Planet.",
        author: "John Doe",
        time: "12h ago",
    },
    {
        id: 5,
        category: "Finance",
        title: "Crypto Markets Shift",
        imageColor: "from-gray-400 to-gray-700",
        description: "Decentralized finance sees a massive surge in institutional adoption.",
        author: "Alice Cooper",
        time: "30m ago",
    },
    {
        id: 6,
        category: "Health",
        title: "CRISPR Breakthrough in Aging",
        imageColor: "from-gray-900 to-black",
        description: "Gene editing technique used to reverse cellular aging in mice.",
        author: "Nate Diaz",
        time: "2h ago",
    },
];

export default function NewsGrid() {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                        Latest <span className="italic font-light text-gray-400">Insights</span>
                    </h2>
                    <button className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                        View Archive <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden mb-4 border border-white/5 bg-white/5">
                                {/* Placeholder Gradient Image */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.imageColor} opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-500`}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 flex-1 flex flex-col">
                                <div className="flex items-center justify-between text-xs text-gray-500 font-mono uppercase tracking-wider">
                                    <span className="flex items-center gap-1">By {item.author}</span>
                                    <span>{item.time}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold group-hover:underline decoration-1 underline-offset-4 transition-all leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2 font-sans flex-1">
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-4 pt-4 mt-auto border-t border-white/10">
                                    <button className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider font-bold">
                                        <Share2 size={14} /> Share
                                    </button>
                                    <button className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 text-xs uppercase tracking-wider font-bold">
                                        <MessageSquare size={14} /> Comment
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}