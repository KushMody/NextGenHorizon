import content from '../data/content.json';

function Footer() {
    const { footer } = content;

    return (
        <footer className="bg-zinc-50 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
            {/* Smooth Top Gradient Edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left space-y-4">
                        <div className="text-3xl font-serif font-bold text-zinc-900 tracking-tighter">
                            NextGen <span className="text-brand italic">Horizons</span>
                        </div>
                        <div className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand">
                            Institutional Consultancy Services
                        </div>
                    </div>

                    <div className="flex items-center space-x-12">
                        {footer.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                className="text-zinc-400 hover:text-brand font-bold text-[10px] tracking-[0.3em] uppercase transition-all"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-50 mb-10" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] text-zinc-700 font-bold tracking-[0.2em] uppercase">
                        {footer.copyright}
                    </div>
                    <div className="text-[10px] text-brand font-bold tracking-[0.8em] uppercase opacity-50">
                        {footer.endText}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

