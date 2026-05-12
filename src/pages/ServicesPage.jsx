import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import content from '../data/content.json';

function ServicesPage() {
    const { services } = content;
    const { categories } = services;

    return (
        <div id="services" className="min-h-screen bg-zinc-50 flex flex-col relative pt-16 lg:pt-24 pb-16 lg:pb-20 overflow-hidden justify-start">
            <SEO
                title="Our Services"
                description={services.description}
                canonical="https://www.nextgenhorizons.com/services"
            />

            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-zinc-200/50 blur-[100px] rounded-full" />
            </div>

            {/* Header */}
            <div className="page-inner mb-10 flex flex-col items-center justify-center text-center z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 mb-4"
                >
                    <div className="h-px w-8 bg-brand" />
                    <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand">{services.subtitle}</span>
                    <div className="h-px w-8 bg-brand" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 tracking-tighter uppercase"
                >
                    {services.title}
                </motion.h1>
            </div>

            {/* Grid Content */}
            <div className="flex-grow flex items-start justify-center z-10 relative">
                <div className="page-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            initial={{ y: 30 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            key={index}
                            className="group relative bg-white p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full border border-zinc-100/80 hover:border-zinc-200 overflow-hidden rounded-sm"
                        >
                            {/* Animated Accent Line */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-brand transition-all duration-700 ease-out group-hover:w-full" />

                            {/* Elegent Watermark Number */}
                            <div className="absolute -top-6 -right-4 text-[100px] font-serif font-black text-zinc-50/80 select-none group-hover:text-zinc-100/80 transition-colors duration-500 pointer-events-none">
                                0{index + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-4 group-hover:text-brand transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <div className="h-px w-12 bg-zinc-200 group-hover:w-24 group-hover:bg-brand/50 transition-all duration-500" />
                                </div>

                                <ul className="space-y-3 flex-grow">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-4">
                                            <span className="text-brand text-xs mt-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">◆</span>
                                            <span className="text-sm text-zinc-600 font-medium leading-relaxed">{item}</span>
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