function Features() {
    const features = [
        {
            icon: '🧠',
            title: 'Project Memory (RAG)',
            description: 'Index code + docs locally and retrieve the right context for you and your AI tools.',
            items: [
                'Semantic search across all your files',
                'Vector embeddings stored locally',
                'Automatic chunking & indexing',
                'Works offline once models downloaded'
            ]
        },
        {
            icon: '🗺️',
            title: 'Graph View (System Map)',
            description: 'Explore a dependency graph to understand “what depends on what” before refactors or onboarding.',
            items: [
                'File/module dependency graph per source',
                'Zoom/search/filter like an IDE',
                'Spot hotspots and blast radius quickly',
                'Built for architecture + change planning'
            ]
        },
        {
            icon: '⌨️',
            title: 'CLI + Local Server',
            description: 'A CLI-first workflow to install, run, index, and check status—works for desktop or team servers.',
            items: [
                'Start server: `linggen serve`',
                'Index projects: `linggen index <path>`',
                'Jobs/status: `linggen status`',
                'Install/update: `linggen install` / `linggen update`'
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
            icon: '🔒',
            title: 'Privacy-First & Local',
            description: 'Your code stays on your machine. No cloud, no telemetry, no data leaving your device.',
            items: [
                'macOS desktop app (beta)',
                'High-performance Rust backend',
                'Local LanceDB vector store',
                'Windows & Linux coming soon'
            ]
        }
    ]

    return (
        <section className="features-section" id="features">
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
