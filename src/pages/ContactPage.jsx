import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import content from '../data/content.json';

function ContactPage() {
    const { contact } = content;

    return (
        <div id="contact" className="min-h-[90vh] bg-white text-zinc-900 flex flex-col relative py-10 lg:py-16 justify-center scroll-mt-20">

            <SEO
                title="Contact Us"
                description="Get in touch with NextGen Horizons for expert management consultancy services in Surat, Oman, and UAE."
                canonical="https://www.nextgenhorizons.com/contact"
            />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-b border-zinc-100 z-20 bg-white"
            >
                <div className="page-inner pt-12 lg:pt-16 pb-6 flex items-center justify-center lg:justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                        <div className="h-px w-8 md:w-16 bg-brand" />
                        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight uppercase">Get In Touch</h1>
                        <div className="h-px w-8 bg-brand lg:hidden" />
                    </div>
                    <div className="hidden lg:flex flex-col items-end">
                        <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand">Contact Hub</span>
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400">NextGen Horizons</span>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col justify-center py-6 sm:py-10 relative">

                {/* Mobile Hero Block */}
                <div className="py-6 lg:hidden">
                    <div className="page-inner space-y-2 text-center sm:text-left">
                        <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand">Engagement Desk</div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                            Let's Build Your <span className="italic text-brand">Future</span> Together.
                        </h2>
                    </div>
                </div>

                {/* Desktop & Mobile 2-col layout */}
                <div className="page-inner flex flex-col lg:flex-row gap-10 lg:gap-16 items-start py-4 lg:py-8">

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col space-y-8"
                    >
                        {/* Desktop heading */}
                        <div className="hidden lg:block space-y-3">
                            <div className="text-xs font-bold tracking-[0.5em] uppercase text-brand">Engagement Desk</div>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-zinc-900 leading-[1.05] tracking-tight">
                                Let's Build Your <span className="italic text-brand">Future</span> Together.
                            </h2>
                        </div>

                        {/* Contact Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-4 border-t border-zinc-100">

                            {/* Address */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand pb-2 border-b border-zinc-100">Headquarters</h3>
                                <a
                                    href={contact.office.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View office location on Google Maps"
                                    className="block space-y-1 text-sm sm:text-base text-zinc-700 font-medium leading-relaxed group hover:text-zinc-900 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
                                >
                                    {contact.office.addressLines.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                    <div className="inline-flex items-center mt-3 text-brand text-xs sm:text-sm font-bold border-b border-brand/20 group-hover:border-brand transition-all duration-300 space-x-1">
                                        <span>Locate on Map</span>
                                        <span>→</span>
                                    </div>
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-brand pb-2 border-b border-zinc-100">Direct Lines</h3>
                                <div className="space-y-3 pt-1">
                                    {contact.phone.numbers.map((phone, i) => (
                                        <a
                                            key={i}
                                            href={phone.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Call or WhatsApp ${phone.label}`}
                                            className="flex items-center space-x-3 text-zinc-900 hover:text-brand transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
                                        >
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/10 transition-colors flex-shrink-0">
                                                <span className="text-xs font-serif font-semibold text-brand">{i + 1}</span>
                                            </div>
                                            <span className="text-sm sm:text-base lg:text-lg font-serif font-semibold tracking-tight text-zinc-900 group-hover:text-brand transition-colors">{phone.label}</span>
                                        </a>
                                    ))}

                                    {/* Email Link */}
                                    <div className="pt-2 border-t border-zinc-100 mt-2">
                                        <a
                                            href={contact.email.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Email NextGen Horizons"
                                            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-serif font-semibold text-zinc-700 hover:text-brand transition-colors"
                                        >
                                            <span className="text-brand font-bold">✉</span>
                                            <span>{contact.email.address}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </motion.div>


                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <a
                            href={contact.office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full h-[280px] sm:h-[360px] lg:h-[400px] relative overflow-hidden shadow-xl cursor-pointer border border-zinc-200"
                        >
                            <iframe
                                className="pointer-events-none absolute inset-0 w-full h-full"
                                title="Office Location"
                                src="https://www.google.com/maps?q=Sai+Vittorio+Opp+Atlanta+Shopping+Mall+Althan+Bhimrad+Road+Surat&output=embed"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center z-10">
                                <span className="bg-brand text-white px-5 py-2.5 font-serif font-bold text-xs tracking-[0.2em] uppercase shadow-lg border border-brand">
                                    Open in Google Maps
                                </span>
                            </div>
                        </a>


                        {/* Floating Info Card — desktop only */}
                        <div className="absolute bottom-4 right-4 bg-white p-5 max-w-[240px] border-l-4 border-brand shadow-xl z-20 hidden md:block">
                            <h4 className="text-zinc-900 font-serif font-bold text-sm mb-2">Institutional Visitation</h4>
                            <p className="text-zinc-600 text-xs leading-relaxed mb-3">
                                We welcome partners who share our vision for strategic growth. Visit us for a confidential consultation.
                            </p>
                            <div className="flex items-center space-x-3">
                                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand">Schedule a Meeting</span>
                                <div className="h-px flex-grow bg-brand/30" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default ContactPage;

