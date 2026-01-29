function Sources() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">📂</span> Infrastructure
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Managing Sources
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Sources are the raw materials for your AI Mentor. Index local folders, uploads, 
                    or remote repos to build a comprehensive knowledge base.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Index via CLI</h2>
                <div className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Run indexing directly from your repo root using the Linggen CLI.
                    </p>
                    <div className="mt-4 space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                        <div>cd your_repo</div>
                        <div>sudo linggen index</div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">File Patterns</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Control which files get indexed using glob patterns. Linggen automatically respects 
                    your <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-dev-border">.gitignore</code>, 
                    but you can further refine context.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-obsidian-700 font-mono">Include</h4>
                        <div className="p-4 bg-obsidian-900 rounded-xl border border-dev-border font-mono text-[10px] text-jade-500">
                            *.ts, *.tsx, *.rs, *.py<br />
                            *.md, *.mdx, *.json
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-obsidian-700 font-mono">Exclude</h4>
                        <div className="p-4 bg-obsidian-900 rounded-xl border border-dev-border font-mono text-[10px] text-slate-500">
                            node_modules/**, dist/**<br />
                            *.map, .git/**, build/**
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Incremental Indexing</h2>
                <div className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Linggen only re-processes files that have changed since the last index operation. 
                        A typical codebase with 10,000 files can be updated in seconds.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Multi-Project Indexing</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Linggen breaks the boundaries of your IDE by indexing multiple projects simultaneously. 
                    This allows you to maintain a global knowledge map across separate repositories, getting rid of the "one window, one context" limitation.
                </p>
                <div className="p-6 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-2xl space-y-4">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="text-jade-500">💡</span> Example: Cross-Repo Workflow
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Imagine you are working on <strong>Project A</strong> which receives messages from <strong>Project B</strong>. 
                        Even if Project B is not open in your current IDE window, you can ask the AI:
                    </p>
                    <div className="bg-obsidian-900 rounded-xl p-4 border border-dev-border font-mono text-xs">
                        <code className="text-jade-500">
                            "Find out how project B sends out messages by using linggen skills"
                        </code>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                        Linggen will automatically bridge the gap, retrieving context from Project B's index to assist you while you code in Project A.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Sources
