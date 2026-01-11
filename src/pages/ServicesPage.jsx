import { motion } from 'framer-motion';
import RevealText from '../components/ui/RevealText';
import SEO from '../components/SEO';
import content from '../data/content.json';

function ServicesPage() {
    const { services } = content;
    const { categories } = services;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div id="services">
            <SEO
                title="Our Services"
                description="Comprehensive management consulting services including Audit, Taxation, and Risk Advisory."
                canonical="https://www.nextgenhorizons.com/services"
            />
            {/* Header Section */}
            <section className="text-center pt-24 md:pt-36 pb-16 px-5 relative z-10 bg-white">
                <div className="mb-6 flex justify-center">
                    <RevealText text={services.title} className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-gray-900" />
                </div>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col md:flex-row justify-between items-start gap-10 mt-8 mb-12"
                    >
                        <h2 className="text-2xl font-bold text-brand font-serif shrink-0">{services.subtitle}</h2>
                        <div className="md:w-2/3 text-left">
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                {services.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-5 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {categories.map((service, index) => (
                            <motion.div
                                variants={item}
                                key={index}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative bg-white border border-gray-100 p-8 rounded-sm hover:border-brand transition-colors duration-300 hover:shadow-2xl hover:shadow-brand/10 md:min-h-96 overflow-hidden"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-serif group-hover:text-brand transition-colors">{service.title}</h3>
                                <ul className="space-y-3 relative z-10">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-gray-600 flex items-start group-hover:text-gray-800 transition-colors">
                                            <span className="text-brand mr-3 mt-1.5 text-xs">◆</span>
                                            <span className="text-sm tracking-wide leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;