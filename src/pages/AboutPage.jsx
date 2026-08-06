import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import content from '../data/content.json';

function AboutPage() {
  const { about } = content;
  const { teamMembers, industries, locations } = about;

  const philQuotes = [
    "Integrity in every calculation, excellence in every audit.",
    "Strategic foresight meets technical precision."
  ];

  return (
    <div id="about" className="bg-white">
      <SEO
        title="About Us"
        description="Learn about our expert team and industry experience at NextGen Horizons."
        canonical="https://www.nextgenhorizons.com/about"
      />

      {/* Leadership Section */}
      <section className="min-h-[90vh] w-full flex flex-col justify-center relative overflow-hidden bg-white py-12 sm:py-16 scroll-mt-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="page-inner z-20 text-center mb-6 sm:mb-8 relative"
        >
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-2">
            <div className="h-px w-8 md:w-12 bg-brand" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-zinc-500">
              Institutional Governance
            </span>
            <div className="h-px w-8 md:w-12 bg-brand" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 tracking-tight">
            Our Leadership
          </h2>
        </motion.div>

        {/* Partner Cards Grid */}
        <div className="relative z-10 page-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => {
              const isFirst = index === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="bg-white shadow-lg border border-zinc-200 p-5 sm:p-6 lg:p-7 flex flex-col justify-between group hover:border-brand/50 transition-colors duration-300"
                >
                  <div className="space-y-3 sm:space-y-4">
                    {/* Header */}
                    <div className="space-y-1 pb-3 border-b border-zinc-100">
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand">
                        Partner
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-zinc-900">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold tracking-wider text-brand/90">
                        {member.title}
                      </p>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm font-serif italic text-zinc-800 border-l-2 border-brand pl-3 py-0.5">
                      &ldquo;{philQuotes[index]}&rdquo;
                    </p>

                    {/* Bio */}
                    <p className="text-zinc-600 font-light text-xs sm:text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Connect Action */}
                  <div className="pt-4 mt-4 sm:mt-5 border-t border-zinc-100">
                    <a
                      href={isFirst ? "https://wa.me/917777991104" : "https://wa.me/916352331441"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-4 bg-zinc-900 text-white px-5 py-2.5 sm:py-3 hover:bg-brand transition-colors duration-300 w-full justify-between"
                    >
                      <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Executive Connect</span>
                      <span className="text-brand group-hover:text-white transition-colors">→</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Expertise & Operational Reach */}
      <section className="min-h-[90vh] w-full flex flex-col justify-center py-12 lg:py-20 bg-white relative overflow-hidden text-zinc-900 border-t border-zinc-100">

        <div className="page-inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8 sm:space-y-10"
            >
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="h-px w-8 bg-brand" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand">Capabilities</span>
                  <div className="h-px w-8 bg-brand lg:hidden" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 uppercase tracking-tight">
                  {about.industryTitle}
                </h2>
                <p className="text-zinc-500 font-light text-sm sm:text-base max-w-xl mx-auto lg:mx-0 italic text-center lg:text-left">
                  {about.industrySubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 border-b border-zinc-200 pb-3 group hover:border-brand transition-colors duration-300"
                  >
                    <span className="text-brand font-serif italic text-xs flex-shrink-0">0{index + 1}</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-700 group-hover:text-zinc-900 transition-colors">{industry}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Operational Reach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-zinc-50 p-6 sm:p-10 lg:p-12 border border-zinc-200 relative overflow-hidden shadow-lg"
            >
              <div className="space-y-8">
                <div className="space-y-3 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-zinc-900 uppercase tracking-wider">Operational Reach</h3>
                  <div className="w-16 h-1 bg-brand mx-auto sm:mx-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand border-b border-brand/20 pb-2">
                      {locations.domestic.title}
                    </h4>
                    <ul className="space-y-3">
                      {locations.domestic.list.map((loc, i) => (
                        <li key={i} className="text-sm font-medium text-zinc-700 flex items-center group">
                          <span className="w-2 h-[1px] bg-brand mr-3" />
                          <span className="group-hover:text-zinc-900 transition-colors">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand border-b border-brand/20 pb-2">
                      {locations.international.title}
                    </h4>
                    <ul className="space-y-3">
                      {locations.international.list.map((loc, i) => (
                        <li key={i} className="text-sm font-medium text-zinc-700 flex items-center group">
                          <span className="w-2 h-[1px] bg-brand mr-3" />
                          <span className="group-hover:text-zinc-900 transition-colors">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
