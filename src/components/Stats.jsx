import content from '../data/content.json';

const Stats = () => {
    const { features, hero } = content;

    return (
        <section id="stats" className="min-h-screen w-full bg-white flex flex-col overflow-hidden relative py-16">
            {/* Background Branding Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 border-l border-zinc-100" />
            </div>

            {/* Header Area */}
            <div className="pt-16 pb-8 px-8 sm:px-12 border-b border-zinc-100 flex items-center justify-between z-20 relative">
                <div className="flex items-center space-x-6">
                    <div className="h-px w-16 bg-brand" />
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 tracking-tight uppercase">Milestones</h2>
                </div>
            </div>

            {/* High Density Grid Area */}
            <div className="flex-grow flex flex-col lg:flex-row h-full relative z-10">
                {/* Left Side: Major Stats */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 flex flex-col justify-center space-y-12">
                    {hero.stats.map((stat, i) => (
                        <div 
                            key={i}
                            className="flex items-end space-x-6 sm:space-x-8 group"
                        >
                            <span className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-zinc-900 leading-none group-hover:text-brand transition-colors duration-300">
                                {stat.value}
                            </span>
                            <div className="pb-2 space-y-2">
                                <div className="h-1 w-12 bg-brand" />
                                <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-zinc-400">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Process / Features Grid */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 bg-white lg:bg-transparent">
                    {features.items.map((item, i) => (
                        <div
                            key={i}
                            className="p-8 sm:p-12 border-l border-b border-zinc-100 hover:bg-zinc-50 transition-colors duration-300 group flex flex-col justify-center"
                        >
                            <div className="mb-6 w-10 h-10 bg-zinc-900 text-brand flex items-center justify-center font-serif italic text-lg group-hover:bg-brand group-hover:text-white transition-colors duration-300 rounded-sm">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-zinc-900 mb-4 group-hover:text-brand">
                                {item.title}
                            </h3>
                            <p className="text-sm text-zinc-600 font-light leading-relaxed tracking-wide">
                                {item.description}
                            </p>
                            <div className="mt-6 h-px w-8 bg-zinc-200 group-hover:w-full group-hover:bg-brand/30 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

