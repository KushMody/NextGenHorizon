import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Works = () => {
    const { portfolio } = content;

    return (
        <section id="works" className="h-screen w-full bg-white flex flex-col overflow-hidden relative">
            {/* Header Area */}
            <div className="pt-24 pb-8 px-12 border-b border-zinc-100 flex items-center justify-between z-20 bg-white">
                <div className="flex items-center space-x-6">
                    <div className="h-px w-20 bg-brand" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 tracking-tighter uppercase">{portfolio.sectionTitle}</h2>
                </div>
                <div className="text-[11px] font-bold tracking-[0.5em] uppercase text-brand">
                    {portfolio.sectionSubtitle}
                </div>
            </div>

            {/* Grid Area - Filling the viewport */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 h-full overflow-hidden">
                {portfolio.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group overflow-hidden border-r border-b border-zinc-100 flex flex-col justify-end p-12 h-full bg-white hover:bg-zinc-50 transition-colors duration-700"
                    >
                        {/* Elegant Visual Accent */}
                        <div className="absolute top-12 left-12 text-6xl font-serif italic text-zinc-50 group-hover:text-zinc-100 transition-colors duration-700 pointer-events-none select-none">
                            0{index + 1}
                        </div>

                        {/* Background Visual (Clean & Professional) */}
                        <div 
                            className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105 opacity-[0.03] group-hover:opacity-[0.08]"
                            style={{ background: project.image }}
                        />

                        {/* Content */}
                        <div className="relative z-20 space-y-6 transform group-hover:-translate-y-4 transition-transform duration-700">
                            <div className="flex items-center justify-between">
                                <span className="text-brand font-serif italic text-xl">Project 0{index + 1}</span>
                                <span className="text-[11px] font-bold text-zinc-300 tracking-[0.3em] uppercase">{project.year}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 leading-[0.8] tracking-tighter">
                                {project.title}
                            </h3>
                            <div className="h-1.5 w-16 bg-zinc-100 group-hover:w-full group-hover:bg-brand transition-all duration-1000" />
                            <div className="flex items-center justify-between pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <p className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                                    Strategic Analysis
                                </p>
                                <div className="text-brand font-serif italic">Case Study →</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Works;
