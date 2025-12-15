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
            title: 'Cross-Project Memory',
            description: 'Maintain separate memories for each project. Switch between codebases without losing context—perfect for developers juggling multiple repos.',
            items: [
                'Separate project memories per workspace',
                'Semantic search across all indexed projects',
                'Vector embeddings stored locally',
                'Automatic context switching when you change projects'
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
                'Search + jump to code from graph nodes',
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
        },
        {
            icon: '📝',
            title: 'Doc-First Workflow',
            description: 'Document your projects with the built-in markdown editor. Capture decisions, architecture notes, and gotchas—then let AI use this context.',
            items: [
                'Built-in markdown editor for project docs',
                'Link documentation to code via graph',
                'Auto-generate project profiles from code',
                'Export LLM-ready briefs for implementation'
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
