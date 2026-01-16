function Memory() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🧠</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-white">
                    Spec Holder (Memory)
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    Persistent memory allows Linggen to capture architectural decisions, conventions, 
                    and tribal knowledge anchored directly in your code.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Anchored Memory</h2>
                <p className="text-slate-400">
                    Use the VS Code extension's <strong>"Pin to Memory"</strong> command to anchor architectural decisions or specs directly in your code. 
                    Linggen creates a lightweight comment anchor that links to a Markdown file.
                </p>
                <div className="bg-obsidian-900 rounded-xl p-4 border border-dev-border font-mono text-sm">
                    <code className="text-jade-500 leading-relaxed whitespace-pre-wrap">
                        // linggen memory: auth-flow.md | Authentication Logic Spec
                    </code>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Human Readable', desc: 'Developers see exactly what rules apply via CodeLens and hint text.' },
                    { title: 'AI Retrieval', desc: 'Assistants fetch the exact spec linked to the code they are editing.' },
                    { title: 'Centralized', desc: 'Replaces scattered rule files with one versioned source of truth.' }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-obsidian-800 rounded-2xl border border-dev-border shadow-sm">
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">How it Works</h2>
                <p className="text-slate-400 leading-relaxed">
                    Memories are maintained as Markdown files in <code className="px-1.5 py-0.5 bg-obsidian-800 rounded font-mono text-sm text-white">.linggen/memory/</code>. 
                    Each file contains YAML frontmatter metadata followed by the content. 
                    This makes them version-controllable and shared across your entire team.
                </p>
                <div className="flex gap-4 p-6 bg-obsidian-800/50 rounded-2xl border border-dev-border">
                    <div className="text-2xl">👥</div>
                    <div>
                        <h4 className="font-bold text-white mb-1 italic font-display">Team Mode</h4>
                        <p className="text-sm text-slate-400">
                            By committing memory files to your repo, you ensure every developer (human or AI) follows the same architectural standards.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Memory
