function Skills() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🧩</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    Skill is all you need
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Skills are how Linggen helps your coding AI start faster and stay aligned with your project.
                    Linggen itself ships as a core skill, and you can add more skills to teach your assistant how to work in your repo.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: 'Fast Onboarding', desc: 'Teach a coding AI how your project works without re-explaining everything each session.' },
                    { title: 'Aligned Output', desc: 'Skills anchor conventions, constraints, and “how we do things here” so changes fit.' },
                    { title: 'Composable', desc: 'Install only what you need (e.g. code review, framework best practices, docs standards).' },
                    { title: 'Team-Shareable', desc: 'Customize skills for your repo and share them with teammates for consistent AI behavior.' }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 dark:bg-obsidian-800/50 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">What is a Skill?</h2>
                <p className="text-slate-600 dark:text-slate-400">
                    A skill is a Markdown instruction set that your AI loads during a session. By default, Linggen installs its core skill to
                    <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-dev-border">.claude/skills/</code>
                    so your assistant can use Linggen features (search, memory, policies, and more) without you managing any plumbing.
                </p>
                <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                    <p className="text-sm text-jade-400 font-medium">
                        <strong>Rule of thumb:</strong> Your request defines what to do. Skills define how to do it in this project.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Set Up (CLI or VS Code)</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    You can set up skills from the terminal, or let the VS Code extension automatically set everything up for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">⌨️</span> Terminal (CLI-first)
                        </h4>
                        <div className="space-y-4">
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-4 text-xs font-mono text-jade-500 font-bold">
                                curl -fsSL https://linggen.dev/install-cli.sh | bash
                            </div>
                            <div className="bg-obsidian-900 rounded-xl border border-dev-border p-4 text-xs font-mono text-white">
                                <span className="text-jade-500">❯</span> linggen init
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">🧩</span> VS Code (recommended)
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Install the Linggen VS Code extension. It automatically configures skills and keeps them in sync for your AI sessions.
                        </p>
                       
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">How Skills Get Used</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Once Linggen is installed, you can simply tell your AI to use it. Your assistant loads the available skills and applies them during the session.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">▶</span> Start Linggen
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ask your AI: <span className="font-mono text-jade-500">"start linggen"</span> or <span className="font-mono text-jade-500">"install linggen"</span>.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">🧠</span> Keep Sessions Consistent
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Skills teach your assistant your repo’s conventions, constraints, and workflows so answers stay consistent across sessions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Example: Install a Code Review Skill</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    You can “ask for a skill” in natural language. Your AI searches the Linggen skill registry, shows options, then installs the one you choose.
                </p>
                <div className="bg-obsidian-900 rounded-2xl border border-dev-border p-6 text-sm font-mono text-white space-y-2">
                    <div><span className="text-jade-500">You</span>: Lookup a code review skill by Linggen</div>
                    <div><span className="text-jade-500">AI</span>: I found a few options. Which one do you want to install?</div>
                    <div><span className="text-jade-500">You</span>: the first one</div>
                    <div><span className="text-jade-500">AI</span>: Installed. Say “review code” and I’ll use it.</div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Customize & Share Skills</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Skills are just Markdown, so you can edit them to fit your project and share them with your team.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">🧰</span> Library UI (Local)
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                            Open <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">http://localhost:8787</code>, click <strong>Library</strong>,
                            then download a skill, edit it, and share it with your team.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">🧩</span> VS Code Library
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            In VS Code, run <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-[10px]">Linggen: Library</code> to browse skills, policies,
                            and project documents—a simple way to keep a team’s tooling and conventions consistent.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Automatic IDE Integration</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Once you install a skill, the Linggen extension automatically handles the technical handshake with your AI coding tool. 
                    It configures the necessary entry points so your assistant knows exactly how to access its new capabilities.
                </p>
                <div className="space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400">Integrated paths include:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-obsidian-900 rounded-xl p-4 border border-dev-border">
                            <div className="text-[10px] uppercase font-bold text-obsidian-700 font-mono mb-2">Cursor / Windsurf</div>
                            <code className="text-jade-500 text-xs">.cursor/rules/linggen.md</code>
                        </div>
                        <div className="bg-obsidian-900 rounded-xl p-4 border border-dev-border">
                            <div className="text-[10px] uppercase font-bold text-obsidian-700 font-mono mb-2">Claude Desktop</div>
                            <code className="text-jade-500 text-xs">.claude/skills/linggen</code>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                        Your AI assistant will automatically detect and utilize these skills, applying your team's conventions to every response.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">How to Use</h2>
                <div className="space-y-4">
                    {[
                        'Install Linggen (CLI: `linggen init`, or VS Code extension for automatic setup).',
                        'Tell your AI to start Linggen and follow the project skills.',
                        'Ask for a skill when you need one (e.g. “lookup a code review skill”), pick an option, then use it (e.g. “review code”).'
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-jade-500 text-white text-xs font-bold flex items-center justify-center">
                                {i + 1}
                            </span>
                            <p className="text-slate-600 dark:text-slate-400">{step}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Skills
