import content from '../data/content.json';

const Works = () => {
    const { portfolio } = content;

    return (
        <section id="works" className="min-h-screen w-full bg-white flex flex-col overflow-hidden relative py-16">
            {/* Header Area */}
            <div className="pt-16 pb-8 px-8 sm:px-12 border-b border-zinc-100 flex items-center justify-between z-20 bg-white">
                <div className="flex items-center space-x-6">
                    <div className="h-px w-20 bg-brand" />
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-zinc-900 tracking-tight uppercase">{portfolio.sectionTitle}</h2>
                </div>
                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand">
                    {portfolio.sectionSubtitle}
                </div>
            </div>

            {/* Grid Area */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 h-full overflow-hidden">
                {portfolio.projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden border-r border-b border-zinc-100 flex flex-col justify-end p-8 sm:p-12 min-h-[300px] bg-white hover:bg-zinc-50 transition-colors duration-300"
                    >
                        {/* Visual Accent */}
                        <div className="absolute top-8 left-8 text-5xl font-serif italic text-zinc-100 group-hover:text-zinc-200 transition-colors duration-300 pointer-events-none select-none">
                            0{index + 1}
                        </div>

                        {/* Content */}
                        <div className="relative z-20 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-brand font-serif italic text-lg">Project 0{index + 1}</span>
                                <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">{project.year}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 leading-tight">
                                {project.title}
                            </h3>
                            <div className="h-1 w-12 bg-zinc-200 group-hover:w-full group-hover:bg-brand transition-all duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;

