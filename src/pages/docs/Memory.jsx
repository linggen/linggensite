function Memory() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🧠</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Spec Holder (Memory)
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Persistent memory allows Linggen to capture architectural decisions, conventions, 
                    and tribal knowledge anchored directly in your code.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Anchored Memory</h2>
                <p className="text-slate-600 dark:text-slate-400">
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
                    <div key={i} className="p-6 bg-slate-50 dark:bg-obsidian-800 rounded-2xl border border-slate-200 dark:border-dev-border shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">How it Works</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Memories are maintained as Markdown files in <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-dev-border">.linggen/memory/</code>. 
                    Each file contains YAML frontmatter metadata followed by the content. 
                    This makes them version-controllable and shared across your entire team.
                </p>
                <div className="flex gap-4 p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                    <div className="text-2xl">👥</div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 italic font-display">Team Mode</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            By committing memory files to your repo, you ensure every developer (human or AI) follows the same architectural standards.
                        </p>
                    </div>
                </div>
            </section>
            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Pro Tips & Workflow</h2>
                <div className="space-y-8">
                    {/* Tip 1: New Files */}
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-jade-500">✨</span> Starting a New File
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            When you start a fresh file, don't begin from zero. Use the <strong>"Linggen: Pin to Memory"</strong> command in your empty file to anchor common rules immediately.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                '// linggen memory: common_functions.md',
                                '// linggen memory: framework.md',
                                '// linggen memory: log_rule.md',
                                '// linggen memory: time_format.md'
                            ].map((code, i) => (
                                <div key={i} className="bg-obsidian-900 p-3 rounded-lg border border-dev-border font-mono text-[10px] text-jade-500/80">
                                    {code}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tip 2: Existing Code */}
                    <div className="p-6 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-2xl space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-jade-500">🪄</span> The "Gentle Breeze" Workflow
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Add a memory pin directly above an existing code block, then tell your AI:
                        </p>
                        <div className="bg-obsidian-900 p-4 rounded-xl border border-dev-border font-mono text-xs text-jade-500 mb-4 italic">
                            "Review and improve this code based on the anchored memory."
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            The AI will automatically find the related documentation and follow your specific rules. No messy trial-and-error, no repeated explanations—just clean, accurate code that follows your standards, <strong>smooth and effortless as a gentle breeze.</strong>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Memory
