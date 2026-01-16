function Skills() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🧩</span> Core Concepts
                </div>
                <h1 className="text-4xl font-bold font-display text-white">
                    AI Tutor & Skills
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
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
                    <div key={i} className="p-6 bg-obsidian-800/50 rounded-2xl border border-dev-border">
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">What is a Skill?</h2>
                <p className="text-slate-400">
                    A skill is a Markdown file under <code className="px-1.5 py-0.5 bg-obsidian-800 rounded font-mono text-sm text-white">.linggen/skills/</code>. 
                    Linggen automatically prioritizes these skills to guide the AI's behavior and context retrieval.
                </p>
                <div className="p-4 bg-jade-500/5 border-l-4 border-jade-500 rounded-r-xl">
                    <p className="text-sm text-jade-400 font-medium">
                        <strong>Rule of thumb:</strong> Skills improve process quality (how it works), while your request defines what to build.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">How to Use</h2>
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
                            <p className="text-slate-400">{step}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Skills
