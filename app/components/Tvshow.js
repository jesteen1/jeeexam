import Link from 'next/link';

const TvShowIntro = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-3xl mb-12 group">
            {/* Background Image with Glow Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{
                    backgroundImage: "url('/tvshow_hero_bg.png')",
                    filter: "brightness(0.6)"
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
                    <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                        Premium Streaming
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Your Ultimate <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
                        TV Show Experience
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-zinc-300 text-lg md:text-xl mb-10 leading-relaxed">
                    Dive into our curated collection of global hits and hidden gems.
                    From intense thrillers to heartwarming sitcoms, experience storytelling like never before.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#latest"
                        className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Browse Releases
                    </Link>
                    <Link
                        href="/about"
                        className="px-8 py-4 bg-zinc-900/40 text-white font-bold rounded-2xl border border-zinc-700/50 backdrop-blur-xl hover:bg-zinc-800/60 transition-all duration-300"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default TvShowIntro;
