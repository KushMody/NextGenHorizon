import img1 from './images/img1.avif';
import { motion } from 'framer-motion';
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
      <section className="relative py-20 bg-white border-y border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text & Stats */}
            <div className="flex flex-col space-y-8 lg:order-1 order-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 leading-tight">
                  Shaping <span className="text-brand italic">Future Success</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  We combine strategic insight with creative innovation to help businesses navigate complexities and unlock their full potential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              >
                {hero.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 font-serif">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2 order-1"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 group">
                <img
                  src={img1}
                  alt="Management team"
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                {/* Floating Cards */}
                {hero.floatingCards.map((card, index) => (
                  <motion.div
                    key={index}
                    animate={{ y: index === 0 ? [0, -10, 0] : [0, 10, 0] }}
                    transition={{ duration: index === 0 ? 4 : 5, repeat: Infinity, ease: "easeInOut", delay: index === 0 ? 0 : 1 }}
                    className={`absolute ${index === 0 ? 'top-4 md:top-8 left-4 md:left-8' : 'bottom-4 md:bottom-8 right-4 md:right-8'} bg-white/95 backdrop-blur-md border border-gray-200 p-4 md:p-5 rounded-sm shadow-xl max-w-[150px] md:max-w-[200px]`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${index === 0 ? 'bg-brand/10 text-brand' : 'bg-gray-100 text-gray-800'} rounded-full flex items-center justify-center`}>
                        {index === 0 ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        )}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 font-serif">{card.value}</div>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{card.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;