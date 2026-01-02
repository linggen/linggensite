function Features() {
    const features = [
        {
            icon: '🔒',
            title: 'Privacy-First & Local',
            description: 'Your code stays on your machine. No cloud, no telemetry, no data leaving your device.',
            items: [
                'macOS ; Windows & Linux coming soon',
                'Fast Rust backend (local-first)',
                'Local vector database',
                'Bring your own LLM via MCP clients'
            ]
        },
        {
            icon: '🧠',
            title: 'Cross-Project Context',
            description: 'Maintain separate context for each project. Switch between codebases without losing relevant info—perfect for developers juggling multiple repos.',
            items: [
                'Separate project context per workspace',
                'Expose relevant files to MCP assistants',
                'Local vector indexing for fast retrieval',
                'Automatic context switching when you change projects'
            ]
        },
        {
            icon: '🔗',
            title: 'Anchored Memory (Maintainable)',
            description: 'Stop fighting fragmented AI rule files. Anchor decisions and conventions directly in code, backed by versioned Markdown in `.linggen/memory`.',
            items: [
                'Readable by humans (CodeLens + inline anchors)',
                'LLM retrieves exact memory via anchor ID',
                'YAML frontmatter metadata (tags, title, IDs)',
                'Works across tools: Cursor / Claude / agent setups'
            ]
        },
        {
            icon: '🔌',
            title: 'MCP Integration (Cursor/Zed/Windsurf)',
            description: 'Expose Linggen context to IDE assistants via MCP—one endpoint, all your sources.',
            items: [
                'Built-in MCP server at localhost:8787',
                'Works with Cursor out of the box',
                'Team support: share one server across devs',
                'Extensible for other MCP-compatible tools'
            ]
        },
        {
            icon: '🗺️',
            title: 'Graph View for Onboarding',
            description: 'Explore a dependency graph to understand “what depends on what” before refactors or onboarding.',
            items: [
                'File/module dependency graph per repo',
                'Visual system map for large codebases',
                'Explore + jump to code from graph nodes',
                'Perfect for onboarding new team members'
            ]
        },
        {
            icon: '⌨️',
            title: 'CLI-first Indexing & Updates',
            description: 'A CLI-first workflow to run Linggen anywhere, index repos, and keep sources up to date.',
            items: [
                'Start server: `linggen start`',
                'Index projects: `linggen index`',
                'Fast updates: incremental indexing by default',
                'Jobs/status: `linggen status`',
                'Install/update: `linggen install` / `linggen update`'
            ]
        }
    ]

    return (
        <section className="features-section" id="get-started">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    Core Features
                    <span className="title-decoration">◆</span>
                </h2>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <ul className="feature-list">
                                {feature.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
