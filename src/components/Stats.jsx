import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Stats = () => {
    const { features, hero } = content;

    return (
        <section id="stats" className="h-screen w-full bg-white flex flex-col overflow-hidden relative">
            {/* Background Branding Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 border-l border-zinc-100" />
                <div className="absolute bottom-20 left-12 transform -rotate-90 origin-left text-[12vh] font-serif font-bold text-zinc-100/50 uppercase whitespace-nowrap tracking-tighter">
                    IMPACT & EXCELLENCE
                </div>
            </div>

            {/* Header Area */}
            <div className="pt-24 pb-8 px-12 border-b border-zinc-100 flex items-center justify-between z-20 relative">
                <div className="flex items-center space-x-6">
                    <div className="h-px w-16 bg-brand" />
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 tracking-tight uppercase">Milestones</h2>
                </div>
            </div>

            {/* High Density Grid Area */}
            <div className="flex-grow flex flex-col lg:flex-row h-full relative z-10">
                {/* Left Side: Major Stats */}
                <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center space-y-16">
                    {hero.stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-end space-x-8 group"
                        >
                            <span className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-zinc-900 leading-none group-hover:text-brand transition-colors duration-700">
                                {stat.value}
                            </span>
                            <div className="pb-4 space-y-2">
                                <div className="h-1 w-12 bg-brand" />
                                <p className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-zinc-400">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Side: Process / Features Grid */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 bg-white lg:bg-transparent">
                    {features.items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="p-12 lg:p-16 border-l border-b border-zinc-100 hover:bg-white transition-colors duration-500 group flex flex-col justify-center"
                        >
                            <div className="mb-8 w-12 h-12 bg-zinc-900 text-brand flex items-center justify-center font-serif italic text-xl group-hover:bg-brand group-hover:text-white transition-all duration-500 rounded-sm">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-6 group-hover:text-brand">
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed tracking-wide">
                                {item.description}
                            </p>
                            <div className="mt-8 h-px w-8 bg-zinc-100 group-hover:w-full group-hover:bg-brand/20 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
