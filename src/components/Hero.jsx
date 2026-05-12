import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import content from '../data/content.json';

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Text moves down slower
    const y2 = useTransform(scrollY, [0, 500], [0, -100]); // Background moves up slightly
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out on scroll

    const { hero } = content;

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            ref={ref}
            className="h-screen w-full flex flex-col items-center justify-between bg-white relative overflow-hidden bg-mesh px-6 text-zinc-900 pt-24 sm:pt-32 pb-8 sm:pb-12"
        >
            {/* Elegant Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-brand/3 blur-[100px] rounded-full" />
                <div className="absolute top-[20%] left-[10%] w-[1px] h-[40%] bg-gradient-to-b from-brand/0 via-brand/20 to-brand/0" />
            </div>

            <motion.div
                style={{ y: y1, opacity }}
                className="z-20 text-center relative max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-flex items-center space-x-3 px-4 py-1.5 mb-6 border border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm"
                >
                    <div className="w-6 h-[1px] bg-brand" />
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-500">{hero.badge}</span>
                    <div className="w-6 h-[1px] bg-brand" />
                </motion.div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter mb-4 sm:mb-6 text-zinc-900 leading-[0.95] flex flex-col items-center">
                    <span className="overflow-hidden inline-block py-1">
                        <motion.span
                            initial={{ y: "110%" }} animate={{ y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block px-2"
                        >
                            {hero.title.line1}
                        </motion.span>
                    </span>
                    <span className="overflow-hidden inline-block text-brand italic py-1">
                        <motion.span
                            initial={{ y: "110%" }} animate={{ y: 0 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block"
                        >
                            {hero.title.line2}
                        </motion.span>
                    </span>
                    <span className="overflow-hidden inline-block py-1">
                        <motion.span
                            initial={{ y: "110%" }} animate={{ y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block px-2"
                        >
                            {hero.title.line3}
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto mb-10 font-light leading-relaxed tracking-wide px-8 opacity-80"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16 w-full px-2 sm:px-0"
                >
                    <div onClick={(e) => scrollToSection(e, hero.buttons.primary.link)} className="w-full sm:w-auto">
                        <MagneticButton className="px-10 py-4 bg-zinc-900 text-white font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-brand shadow-2xl border border-zinc-900 text-[10px]">
                            {hero.buttons.primary.label}
                        </MagneticButton>
                    </div>
                    <div onClick={(e) => scrollToSection(e, hero.buttons.secondary.link)} className="w-full sm:w-auto">
                        <MagneticButton className="px-10 py-4 bg-transparent border border-zinc-200 text-zinc-900 font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:border-brand hover:text-brand text-[10px]">
                            {hero.buttons.secondary.label}
                        </MagneticButton>
                    </div>
                </motion.div>
            </motion.div>

            {/* Premium Stats Dashboard - Fills the viewport width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-full max-w-7xl mx-auto hidden sm:grid grid-cols-3 border-t border-zinc-100 pt-8 z-20"
            >
                {hero.stats.map((stat, i) => (
                    <div key={i} className="text-center group border-r last:border-0 border-zinc-50 px-4">
                        <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-zinc-900 group-hover:text-brand transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mt-2">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Hero;
