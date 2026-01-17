import { VSCODE_EXTENSION_URL } from '../../constants'

function VSCodeExtension() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🔌</span> Integration
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    VS Code Extension
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Linggen is your AI Tutor and Orchestrator. The VS Code extension automates context management, skill configuration, and project knowledge.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Quickstart (17 seconds)</h2>
                <div className="space-y-4">
                    {[
                        { step: 'Install CLI', desc: 'Run "Linggen: Install Linggen CLI" from the Command Palette.' },
                        { step: 'Start Linggen', desc: 'Run "linggen" in your terminal.' },
                        { step: 'Index Project', desc: 'Open your project and run "Linggen: Index Current Project".' },
                        { step: 'Explore', desc: 'Right-click any file → "Linggen: Open Graph".' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-jade-500 text-white text-xs font-bold flex items-center justify-center font-mono">
                                {i + 1}
                            </span>
                            <div className="text-sm">
                                <strong className="text-slate-900 dark:text-white block">{item.step}</strong>
                                <span className="text-slate-600 dark:text-slate-400">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Core Commands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { cmd: 'Linggen: Install Linggen CLI', desc: 'Automated installer steps.' },
                        { cmd: 'Linggen: Index Current Project', desc: 'Builds the knowledge map.' },
                        { cmd: 'Linggen: Explain Across Projects', desc: 'Context-aware markdown explanations.' },
                        { cmd: 'Linggen: Pin to Memory', desc: 'Anchor code to architectural decisions.' },
                        { cmd: 'Linggen: Library', desc: 'Install skills or policies.' },
                        { cmd: 'Linggen: Show Graph', desc: 'Visualize dependencies.' }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-obsidian-800/50 rounded-xl border border-slate-200 dark:border-dev-border group hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors">
                            <code className="text-xs font-mono text-jade-500 font-bold block mb-1">{item.cmd}</code>
                            <p className="text-xs text-slate-600 dark:text-slate-400 italic">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">AI Orchestration (Cursor)</h2>
                <div className="p-6 bg-jade-500/5 border border-jade-500/20 rounded-2xl">
                    <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
                        If you're using <strong>Cursor</strong>, Linggen automatically orchestrates the connection. 
                        No manual MCP configuration needed—it handles the technical handshake instantly.
                    </p>
                </div>
            </section>

            <section className="space-y-6 text-center pt-8">
                <a 
                    href={VSCODE_EXTENSION_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                    Install from Marketplace ❯
                </a>
            </section>
        </div>
    )
}

export default VSCodeExtension
