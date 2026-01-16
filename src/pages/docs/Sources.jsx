function Sources() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">📂</span> Infrastructure
                </div>
                <h1 className="text-4xl font-bold font-display text-white">
                    Managing Sources
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    Sources are the raw materials for your AI Mentor. Index local folders, uploads, 
                    or remote repos to build a comprehensive knowledge base.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">File Patterns</h2>
                <p className="text-slate-400 leading-relaxed">
                    Control which files get indexed using glob patterns. Linggen automatically respects 
                    your <code className="px-1.5 py-0.5 bg-obsidian-800 rounded font-mono text-sm text-white">.gitignore</code>, 
                    but you can further refine context.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-obsidian-700 font-mono">Include</h4>
                        <div className="p-4 bg-obsidian-900 rounded-xl border border-dev-border font-mono text-[10px] text-jade-500">
                            *.ts, *.tsx, *.rs, *.py<br />
                            *.md, *.mdx, *.json
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-obsidian-700 font-mono">Exclude</h4>
                        <div className="p-4 bg-obsidian-900 rounded-xl border border-dev-border font-mono text-[10px] text-slate-500">
                            node_modules/**, dist/**<br />
                            *.map, .git/**, build/**
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Incremental Indexing</h2>
                <div className="p-6 bg-obsidian-800/50 rounded-2xl border border-dev-border">
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Linggen only re-processes files that have changed since the last index operation. 
                        A typical codebase with 10,000 files can be updated in seconds.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Supported Types</h2>
                <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Rust', 'Python', 'Go', 'React', 'Markdown', 'PDF', 'Docx', 'YAML', 'TOML'].map((type) => (
                        <span key={type} className="px-3 py-1 bg-obsidian-800 border border-dev-border rounded-full text-[10px] font-bold text-slate-400 font-mono uppercase tracking-tighter">
                            {type}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Sources
