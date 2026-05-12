import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import content from '../data/content.json';

function ContactPage() {
    const { contact } = content;

    return (
        <div id="contact" className="min-h-screen lg:h-screen bg-white text-zinc-900 flex flex-col lg:overflow-hidden relative">
            <SEO
                title="Contact Us"
                description="Get in touch with NextGen Horizons for expert management consultancy services in Surat, Oman, and UAE."
                canonical="https://www.nextgenhorizons.com/contact"
            />

            {/* Header — centered on mobile, split on desktop */}
            <div className="border-b border-zinc-100 z-20 bg-white">
                <div className="page-inner pt-20 lg:pt-16 pb-4 flex items-center justify-center lg:justify-between">
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="h-px w-8 md:w-20 bg-brand" />
                        <h1 className="text-xl md:text-4xl font-serif font-bold text-zinc-900 tracking-tighter uppercase">Get In Touch</h1>
                        <div className="h-px w-8 bg-brand lg:hidden" />
                    </div>
                    <div className="hidden lg:flex flex-col items-end">
                        <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-brand">Contact Hub</span>
                        <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-zinc-400">NextGen Horizons</span>
                    </div>
                </div>
            </div>

            {/* Main Content — 80vw constrained */}
            <div className="flex-grow flex flex-col justify-center py-6 lg:py-0 relative">

                {/* Mobile Hero Block */}
                <div className="py-10 lg:hidden">
                    <div className="page-inner space-y-3">
                        <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand">Engagement Desk</div>
                        <h2 className="text-4xl font-serif font-bold text-zinc-900 leading-[1.05] tracking-tighter">
                            Let's Build Your<br /><span className="italic text-brand">Future</span> Together.
                        </h2>
                    </div>
                </div>

                {/* Desktop 2-col layout inside 80vw */}
                <div className="page-inner flex flex-col lg:flex-row gap-12 lg:gap-16 items-start py-8 lg:py-12">

                    {/* Left: Info */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-8">

                        {/* Desktop heading */}
                        <div className="hidden lg:block space-y-3">
                            <div className="text-[11px] font-bold tracking-[0.6em] uppercase text-brand">Engagement Desk</div>
                            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-zinc-900 leading-[1.0] tracking-tighter">
                                Let's Build Your <span className="italic text-brand">Future</span> Together.
                            </h2>
                        </div>

                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pt-4 lg:border-t lg:border-zinc-100">

                            {/* Address */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand pb-2 border-b border-zinc-100">Headquarters</h3>
                                <a
                                    href={contact.office.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View office location on Google Maps"
                                    className="block space-y-0.5 text-sm font-normal text-zinc-600 leading-relaxed group hover:text-zinc-900 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
                                >
                                    {contact.office.addressLines.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                    <div className="inline-flex items-center mt-3 text-brand text-sm font-serif font-bold border-b border-brand/20 group-hover:border-brand transition-all duration-300 space-x-1">
                                        <span>Locate on Map</span>
                                        <span>→</span>
                                    </div>
                                </a>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-3"
                            >
                                <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand pb-2 border-b border-zinc-100">Direct Lines</h3>
                                <div className="space-y-3">
                                    {contact.phone.numbers.map((phone, i) => (
                                        <a
                                            key={i}
                                            href={phone.link}
                                            aria-label={`Call or WhatsApp ${phone.label}`}
                                            className="flex items-center space-x-3 text-zinc-900 hover:text-brand transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
                                        >
                                            <div className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/5 transition-all flex-shrink-0">
                                                <span className="text-[9px] font-bold text-brand">{i + 1}</span>
                                            </div>
                                            <span className="text-sm md:text-base font-serif font-bold tracking-tight">{phone.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="w-full lg:w-1/2 relative">
                        <a
                            href="https://maps.app.goo.gl/AHxFNGizSdadA3876"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full h-[240px] md:h-[360px] lg:h-[420px] relative overflow-hidden opacity-100 lg:opacity-60 lg:grayscale hover:opacity-100 lg:hover:opacity-100 lg:hover:grayscale-0 transition-all duration-1000 shadow-xl cursor-pointer"
                        >
                            <iframe
                                className="pointer-events-none absolute inset-0 w-full h-full"
                                title="Office Location"
                                src="https://www.google.com/maps?q=21.1444,72.8258&z=15&output=embed"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 flex items-center justify-center z-10">
                                <span className="bg-brand text-white px-6 py-3 font-serif font-bold text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-xl border border-brand">
                                    Open in Google Maps
                                </span>
                            </div>
                        </a>

                        {/* Floating Info Card — desktop only */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-4 right-4 bg-white p-5 max-w-[240px] border-l-4 border-brand shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 hidden md:block"
                        >
                            <h4 className="text-zinc-900 font-serif font-bold text-base mb-3">Institutional Visitation</h4>
                            <p className="text-zinc-600 text-xs leading-relaxed mb-4">
                                We welcome partners who share our vision for strategic growth. Visit us for a confidential consultation.
                            </p>
                            <div className="flex items-center space-x-3">
                                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand">Schedule a Meeting</span>
                                <div className="h-px flex-grow bg-brand/30" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default ContactPage;