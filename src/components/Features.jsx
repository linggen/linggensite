import { motion } from 'framer-motion'

function Features() {
    const features = [
        {
            icon: '🔒',
            title: 'Privacy-First & Local',
            description: 'Your code stays on your machine. No cloud, no telemetry, no data leaving your device.',
            items: [
                'Fast Rust backend (local-first)',
                'Local vector database',
                'macOS & Linux versions published'
            ]
        },
        {
            icon: '🧩',
            title: 'AI Mentor & Skills',
            description: 'The default way to use Linggen. Faster, token-efficient instruction sets that act as a mentor for your repo’s “way of working”.',
            items: [
                'Saves tokens by providing targeted context',
                'AI Mentor: guides you through project architecture',
                'Share curated packs from Linggen Library'
            ]
        },
        {
            icon: '🔗',
            title: 'Design Anchor (Memory)',
            description: 'Stop fighting fragmented AI rule files. Anchor your original design intent directly in code, ensuring the AI stays aligned with your vision.',
            items: [
                'Versioned specs for your features',
                'Alignment: prevent "code drift" during AI refactors',
                'Human-readable (CodeLens + inline anchors)'
            ]
        },
        {
            icon: '🔌',
            title: 'Optional MCP Setup',
            description: 'For advanced users: expose Linggen context to IDE assistants via MCP. Disabled by default to save resources.',
            items: [
                'Enable in extension settings',
                'Works with Cursor, Zed, and Windsurf',
                'Extensible for custom MCP clients'
            ]
        },
        {
            icon: '🧠',
            title: 'Cross-Project Context',
            description: 'Maintain separate context for each project. Switch codebases without losing relevant info.',
            items: [
                'Separate project context per workspace',
                'Automatic context switching',
                'Fast local vector retrieval'
            ]
        },
        {
            icon: '🗺️',
            title: 'Graph View',
            description: 'Explore a dependency graph to understand “what depends on what” before refactors or onboarding.',
            items: [
                'File/module dependency graph',
                'Visual system map for large codebases',
                'Jump to code from graph nodes'
            ]
        }
    ]

    return (
        <section className="py-24 bg-white dark:bg-obsidian-900" id="get-started">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                        Built for Production AI Workflows
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Linggen removes the friction of managing AI context, so you can focus on building features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-slate-50 dark:bg-obsidian-800 rounded-2xl border border-slate-200 dark:border-dev-border hover:border-jade-500/50 transition-colors shadow-sm flex-1 flex flex-col"
                            >
                                <div className="text-4xl mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
                                            <span className="text-jade-500 mt-0.5">✶</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
