import { Linkedin } from "lucide-react";

const leaders = [
    {
        name: "Im Eun Tack",
        role: "CEO",
        initials: "ET",
        gradient: "from-cyan-500 to-blue-600",
        linkedin: "#",
    },
    {
        name: "Phuong Huy Tung",
        role: "Chief Strategy Officer",
        initials: "HT",
        gradient: "from-emerald-500 to-teal-600",
        linkedin: "#",
    },
    {
        name: "Nguyen Xuan Phu",
        role: "Chief AI Officer",
        initials: "XP",
        gradient: "from-purple-500 to-indigo-600",
        linkedin: "#",
    },
    {
        name: "Oh Myeong Seok",
        role: "Chief Security Officer",
        initials: "MS",
        gradient: "from-amber-500 to-orange-600",
        linkedin: "#",
    },
    {
        name: "Hoang Thanh Cong",
        role: "Chief Technology Officer",
        initials: "TC",
        gradient: "from-rose-500 to-pink-600",
        linkedin: "#",
    },
];

export default function LeadershipTeam() {
    return (
        <section id="leadership" className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Leadership & <span className="text-[var(--cyan-accent)]">Board</span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
                        A diverse team of experts driving innovation at the intersection of AI and healthcare.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {leaders.map((leader, index) => (
                        <div
                            key={leader.name}
                            className="group relative p-6 rounded-2xl glass glass-hover transition-all duration-500 text-center animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Avatar */}
                            <div className={`w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br ${leader.gradient} 
                              flex items-center justify-center text-2xl font-bold text-white
                              shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {leader.initials}
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-white mb-1">
                                {leader.name}
                            </h3>

                            {/* Role */}
                            <p className="text-sm text-[var(--text-muted)] mb-4">
                                {leader.role}
                            </p>

                            {/* LinkedIn */}
                            <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full 
                           bg-[var(--cyan-accent)]/10 hover:bg-[var(--cyan-accent)]/20
                           transition-colors duration-300"
                                aria-label={`${leader.name} LinkedIn`}
                            >
                                <Linkedin size={18} className="text-[var(--cyan-accent)]" />
                            </a>

                            {/* Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${leader.gradient} 
                              opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
