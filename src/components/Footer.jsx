import content from '../data/content.json';

function Footer() {
    const { footer } = content;

    return (
        <footer className="bg-zinc-50 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 relative overflow-hidden border-t border-zinc-200/80">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left space-y-2">
                        <div className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 tracking-tight">
                            NextGen <span className="text-brand italic">Horizons</span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-brand">
                            Institutional Consultancy Services
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 sm:space-x-10">
                        {footer.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                className="text-zinc-500 hover:text-brand font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase transition-colors"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-200/60 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="text-[10px] sm:text-xs text-zinc-600 font-medium tracking-wider">
                        {footer.copyright}
                    </div>
                    <div className="text-[10px] text-brand font-bold tracking-[0.5em] uppercase opacity-70">
                        {footer.endText}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


