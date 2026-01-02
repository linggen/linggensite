import { useState } from 'react'

function UsageGuide() {
    const [activeTab, setActiveTab] = useState('quickstart')

    const tabs = [
        { id: 'quickstart', label: '🚀 Quick Start' },
        { id: 'sources', label: '📂 Adding Sources' },
        { id: 'mcp', label: '🔌 MCP Setup' },
        { id: 'memory', label: '🧠 Memory & Prompts' },
    ]

    const content = {
        quickstart: {
            title: 'Quick Start Guide',
            sections: [
                {
                    heading: '1. Install the CLI',
                    content: `Install Linggen CLI with a one-liner, then install the runtime:`,
                    code: `curl -fsSL https://linggen.dev/install-cli.sh | bash
linggen install`
                },
                {
                    heading: '2. Start the Server',
                    content: `Start the Linggen backend server. On first run, it will download the embedding model (~100MB). The server runs at localhost:8787.`,
                    code: `linggen serve`
                },
                {
                    heading: '3. Add Your First Source',
                    content: `Go to the Sources tab and click "Add Source". Choose "Local Folder" and select a project directory. Click "Index" to start building the vector index.`,
                    code: null
                }
            ]
        },
        sources: {
            title: 'Adding & Managing Sources',
            sections: [
                {
                    heading: 'Source Types',
                    content: `Linggen supports multiple source types:`,
                    list: [
                        'Local Folder — Index any directory on your machine',
                        'Uploads — Drag & drop PDFs, docs, and text files',
                        'Git Repo — Coming soon',
                        'Web URL — Coming soon'
                    ]
                },
                {
                    heading: 'File Patterns',
                    content: `Control which files get indexed using glob patterns:`,
                    code: `Include: *.ts, *.tsx, *.md, *.json
Exclude: node_modules/**, *.min.js, dist/**`
                },
                {
                    heading: 'Re-indexing',
                    content: `Click "Update" on any source to re-index after changes. Linggen uses incremental indexing for speed.`,
                    code: null
                }
            ]
        },
        mcp: {
            title: 'MCP Server Setup',
            sections: [
                {
                    heading: 'Automatic Connection',
                    content: `The Linggen VS Code extension uses the Cursor API to register the MCP server automatically. It doesn't modify your mcp.json file and requires zero manual configuration.`,
                    code: null
                },
                {
                    heading: 'Manual Connection (No Extension)',
                    content: `If you don't use the VS Code extension, you can manually add Linggen to Cursor Settings → MCP → Add Server:`,
                    code: `Name: linggen
URL: http://localhost:8787/mcp/sse`
                },
                {
                    heading: 'Latest Tools',
                    content: `The MCP server provides specialized tools for context retrieval:`,
                    list: [
                        'search_codebase — Search for relevant code/doc snippets',
                        'memory_search_semantic — Recall tribal knowledge via vector search',
                        'memory_fetch_by_meta — Retrieve anchored memories by ID',
                        'list_sources — View available indexed sources',
                        'enhance_prompt — Auto-inject context into prompts'
                    ]
                }
            ]
        },
        memory: {
            title: 'Persistent Memory & Prompts',
            sections: [
                {
                    heading: 'Anchored Memory (v0.4.0)',
                    content: `Pin important code snippets to create "anchors". These are stored as Markdown in .linggen/memory and linked via code comments.`,
                    code: `// linggen memory: auth-flow-9d2f | Auth implementation rules`
                },
                {
                    heading: 'Unified Context',
                    content: `Replace fragmented files like claude.md or cursor.rules with centralized anchored memories that both humans and LLMs can maintain.`,
                    code: null
                },
                {
                    heading: 'Frequent Prompts',
                    content: `Use templates like "Init my day" or "Save summary to memory" to automate repetitive AI workflows.`,
                    code: null
                }
            ]
        }
    }

    const currentContent = content[activeTab]

    return (
        <section className="guide-section" id="docs">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    Documentation
                    <span className="title-decoration">◆</span>
                </h2>
                <p className="section-description">
                    Learn how to get the most out of Linggen
                </p>

                <div className="guide-container">
                    <div className="guide-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`guide-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="guide-content">
                        <h3 className="guide-title">{currentContent.title}</h3>
                        
                        {currentContent.sections.map((section, index) => (
                            <div key={index} className="guide-card">
                                <h4>{section.heading}</h4>
                                <p>{section.content}</p>
                                
                                {section.list && (
                                    <ul className="guide-list">
                                        {section.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                                
                                {section.code && (
                                    <pre className="guide-code">
                                        <code>{section.code}</code>
                                    </pre>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UsageGuide
