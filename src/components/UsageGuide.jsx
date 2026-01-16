import { useState } from 'react'
import { motion } from 'framer-motion'

function UsageGuide() {
    const [activeTab, setActiveTab] = useState('quickstart')

    const tabs = [
        { id: 'quickstart', label: '🚀 Quick Start' },
        { id: 'sources', label: '📂 Adding Sources' },
        { id: 'mcp', label: '🔌 Optional MCP' },
        { id: 'memory', label: '🧠 Memory & Library' },
    ]

    const content = {
        quickstart: {
            title: 'Quick Start Guide',
            sections: [
                {
                    heading: '1. Install the CLI',
                    content: `Install Linggen CLI with a one-liner, then install the runtime:`,
                    code: `curl -fsSL https://linggen.dev/install-cli.sh | bash\nlinggen install`
                },
                {
                    heading: '2. Start the Server',
                    content: `Start the Linggen backend server. On first run, it will download the embedding model (~100MB).`,
                    code: `linggen serve`
                },
                {
                    heading: '3. Add Your First Source',
                    content: `Index a project directory to start building the local vector index.`,
                    code: `linggen index .`
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
                        'Git Repo — Index remote repositories directly',
                        'Web URL — Extract knowledge from document sites'
                    ]
                },
                {
                    heading: 'File Patterns',
                    content: `Control which files get indexed using glob patterns:`,
                    code: `Include: *.ts, *.tsx, *.md, *.json\nExclude: node_modules/**, *.min.js, dist/**`
                }
            ]
        },
        mcp: {
            title: 'Optional MCP Setup',
            sections: [
                {
                    heading: 'Enabling MCP',
                    content: `By default, Linggen uses Skills for a faster, token-saving experience. If you need full MCP integration, you can enable it in the VS Code extension settings.`,
                    code: null
                },
                {
                    heading: 'Automatic Connection',
                    content: `Once enabled, the Linggen extension registers the server automatically with Cursor/Zed via the MCP API.`,
                    code: null
                },
                {
                    heading: 'Manual Connection',
                    content: `Add Linggen manually to your IDE's MCP settings:`,
                    code: `URL: http://localhost:8787/mcp/sse`
                }
            ]
        },
        memory: {
            title: 'Persistent Memory & Library',
            sections: [
                {
                    heading: 'Spec Holder (Memory)',
                    content: `Pin important code snippets to create "anchors". These are stored as Markdown in .linggen/memory and linked via code comments.`,
                    code: `// linggen memory: auth-flow.md | Auth rules`
                },
                {
                    heading: 'Library (Skills & Policies)',
                    content: `Browse curated packs and install them into your repo via the Command Palette.`,
                    code: `🌀 Linggen: Library`
                }
            ]
        }
    }

    const currentContent = content[activeTab]

    return (
        <section className="py-24 bg-white dark:bg-obsidian-900" id="docs">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                        Getting Started
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400">
                        Everything you need to know to master AI orchestration.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                                    activeTab === tab.id
                                        ? 'bg-jade-500 text-white shadow-lg shadow-jade-500/20'
                                        : 'bg-slate-50 dark:bg-obsidian-800 text-slate-500 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-8 bg-slate-50 dark:bg-obsidian-800/50 rounded-3xl border border-slate-100 dark:border-dev-border min-h-[400px]"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-display">
                            {currentContent.title}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {currentContent.sections.map((section, index) => (
                                <div key={index} className="space-y-4">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-jade-500 font-mono flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-jade-500 rounded-full" />
                                        {section.heading}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {section.content}
                                    </p>
                                    
                                    {section.list && (
                                        <ul className="space-y-2">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                                    <span className="text-jade-500">✶</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    
                                    {section.code && (
                                        <div className="bg-obsidian-900 rounded-xl p-4 border border-dev-border font-mono text-xs overflow-x-auto shadow-inner">
                                            <code className="text-jade-500 leading-relaxed whitespace-pre-wrap">
                                                {section.code}
                                            </code>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default UsageGuide
