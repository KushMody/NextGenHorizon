import { motion } from 'framer-motion';
import img1 from './images/img1.avif';
import content from '../data/content.json';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const HomePage = () => {
  const { hero } = content;

  return (
    <>
      <SEO
        title="Home"
        description={content.hero.description}
        canonical="https://www.nextgenhorizons.com/"
      />
      <Hero />

      {/* Overview/Stats Section */}
      <section className="bg-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden py-12 lg:py-16 scroll-mt-20">

        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Text & Stats */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6 lg:space-y-8 w-full"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <div className="h-px w-12 bg-brand" />
                  <span className="text-xs font-bold tracking-[0.4em] uppercase text-brand whitespace-nowrap">Overview</span>
                  <div className="h-px w-12 bg-brand lg:hidden" />
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                  Guided by <br className="lg:hidden" />
                  <span className="text-brand italic">Excellence & Integrity</span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-zinc-600 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  We empower organizations through innovative strategic consulting, delivering measurable growth and sustainable success in an ever-evolving global market.
                </p>

                <div className="classic-divider mx-auto lg:mx-0" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-4 w-full"
              >
                {hero.stats.map((stat, index) => (
                  <div key={index} className="space-y-2 sm:space-y-3 flex flex-col items-center lg:items-start">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900">{stat.value}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-[0.25em] font-semibold">{stat.label}</div>
                    <div className="w-8 h-0.5 bg-brand/20 mx-auto lg:mx-0" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image Showcase */}
            <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative group"
              >
                <div className="aspect-[4/5] overflow-hidden border-[8px] sm:border-[12px] border-zinc-50 shadow-2xl relative">
                  <img
                    src={img1}
                    alt="NextGen Horizons leadership team at work"
                    width={600}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand/5" />
                </div>

                {/* Elegant Floating Element */}
                <div className="absolute -bottom-4 -right-4 bg-zinc-900 p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center text-center z-10">
                  <div className="text-brand text-2xl sm:text-4xl font-serif font-bold mb-1">98%</div>
                  <div className="text-zinc-400 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">Success Portfolio</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-brand/40 -z-10" />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 border-brand/40 -z-10" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
