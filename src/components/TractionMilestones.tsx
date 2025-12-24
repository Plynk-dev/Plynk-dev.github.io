import { Trophy, Wallet, FileText, Building2 } from "lucide-react";

const milestones = [
    {
        icon: Trophy,
        emoji: "🏆",
        title: "Top Startup",
        description: "Recognized by Soongsil University",
        color: "amber",
    },
    {
        icon: Wallet,
        emoji: "💰",
        title: "Funded & Backed",
        description: "Soongsil Univ (Startup Package) & Korea Bohun Promotion Association",
        color: "emerald",
    },
    {
        icon: FileText,
        emoji: "📜",
        title: "Patent Filed",
        description: "1 Patent Application in Progress",
        color: "cyan",
    },
    {
        icon: Building2,
        emoji: "🏢",
        title: "Incorporating",
        description: "Plynk Data Co., Ltd. (Q2 2025)",
        color: "purple",
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

export default function TractionMilestones() {
    return (
        <section id="track-record" className="py-24 lg:py-32 section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--navy)]">
                        Traction & <span className="text-[var(--cyan-accent)]">Milestones</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        Building momentum through strategic achievements and partnerships.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {milestones.map((milestone, index) => {
                        const colors = colorMap[milestone.color];
                        return (
                            <div
                                key={milestone.title}
                                className="group relative p-6 rounded-2xl bg-white border border-[var(--navy)]/10 
                           hover:border-[var(--cyan-accent)]/50 hover:shadow-xl 
                           transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--navy)] text-white 
                                flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4
                                group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl">{milestone.emoji}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">
                                    {milestone.title}
                                </h3>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                    {milestone.description}
                                </p>

                                {/* Decorative Line */}
                                {index < milestones.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--navy)]/10" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
