import React from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/ui/RevealText';
import SEO from '../components/SEO';
import content from '../data/content.json';

function AboutPage() {
  const { about } = content;
  const { teamMembers, industries, locations } = about;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="about">
      <SEO
        title="About Us"
        description="Learn about our expert team and industry experience at NextGen Horizons."
        canonical="https://www.nextgenhorizons.com/about"
      />
      {/* Team Section */}
      <section className="pt-24 md:pt-36 px-5 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <RevealText text={about.title} className="text-3xl md:text-5xl justify-center font-serif font-bold text-gray-900" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {teamMembers.map((member, index) => (
              <motion.div variants={item} key={index} className="group bg-white border border-gray-100 p-6 md:p-10 rounded-sm hover:border-brand/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-brand/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
                <h3 className="text-3xl mb-2 text-gray-900 font-serif font-bold tracking-tight group-hover:text-brand transition-colors relative z-10">{member.name}</h3>
                <p className="text-xl mb-6 text-brand font-medium tracking-wide uppercase text-sm relative z-10">{member.title}</p>
                <p className="text-lg text-gray-600 leading-relaxed font-light relative z-10">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-5 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <RevealText text={about.industryTitle} className="text-3xl md:text-5xl justify-center font-serif font-bold text-gray-900" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-l-4 border-brand p-10 rounded-r-sm shadow-md mb-20 relative overflow-hidden"
          >
            <h3 className="text-3xl mb-6 text-gray-900 font-serif font-bold tracking-tight relative z-10">{about.industrySubtitle}</h3>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-5 marker:text-brand relative z-10 space-y-3 columns-1 md:columns-2 gap-10">
              {industries.map((industry, index) => (
                <li key={index} className="pl-2">{industry}</li>
              ))}
            </ul>
          </motion.div>

          <div className="mb-12 text-center">
            <RevealText text={about.industryTitle} className="text-3xl md:text-5xl justify-center font-serif font-bold text-gray-900" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={item} className="bg-white border border-gray-200 p-10 rounded-sm hover:border-brand transition-all duration-300 group">
              <h3 className="text-3xl mb-8 text-gray-900 font-serif font-bold group-hover:text-brand transition-colors">{locations.domestic.title}</h3>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-3">
                {locations.domestic.list.map((location, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></span>
                    {location}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={item} className="bg-white border border-gray-200 p-10 rounded-sm hover:border-brand transition-all duration-300 group">
              <h3 className="text-3xl mb-8 text-gray-900 font-serif font-bold group-hover:text-brand transition-colors">{locations.international.title}</h3>
              <ul className="text-lg text-gray-600 leading-relaxed space-y-3">
                {locations.international.list.map((location, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand rounded-full mr-3"></span>
                    {location}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;