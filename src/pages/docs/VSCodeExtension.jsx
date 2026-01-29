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
                    Linggen is your AI Mentor and Orchestrator. The VS Code extension automates context management, skill configuration, and project knowledge.
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
                        { cmd: 'Linggen: Browse Online Skills', desc: 'Browse, search, and install community skills from GitHub.' },
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
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Online Skills Registry</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Browse, search, and install community skills directly from the extension. The online skills registry
                    provides access to a growing collection of skills hosted on GitHub.
                </p>
                <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                        <span className="text-jade-500">🌀</span> How It Works
                    </h4>
                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p>• Browse the public registry from the VS Code command palette or web UI</p>
                        <p>• Install skills with automatic version tracking and dependency management</p>
                        <p>• Skills are downloaded to <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">.claude/skills/</code> in your workspace</p>
                        <p>• The registry is a catalog snapshot—skills remain hosted on GitHub, not by Linggen</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Extension Settings</h2>
                <div className="space-y-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
                            <span className="text-jade-500">🌐</span> Backend: Http Url
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Defaults to <code>http://localhost:8787</code> for local development.
                        </p>
                        <div className="p-4 bg-slate-900 dark:bg-obsidian-900 rounded-xl border border-dev-border/50">
                            <p className="text-[11px] text-slate-200 dark:text-slate-400 leading-relaxed">
                                <strong className="text-jade-400 dark:text-jade-500 font-bold uppercase tracking-widest mr-2">Team Mode:</strong>
                                If your team uses a centralized Linggen server, change this to the remote IP or domain of your central instance to share knowledge across the team.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
                            <span className="text-amber-500">🔌</span> Mcp: Enabled (Legacy Mode)
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            A legacy compatibility mode for standard MCP support.
                        </p>
                        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-xl">
                            <p className="text-[11px] text-amber-900 dark:text-amber-200/80 leading-relaxed font-medium">
                                <strong className="uppercase tracking-widest mr-2">Compatibility:</strong>
                                Use this if your AI assistant struggles with the modern Skills-based workflow. While it costs more tokens, it provides broader compatibility with standard MCP clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VSCodeExtension
