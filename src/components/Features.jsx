import { motion } from 'framer-motion'

function Features() {
    const features = [
        {
            icon: '🎯',
            title: 'Documentation-Led Development',
            description: 'In the era of AI coding, your role shifts from implementer to architect. Linggen helps you manage that transition by focusing on documentation.',
            items: [
                'Capture organizational product specifications',
                'Align code to follow product specifications',
                'Prevent "vibe coding" drift'
            ]
        },
        {
            icon: '⚓',
            title: 'Anchored Memory',
            description: 'Anchor decisions directly in code, backed by versioned Markdown that both humans and AI follow.',
            items: [
                'Human-readable CodeLens anchors with inline documentation',
                'Versioned specs for every feature and decision',
                'No repeated prompting required (Linggen does it for you)',
                'Access to the entire codebase and tribal knowledge'
            ]
        },
        {
            icon: '🧠',
            title: 'Team Intelligence',
            description: 'Turn tribal knowledge into actionable skills. Teach your assistant how your team builds, then let it implement within those boundaries.',
            items: [
                'Shared skills across the team',
                'Consistent architectural patterns',
                'Reduced implementation friction'
            ]
        },
        {
            icon: '🔒',
            title: 'Privacy-First & Local',
            description: 'Your design and code stay on your machine. No cloud, no telemetry, no data leaving your device. Built with fast Rust.',
            items: [
                'Fast local Rust backend',
                'Local vector database',
                'macOS & Linux support'
            ]
        },
        {
            icon: '📚',
            title: 'Skill Library',
            description: 'Browse a curated collection of Skills and Policies to instantly upgrade your AI Mentor\'s capabilities.',
            items: [
                'Access high-quality, pre-built skills for common frameworks, coding standards, and documentation workflows maintained by the Linggen team.',
                'Install Skills directly into your project with a single click.',
                'Share Skills across projects to maintain consistency and efficiency.'
            ]
        },
        {
            icon: '🔌',
            title: 'Seamless Ecosystem',
            description: 'Works with your existing AI tools. Optional MCP support for advanced users who need full context retrieval.',
            items: [
                'Cursor, Zed, and Windsurf support',
                'VS Code extension included',
                'Zero-config orchestration'
            ]
        }
    ]

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors" id="get-started">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
                        Built for design-led development with AI
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Anchor intent, teach conventions, and keep your assistant aligned as the codebase evolves.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-10 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-jade-500/40 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-jade-500/5 flex-1 flex flex-col"
                            >
                                <div className="w-16 h-16 bg-jade-500/10 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-jade-500 transition-all duration-500 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight font-display">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed flex-1 font-medium">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[13px] text-slate-600 dark:text-slate-400 font-bold group/item">
                                            <span className="text-jade-500 mt-1 transition-transform group-hover/item:scale-125">✶</span>
                                            <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">{item}</span>
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
