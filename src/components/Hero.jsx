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

    const scrollToSection = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            ref={ref}
            className="h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden"
        >
            {/* Background Pattern - Parallax Layer */}
            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            />

            {/* Animated Gold Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent origin-left"
            />

            <motion.div
                style={{ y: y1, opacity }}
                className="z-20 text-center px-4 relative max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex px-4 py-1.5 mb-8 border border-brand/20 rounded-full bg-brand/5 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-brand">{hero.badge}</span>
                </motion.div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
                    <div className="overflow-hidden">
                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                            {hero.title.line1}
                        </motion.div>
                    </div>
                    <div className="overflow-hidden text-brand my-2">
                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                            {hero.title.line2}
                        </motion.div>
                    </div>
                    <div className="overflow-hidden">
                        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                            {hero.title.line3}
                        </motion.div>
                    </div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <a
                        href={hero.buttons.primary.link}
                        onClick={(e) => scrollToSection(e, hero.buttons.primary.link)}
                    >
                        <MagneticButton
                            className="px-10 py-4 bg-brand text-white font-medium tracking-wide uppercase rounded-sm text-lg hover:bg-[#b07e28] transition-all shadow-lg shadow-brand/20 w-full sm:w-auto"
                        >
                            {hero.buttons.primary.label}
                        </MagneticButton>
                    </a>
                    <a
                        href={hero.buttons.secondary.link}
                        onClick={(e) => scrollToSection(e, hero.buttons.secondary.link)}
                    >
                        <MagneticButton
                            className="px-10 py-4 bg-transparent border border-gray-900 text-gray-900 font-medium tracking-wide uppercase rounded-sm text-lg hover:bg-gray-900 hover:text-white transition-all w-full sm:w-auto"
                        >
                            {hero.buttons.secondary.label}
                        </MagneticButton>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="hidden md:flex absolute bottom-10 right-10 z-20 flex-col items-center gap-3"
            >
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">Scroll Down</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-gray-300 to-brand overflow-hidden relative">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-brand"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
