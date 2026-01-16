function Footer() {
    return (
        <footer className="py-12 border-t border-dev-border bg-obsidian-900 transition-colors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-2">
                            <span className="text-jade-500 text-sm">✶</span> Linggen
                        </span>
                        <p className="text-xs text-slate-400 font-mono">
                            Local-first AI orchestration layer. Built with Rust.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
                        <a href="https://github.com/linggen/linggen" target="_blank" rel="noopener noreferrer" className="hover:text-jade-500 transition-colors">GitHub</a>
                        <a href="mailto:linggen77@gmail.com" className="hover:text-jade-500 transition-colors">Contact</a>
                        <a href="/docs" className="hover:text-jade-500 transition-colors">Docs</a>
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-dev-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-widest text-obsidian-700 font-bold font-mono">
                        © 2026 Linggen ecosystem
                    </p>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-jade-500 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-jade-500 font-bold font-mono">System Online</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
