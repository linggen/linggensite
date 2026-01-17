function Skills() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🧩</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white">
                    AI Tutor & Skills
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                    Skills are the default way to use Linggen. They provide project-scoped instruction sets 
                    that tell your AI assistant how to work in this repo, acting as an AI Tutor while saving tokens.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: 'Token Efficiency', desc: 'Targeted instructions reduce the overhead of massive context windows.' },
                    { title: 'Instant Speed', desc: 'No complex MCP queries; skills are injected directly into the orchestration layer.' },
                    { title: 'Zero Config', desc: 'Works out of the box in v0.6.0 without manual MCP setup.' },
                    { title: 'AI Mentor', desc: 'Skills capture "how we work" here, helping the AI guide you through the project.' }
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
                    A skill is a Markdown file under <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-obsidian-800 rounded font-mono text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-dev-border">.linggen/skills/</code>. 
                    Linggen automatically prioritizes these skills to guide the AI's behavior and context retrieval.
                </p>
                <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                    <p className="text-sm text-jade-400 font-medium">
                        <strong>Rule of thumb:</strong> Skills improve process quality (how it works), while your request defines what to build.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">The Linggen Library</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Linggen provides a centralized <strong>Library</strong>—a store for curated Skills and Policies designed for individual and team users. 
                    Using the VS Code extension, you can browse official skills, find what fits your workflow, and install them into your project with a single click.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">🏛️</span> Official Skills
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Access high-quality, pre-built skills for common frameworks, coding standards, and documentation workflows maintained by the Linggen team.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800/30 rounded-2xl border border-slate-200 dark:border-dev-border">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <span className="text-jade-500">👥</span> Team Sharing
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Create your own custom skills and share them across your organization to ensure every developer (and AI) follows the same project conventions.
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
                        'Install the Linggen VS Code extension.',
                        'The extension automatically creates and manages your .linggen/skills/ directory.',
                        'Ask your AI to "follow the project skills" for any task, or install Packs from the Library.'
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
