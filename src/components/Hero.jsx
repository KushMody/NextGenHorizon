import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import content from '../data/content.json';

const Hero = () => {
    const { hero } = content;

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            if (window.lenis) {
                window.lenis.scrollTo(element, {
                    duration: 1.4,
                    offset: -40,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    return (
        <section
            id="home"
            className="h-screen max-h-screen w-full flex flex-col items-center justify-between bg-white relative overflow-hidden bg-mesh px-4 sm:px-6 text-zinc-900 pt-20 sm:pt-24 pb-4 sm:pb-6 scroll-mt-20"
        >

            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-brand/3 blur-[100px] rounded-full" />
                <div className="absolute top-[20%] left-[10%] w-[1px] h-[40%] bg-gradient-to-b from-brand/0 via-brand/20 to-brand/0" />
            </div>

            <div className="z-20 text-center relative max-w-5xl mx-auto flex flex-col items-center justify-center flex-grow py-2 sm:py-4">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center space-x-3 px-3.5 py-1 mb-3 sm:mb-4 border border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm"
                >
                    <div className="w-6 h-[1px] bg-brand" />
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-zinc-500">{hero.badge}</span>
                    <div className="w-6 h-[1px] bg-brand" />
                </motion.div>

                <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-3 sm:mb-4 text-zinc-900 leading-[1.02] flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="inline-block px-2"
                    >
                        {hero.title.line1}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="inline-block text-brand italic"
                    >
                        {hero.title.line2}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="inline-block px-2"
                    >
                        {hero.title.line3}
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="text-xs sm:text-sm md:text-base text-zinc-600 max-w-lg sm:max-w-xl mx-auto mb-4 sm:mb-6 font-light leading-relaxed tracking-wide px-4"
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-2 sm:mb-4 w-full max-w-md sm:max-w-none"
                >
                    <div onClick={(e) => scrollToSection(e, hero.buttons.primary.link)} className="w-full sm:w-auto">
                        <MagneticButton className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-zinc-900 text-white font-bold tracking-[0.2em] uppercase hover:bg-brand shadow-xl border border-zinc-900 text-[10px]">
                            {hero.buttons.primary.label}
                        </MagneticButton>
                    </div>
                    <div onClick={(e) => scrollToSection(e, hero.buttons.secondary.link)} className="w-full sm:w-auto">
                        <MagneticButton className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border border-zinc-200 text-zinc-900 font-bold tracking-[0.2em] uppercase hover:border-brand hover:text-brand text-[10px]">
                            {hero.buttons.secondary.label}
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            {/* Stats Dashboard */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 border-t border-zinc-100 pt-4 sm:pt-6 z-20"
            >
                {hero.stats.map((stat, i) => (
                    <div key={i} className="text-center group sm:border-r sm:last:border-0 border-zinc-100 px-4 py-1 sm:py-0">
                        <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-zinc-900 group-hover:text-brand transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-zinc-400 mt-0.5 sm:mt-1">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );

};

export default Hero;


