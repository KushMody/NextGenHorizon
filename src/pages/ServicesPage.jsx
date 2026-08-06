import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import content from '../data/content.json';

function ServicesPage() {
    const { services } = content;
    const { categories } = services;

    return (
        <div id="services" className="min-h-[90vh] bg-zinc-50 flex flex-col relative pt-16 lg:pt-24 pb-12 lg:pb-16 overflow-hidden justify-center scroll-mt-20">

            <SEO
                title="Our Services"
                description={services.description}
                canonical="https://www.nextgenhorizons.com/services"
            />

            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-zinc-200/50 blur-[100px] rounded-full" />
            </div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="page-inner mb-12 flex flex-col items-center justify-center text-center z-20 relative"
            >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                    <div className="h-px w-8 bg-brand" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase text-brand">{services.subtitle}</span>
                    <div className="h-px w-8 bg-brand" />
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 tracking-tight uppercase">
                    {services.title}
                </h1>
            </motion.div>

            {/* Grid Content */}
            <div className="flex-grow flex items-start justify-center z-10 relative">
                <div className="page-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-zinc-200/80 hover:border-brand/40 overflow-hidden rounded-sm"
                        >
                            {/* Animated Top Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-brand group-hover:w-full transition-all duration-500 ease-out" />

                            {/* Watermark Number */}
                            <div className="absolute -top-4 -right-2 text-[80px] sm:text-[100px] font-serif font-black text-zinc-100/60 select-none pointer-events-none">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 mb-3 group-hover:text-brand transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <div className="h-px w-12 bg-brand/30 group-hover:w-20 transition-all duration-300" />
                                </div>

                                <ul className="space-y-3 flex-grow">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <span className="text-brand text-xs mt-1 font-bold">◆</span>
                                            <span className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;
