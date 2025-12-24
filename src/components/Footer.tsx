import { Linkedin, Github, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[var(--navy)] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col gap-2">
                        <a href="#" className="flex items-center gap-2 text-xl font-bold">
                            <span className="text-[var(--cyan-accent)]">Plynk</span>
                            <span className="text-white">Data</span>
                        </a>
                        <p className="text-sm text-[var(--text-muted)]">
                            © 2025 Plynk Data Co., Ltd.
                        </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
                        <MapPin size={18} className="text-[var(--cyan-accent)]" />
                        <span className="text-sm">Seoul, South Korea</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-end gap-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass glass-hover transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} className="text-[var(--cyan-accent)]" />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full glass glass-hover transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={20} className="text-[var(--cyan-accent)]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
