import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/ui/RevealText';
import SEO from '../components/SEO';
import content from '../data/content.json';

function AboutPage() {
  const { about } = content;
  const { teamMembers, industries, locations } = about;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="about" className="bg-white">
      <SEO
        title="About Us"
        description="Learn about our expert team and industry experience at NextGen Horizons."
        canonical="https://www.nextgenhorizons.com/about"
      />

      {/* Viewport 1: Leadership - Professional Cinematic (Staggered Monoliths) */}
      <section
        className="min-h-screen w-full flex flex-col justify-start relative overflow-hidden bg-white pt-24 lg:pt-28 pb-12 lg:pb-12"
        onMouseMove={(e) => {
          const { clientX, clientY } = e;
          const x = (clientX / window.innerWidth - 0.5) * 20;
          const y = (clientY / window.innerHeight - 0.5) * 20;
          setMousePos({ x, y });
        }}
      >
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            animate={{
              x: mousePos.x * 0.5,
              y: mousePos.y * 0.5
            }}
            className="absolute top-1/4 left-1/4 text-[30vh] font-serif font-black text-zinc-50/50 leading-none select-none"
          >
            01
          </motion.div>
          <motion.div
            animate={{
              x: mousePos.x * -0.3,
              y: mousePos.y * -0.3
            }}
            className="absolute bottom-1/4 right-1/4 text-[30vh] font-serif font-black text-zinc-50/50 leading-none select-none"
          >
            02
          </motion.div>
        </div>

        {/* Global Header */}
        <div className="page-inner z-20 text-center mb-10 lg:mb-8 relative">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-4">
            <div className="h-px w-6 md:w-12 bg-brand" />
            <span className="text-[8px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.5em] uppercase text-zinc-500 whitespace-nowrap">Institutional Governance</span>
            <div className="h-px w-6 md:w-12 bg-brand" />
          </div>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-zinc-900 tracking-tight leading-none">Our Leadership</h2>
        </div>

        <div className="relative z-10 page-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative min-h-[450px]">
            {teamMembers.map((member, index) => {
              const isFirst = index === 0;
              const isActive = activeIndex === index;
              const isSomethingActive = activeIndex !== null;

              const philQuotes = [
                "Integrity in every calculation, excellence in every audit.",
                "Strategic foresight meets technical precision."
              ];

              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      setActiveIndex(isActive ? null : index);
                    }
                  }}
                  animate={{
                    x: isSomethingActive ? (isActive ? 0 : (isFirst ? -100 : 100)) : 0,
                    opacity: isSomethingActive && !isActive ? 0 : 1,
                    scale: isSomethingActive && !isActive ? 0.95 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`lg:cursor-pointer transition-all duration-700 ${isSomethingActive
                    ? (isActive ? "lg:col-span-12" : "hidden")
                    : (isFirst ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-8")
                    } relative`}
                >
                  <motion.div
                    whileHover={!isSomethingActive ? { y: -20, scale: 1.02 } : {}}
                    animate={{
                      rotateX: mousePos.y * 0.1,
                      rotateY: mousePos.x * (isFirst ? 0.1 : -0.1),
                    }}
                    className={`bg-white p-8 lg:p-10 shadow-2xl shadow-zinc-200/50 border flex flex-col group relative transition-colors duration-500 ${isActive ? "lg:flex-row gap-12 lg:gap-16 lg:cursor-pointer hover:bg-zinc-50/50 lg:border-zinc-300" : "h-full border-zinc-100"
                      }`}
                  >
                    {/* Subtle Click-to-Close Hint (Desktop Only) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1, transition: { delay: 0.6 } }}
                          exit={{ opacity: 0 }}
                          className="hidden lg:flex absolute top-6 right-8 text-[9px] font-bold tracking-[0.4em] uppercase text-zinc-400 group-hover:text-zinc-600 transition-colors pointer-events-none z-50 items-center space-x-2"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span>Click Again to collapse</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Left/Top Content: Visual Identity */}
                    <div className={`${isActive ? "lg:w-1/3" : "w-full"} space-y-6`}>
                      <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand">
                          Partner
                        </span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 leading-none">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#D4AF37] py-3 border-y border-zinc-100 w-full text-center lg:text-left">
                          {member.title}
                        </p>
                      </div>

                      {/* MOBILE BIO CONTENT (Always Visible) */}
                      <div className="block lg:hidden mt-6 space-y-8">
                        <p className="text-zinc-600 font-light text-base leading-relaxed text-center">
                          {member.bio}
                        </p>
                        <div className="pt-6 border-t border-zinc-100 flex justify-center">
                          <a
                            href={isFirst ? "https://wa.me/917777991104" : "https://wa.me/916352331441"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="group/btn inline-flex items-center space-x-4 bg-zinc-900 text-white px-6 py-4 hover:bg-[#D4AF37] transition-all duration-500 w-full justify-between"
                          >
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Executive Connect</span>
                            <div className="w-8 h-[1px] bg-white/20 transform group-hover/btn:w-12 transition-all" />
                          </a>
                        </div>
                      </div>

                      {/* Static Initials Visual for non-active state (Desktop Only) */}
                      <AnimatePresence>
                        {!isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            className="hidden lg:flex items-end justify-between w-full mt-auto pt-8"
                          >
                            <div className="text-[12vh] font-serif font-black text-zinc-200 border-b-4 border-brand/30 inline-block leading-none select-none">
                              {member.name.charAt(0)}
                            </div>

                            <div className="flex items-center space-x-3 text-brand opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                              <span className="text-[9px] font-bold tracking-[0.4em] uppercase">View Profile</span>
                              <div className="w-8 h-8 rounded-full border border-brand flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Signature Reveal in Active State (Desktop Only) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            className="pt-8 hidden lg:block"
                          >
                            <span className="text-5xl font-serif italic text-zinc-400 opacity-90" style={{ fontFamily: "'Dancing Script', cursive" }}>
                              {member.name}
                            </span>
                            <div className="h-px w-24 bg-zinc-100 mt-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Right/Bottom Content: Professional Bio & Philosophy (Desktop Only) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                          exit={{ opacity: 0, transition: { duration: 0 } }}
                          className="hidden lg:block lg:w-2/3 space-y-8"
                        >
                          <div className="space-y-6">
                            <h4 className="text-2xl font-serif italic text-zinc-900 border-l-4 border-brand pl-8">
                              &ldquo;{philQuotes[index]}&rdquo;
                            </h4>
                            <p className="text-zinc-600 font-light text-base leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-zinc-900 first-letter:float-left first-letter:mr-4 first-letter:mt-1">
                              {member.bio}
                            </p>
                          </div>

                          <div className="pt-8 border-t border-zinc-100">
                            <a
                              href={isFirst ? "https://wa.me/917777991104" : "https://wa.me/916352331441"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn inline-flex items-center space-x-6 bg-zinc-900 text-white px-8 py-4 hover:bg-brand transition-all duration-500"
                            >
                              <span className="text-xs font-bold tracking-[0.3em] uppercase">Executive Connect</span>
                              <div className="w-12 h-[1px] bg-white/20 transform group-hover/btn:w-16 transition-all" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>


                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Viewport 2: Expertise & Reach - High Density Data */}
      <section className="min-h-screen lg:h-screen w-full flex flex-col justify-center py-16 lg:py-0 bg-white relative overflow-hidden text-zinc-900 border-t border-zinc-100">
        {/* Visual elements to fill space */}
        <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
          <div className="absolute top-1/4 -left-10 text-[20vh] font-serif font-bold text-zinc-900/10 uppercase -rotate-90">EXPERTISE</div>
          <div className="absolute bottom-1/4 -right-10 text-[20vh] font-serif font-bold text-zinc-900/10 uppercase rotate-90">NETWORK</div>
        </div>

        <div className="page-inner relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Industries Grid - Fills the space with 2 columns */}
            <div className="space-y-12">
              <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-6">
                  <div className="h-px w-6 lg:w-10 bg-brand" />
                  <span className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.5em] uppercase text-brand whitespace-nowrap">Capabilities</span>
                  <div className="h-px w-6 bg-brand lg:hidden" />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-900 uppercase tracking-tighter leading-none whitespace-nowrap">
                  {about.industryTitle}
                </h2>
                <p className="text-zinc-500 font-light text-base md:text-lg max-w-xl mx-auto lg:mx-0 border-l-0 lg:border-l border-brand/20 pl-0 lg:pl-8 italic text-center lg:text-left">
                  {about.industrySubtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 border-b border-zinc-200 pb-4 group hover:border-brand transition-colors duration-500"
                  >
                    <span className="text-brand font-serif italic text-sm flex-shrink-0">0{index + 1}</span>
                    <span className="text-sm font-semibold tracking-widest uppercase text-zinc-700 group-hover:text-zinc-900 transition-colors">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Card - Full Viewport Density */}
            <div className="bg-zinc-50/50 backdrop-blur-2xl p-8 lg:p-16 border border-zinc-100 relative overflow-hidden shadow-2xl">
              <div className="space-y-12 lg:space-y-16">
                <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h3 className="text-[1.1rem] md:text-xl lg:text-2xl font-serif font-bold text-zinc-900 uppercase tracking-[0.15em] md:tracking-[0.3em] whitespace-nowrap">Operational Reach</h3>
                  <div className="w-16 h-1 bg-brand" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h4 className="text-xs font-bold tracking-[0.5em] uppercase text-brand border-b border-brand/20 pb-4">
                      {locations.domestic.title}
                    </h4>
                    <ul className="space-y-4">
                      {locations.domestic.list.map((loc, i) => (
                        <li key={i} className="text-base font-medium text-zinc-700 flex items-center group">
                          <span className="w-2 h-[1px] bg-zinc-300 mr-4 group-hover:bg-brand group-hover:w-4 transition-all" />
                          <span className="group-hover:text-zinc-900 transition-colors">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <h4 className="text-xs font-bold tracking-[0.5em] uppercase text-brand border-b border-brand/20 pb-4">
                      {locations.international.title}
                    </h4>
                    <ul className="space-y-4">
                      {locations.international.list.map((loc, i) => (
                        <li key={i} className="text-base font-medium text-zinc-700 flex items-center group">
                          <span className="w-2 h-[1px] bg-zinc-300 mr-4 group-hover:bg-brand group-hover:w-4 transition-all" />
                          <span className="group-hover:text-zinc-900 transition-colors">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual richness: geometric accents */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-t border-l border-zinc-100 rotate-45" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;