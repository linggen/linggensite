function Architecture() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🏗️</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Architecture
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Linggen is built on three core components that work together to provide AI-powered code understanding and orchestration.
                </p>
            </header>

            <section className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <div className="text-3xl mb-4">🖥️</div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Server</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            The orchestration engine that indexes your codebase and manages knowledge across projects.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">CLI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Command-line interface for server management, project indexing, and skills installation.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <div className="text-3xl mb-4">🔌</div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">VS Code Extension</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            IDE integration providing graph visualization, memory management, and seamless AI tool orchestration.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">The Server</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Linggen server is the core orchestration engine that runs locally or on a remote machine.
                    It indexes your codebases, builds knowledge graphs, and serves as the central hub for all Linggen operations.
                </p>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-obsidian-800/30 rounded-xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Key Responsibilities</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                            <li>• Code indexing and semantic analysis across multiple projects</li>
                            <li>• Knowledge graph construction and dependency mapping</li>
                            <li>• Memory and design decision storage</li>
                            <li>• Context retrieval for AI assistants via MCP or Skills</li>
                            <li>• Web UI hosting for team collaboration</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                        <p className="text-sm text-jade-400 font-medium">
                            <strong>Access:</strong> Web UI at <code className="px-1.5 py-0.5 bg-jade-500/10 rounded font-mono text-xs">http://localhost:8787</code> or your team's server IP
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">The CLI</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The command-line interface provides direct control over the Linggen server and project management.
                    It's the fastest way to perform administrative tasks and manage your development environment.
                </p>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-obsidian-800/30 rounded-xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Common Operations</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                            <li>• Server lifecycle management (<code className="px-1 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">linggen</code>, <code className="px-1 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">linggen stop</code>, <code className="px-1 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">linggen restart</code>)</li>
                            <li>• Manual project indexing and status checks</li>
                            <li>• Skills installation from GitHub repositories</li>
                            <li>• System health diagnostics and troubleshooting</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                        <p className="text-sm text-jade-400 font-medium">
                            <strong>Installation:</strong> Via VS Code command palette or <code className="px-1.5 py-0.5 bg-jade-500/10 rounded font-mono text-xs">curl -fsSL https://linggen.dev/install-cli.sh | bash</code>
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">The VS Code Extension</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    The VS Code extension bridges your editor with the Linggen server, providing rich visual tools
                    and seamless integration with AI coding assistants like Cursor, Windsurf, and Claude Desktop.
                </p>
                <div className="space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-obsidian-800/30 rounded-xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">Features</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                            <li>• Graph visualization of code dependencies and architecture</li>
                            <li>• One-click "Pin to Memory" for design decisions</li>
                            <li>• Cross-project code explanations with full context</li>
                            <li>• Skills and Library Pack browsing and installation</li>
                            <li>• Automatic AI assistant configuration (Cursor, Windsurf, Claude Desktop)</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                        <p className="text-sm text-jade-400 font-medium">
                            <strong>Configuration:</strong> Points to server at <code className="px-1.5 py-0.5 bg-jade-500/10 rounded font-mono text-xs">http://localhost:8787</code> by default, configurable for team servers
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">How They Work Together</h2>
                <div className="p-6 bg-obsidian-900 rounded-2xl border border-dev-border">
                    <div className="space-y-4 text-sm text-slate-300">
                        <div className="flex items-start gap-3">
                            <span className="text-jade-500 font-mono font-bold">1.</span>
                            <p>
                                <strong className="text-white">Server runs locally</strong> or on a team server, continuously indexing and building knowledge graphs
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-jade-500 font-mono font-bold">2.</span>
                            <p>
                                <strong className="text-white">CLI manages the server</strong> lifecycle and performs administrative tasks like installation and indexing
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-jade-500 font-mono font-bold">3.</span>
                            <p>
                                <strong className="text-white">VS Code extension connects</strong> to the server, providing visual tools and orchestrating AI assistants
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-jade-500 font-mono font-bold">4.</span>
                            <p>
                                <strong className="text-white">AI assistants query</strong> the server for context through MCP or Skills, getting precise, project-specific information
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Deployment Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="text-jade-500">💻</span> Local Development
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            Run the server on your local machine with the VS Code extension. Perfect for individual developers.
                        </p>
                        <div className="text-[10px] text-slate-500 dark:text-obsidian-700 font-mono">
                            Server: localhost:8787
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <span className="text-jade-500">🌐</span> Team Server
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            Deploy server on a shared machine, configure VS Code extensions to connect to the team server IP.
                        </p>
                        <div className="text-[10px] text-slate-500 dark:text-obsidian-700 font-mono">
                            Server: team-server-ip:8787
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Architecture
