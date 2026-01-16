function Library() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">📚</span> Ecosystem
                </div>
                <h1 className="text-4xl font-bold font-display text-white">
                    Library Packs
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    Browse curated Skills and Policies to instantly upgrade your AI Mentor's capabilities.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">What is a Pack?</h2>
                <p className="text-slate-400 leading-relaxed">
                    A <strong>Library Pack</strong> is a collection of reusable instructions—coding conventions, 
                    refactor workflows, or security guardrails—that can be shared across projects.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-obsidian-800/50 rounded-2xl border border-dev-border">
                        <h4 className="font-bold text-white mb-2 italic">Skills</h4>
                        <p className="text-xs text-slate-400">Behavioral guidance on "how" to work. Examples: Test-driven development, minimal diffs, atomic commits.</p>
                    </div>
                    <div className="p-6 bg-obsidian-800/50 rounded-2xl border border-dev-border">
                        <h4 className="font-bold text-white mb-2 italic">Policies</h4>
                        <p className="text-xs text-slate-400">Hard constraints and guardrails. Examples: Security standards, forbidden libraries, naming conventions.</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Installation</h2>
                <div className="bg-obsidian-900 rounded-xl border border-dev-border overflow-hidden">
                    <div className="bg-obsidian-800 px-4 py-2 text-[10px] uppercase font-bold text-obsidian-700 font-mono">VS Code Command</div>
                    <pre className="p-6 text-sm font-mono text-jade-500 font-bold">
                        Linggen: Library
                    </pre>
                </div>
                <p className="text-sm text-slate-400 italic">
                    Open the Library from the Command Palette to browse and install packs into <code className="font-mono text-jade-600">.linggen/</code>.
                </p>
            </section>
        </div>
    )
}

export default Library
