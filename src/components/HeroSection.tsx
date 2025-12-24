export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-transparent to-[var(--navy)]" />

            {/* Abstract Network Visualization */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Nodes */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[var(--cyan-accent)] node" />
                <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-[var(--cyan-accent)] node" />
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[var(--cyan-accent)] node" />
                <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-[var(--cyan-accent)] node" />
                <div className="absolute bottom-1/4 right-2/5 w-2 h-2 rounded-full bg-[var(--cyan-accent)] node" />

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--cyan-accent)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--cyan-accent)" stopOpacity="1" />
                            <stop offset="100%" stopColor="var(--cyan-accent)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line x1="25%" y1="25%" x2="67%" y2="33%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="67%" y1="33%" x2="33%" y2="67%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="33%" y1="67%" x2="75%" y2="67%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="33%" y1="33%" x2="25%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="60%" y1="75%" x2="75%" y2="67%" stroke="url(#lineGradient)" strokeWidth="1" />
                </svg>

                {/* Glow Orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full 
                        bg-gradient-radial from-[var(--cyan-glow)] to-transparent opacity-20 blur-3xl animate-float" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <div className="animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                        <span className="w-2 h-2 rounded-full bg-[var(--cyan-accent)] animate-pulse" />
                        <span className="text-sm font-medium text-[var(--text-muted)]">Seoul-Based Deep Tech Startup</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6">
                        Bridging{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-accent)] to-cyan-300 animate-gradient">
                            Medical AI Innovation
                        </span>
                        <br />
                        with Enterprise Software.
                    </h1>

                    {/* Subhead */}
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-muted)] mb-10 leading-relaxed">
                        Plynk Data is a Seoul-based deep-tech startup specializing in{" "}
                        <span className="text-white font-medium">Medical Foundation Models</span> and reliable{" "}
                        <span className="text-white font-medium">Offshore Development Centers</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#innovation"
                            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold
                         bg-[var(--cyan-accent)] text-[var(--navy)]
                         hover:shadow-[0_0_40px_var(--cyan-glow)] transition-all duration-300"
                        >
                            Explore Our Innovation
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold
                         glass glass-hover transition-all duration-300"
                        >
                            View Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-[var(--cyan-accent)] to-transparent" />
            </div>
        </section>
    );
}
