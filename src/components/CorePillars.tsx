import { Brain, Globe, Network, Code } from "lucide-react";

export default function CorePillars() {
    return (
        <section id="innovation" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-[var(--cyan-accent)]">Core Pillars</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        Two powerful divisions driving innovation and delivering enterprise solutions.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Innovation & R&D Card */}
                    <div className="group relative p-8 lg:p-10 rounded-3xl glass glass-hover transition-all duration-500 overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Icon */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-[var(--cyan-accent)]/10 flex items-center justify-center
                              group-hover:bg-[var(--cyan-accent)]/20 transition-colors duration-300">
                                <Brain className="w-8 h-8 text-[var(--cyan-accent)]" />
                            </div>
                            <Network className="absolute -top-2 -right-2 w-6 h-6 text-[var(--cyan-accent)]/40" />
                        </div>

                        {/* Content */}
                        <h3 className="relative text-2xl lg:text-3xl font-bold mb-4 text-white">
                            Innovation & R&D
                        </h3>

                        <p className="relative text-[var(--text-muted)] mb-6 leading-relaxed">
                            Pioneering breakthrough technologies at the intersection of healthcare and artificial intelligence.
                        </p>

                        {/* Keywords */}
                        <div className="relative flex flex-wrap gap-3">
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)] border border-[var(--cyan-accent)]/20">
                                Medical Data Foundation Models
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)] border border-[var(--cyan-accent)]/20">
                                AI for Healthcare
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)] border border-[var(--cyan-accent)]/20">
                                AI for Software Engineering
                            </span>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--cyan-accent)]/5 to-transparent rounded-bl-full" />
                    </div>

                    {/* Global Engineering Services Card */}
                    <div id="services" className="group relative p-8 lg:p-10 rounded-3xl glass glass-hover transition-all duration-500 overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Icon */}
                        <div className="relative mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center
                              group-hover:bg-emerald-500/20 transition-colors duration-300">
                                <Globe className="w-8 h-8 text-emerald-400" />
                            </div>
                            <Code className="absolute -top-2 -right-2 w-6 h-6 text-emerald-400/40" />
                        </div>

                        {/* Content */}
                        <h3 className="relative text-2xl lg:text-3xl font-bold mb-4 text-white">
                            Global Engineering Services
                        </h3>

                        <p className="relative text-[var(--text-muted)] mb-6 leading-relaxed">
                            World-class software development capacity with the quality assurance and management of a Seoul-based team.
                        </p>

                        {/* Keywords */}
                        <div className="relative flex flex-wrap gap-3">
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Offshore Development Center (ODC)
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Cost-effective Scalability
                            </span>
                            <span className="px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Seoul-Managed Quality
                            </span>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
