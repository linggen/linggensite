import { VSCODE_EXTENSION_URL } from '../../constants'

function GraphAndCLI() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🗺️</span> Ecosystem
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Graph View & CLI
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Linggen is CLI-first: run a local server, index sources, and visualize your architecture in VS Code.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">VS Code Extension</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The official extension provides seamless integration between your editor and the Linggen backend. 
                    Manage your project's knowledge base without leaving your IDE.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: 'System Map', desc: 'Visualize file and module dependencies. Answer "what depends on what?" before refactors.' },
                        { title: 'Cross-Project Explain', desc: 'Right-click code to get insights using knowledge from all indexed projects.' },
                        { title: 'Pin to Memory', desc: 'Highlight code and anchor it directly to .linggen/memory with one click.' },
                        { title: 'Library Access', desc: 'Browse and install Skill Packs directly from the Command Palette.' }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-slate-50 dark:bg-obsidian-800 rounded-2xl border border-slate-200 dark:border-dev-border shadow-sm group hover:border-jade-500/30 transition-colors">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="text-jade-500 italic font-mono text-xs">0{i+1}</span> {feature.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">CLI Reference</h2>
                <div className="space-y-4">
                    {[
                        { cmd: 'linggen', desc: 'Start the background orchestration service' },
                        { cmd: 'linggen install', desc: 'Install or update the core runtime' },
                        { cmd: 'linggen index .', desc: 'Index the current directory manually' },
                        { cmd: 'linggen status', desc: 'Check health and indexing progress' }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-obsidian-800/50 rounded-xl border border-slate-200 dark:border-dev-border group hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors">
                            <code className="text-sm font-mono text-jade-500 font-bold">{item.cmd}</code>
                            <span className="text-xs text-slate-500 dark:text-obsidian-700 font-medium italic group-hover:text-slate-700 dark:group-hover:text-slate-400">{item.desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="p-6 bg-obsidian-900 rounded-2xl border border-dev-border">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-jade-500">💡</span>
                    <span className="text-sm font-bold text-white font-display">Pro Tip: Blast Radius</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                    Use the Graph View as a "blast radius" tool: find a module node, then check incoming/outgoing edges 
                    to identify potential regressions before committing changes.
                </p>
            </div>
        </div>
    )
}

export default GraphAndCLI
