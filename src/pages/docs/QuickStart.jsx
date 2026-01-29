import { VSCODE_EXTENSION_URL } from '../../constants'

function QuickStart() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🚀</span> First Steps
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Quick Start Guide
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Get up and running with Linggen in less than two minutes.
                </p>
            </header>

            <section className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                        <span className="w-8 h-8 rounded-full bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 flex items-center justify-center text-sm font-mono font-bold">1</span>
                        Choose Your Setup
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Pick the path that matches how you work: CLI-first or VS Code-first.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                        <span className="w-8 h-8 rounded-full bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 flex items-center justify-center text-sm font-mono font-bold">2</span>
                        CLI Setup (3 Steps)
                    </h3>
                    <div className="space-y-5">
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">Step 1</p>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-6 text-sm font-mono text-jade-500 font-bold">
                                curl -fsSL https://linggen.dev/install-cli.sh | bash
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">Step 2</p>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-6 text-sm font-mono text-white">
                                <span className="text-jade-500">❯</span> linggen init
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">Step 3 (example)</p>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-6 text-sm font-mono text-white">
                                Ask your AI: <span className="text-jade-500">"install linggen"</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 dark:text-white">
                        <span className="w-8 h-8 rounded-full bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 flex items-center justify-center text-sm font-mono font-bold">3</span>
                        VS Code Setup (2 Steps)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Preferred if you live inside VS Code.
                    </p>
                    <div className="space-y-5">
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">Step 1</p>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-6 text-sm font-mono text-white">
                                Install the Linggen extension
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">Step 2</p>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border overflow-hidden">
                                <div className="bg-obsidian-800 px-4 py-2 text-[10px] uppercase font-bold text-obsidian-700 font-mono">VS Code Command</div>
                                <pre className="p-4 text-sm font-mono text-white">
                                    Linggen: Install/update linggen(local)
                                </pre>
                            </div>
                            <p className="text-xs text-obsidian-700 italic mt-2">
                                Or tell your AI: <span className="text-jade-500/80">install linggen</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-8 bg-jade-500/5 rounded-3xl border border-jade-500/20">
                <h4 className="text-jade-500 font-display font-bold mb-4">Pro Tip: VS Code Integration</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Install the official extension to unlock Graph View and one-click "Pin to Memory" features.
                </p>
                <a
                    href={VSCODE_EXTENSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-jade-500 text-white rounded-lg font-bold text-sm hover:scale-105 transition-transform"
                >
                    Get the Extension ❯
                </a>
            </section>
        </div>
    )
}

export default QuickStart
