import { Link, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import QuickStart from './docs/QuickStart'
import Sources from './docs/Sources'
import MCPSetup from './docs/MCPSetup'
import GraphAndCLI from './docs/GraphAndCLI'
import Memory from './docs/Memory'
import Skills from './docs/Skills'
import Library from './docs/Library'
import VSCodeExtension from './docs/VSCodeExtension'

const NAV_GROUPS = [
    {
        title: 'First Steps',
        items: [
            { id: 'quick-start', label: 'Quick Start', path: '/docs/quick-start' },
            { id: 'graph-cli', label: 'Graph & CLI', path: '/docs/graph-cli' },
        ]
    },
    {
        title: 'Core Concepts',
        items: [
            { id: 'skills', label: 'AI Tutor & Skills', path: '/docs/skills' },
            { id: 'memory', label: 'Spec Holder (Memory)', path: '/docs/memory' },
            { id: 'sources', label: 'Managing Sources', path: '/docs/sources' },
        ]
    },
    {
        title: 'Integration',
        items: [
            { id: 'vscode-ext', label: 'VS Code Extension', path: '/docs/vscode-extension' },
            { id: 'mcp', label: 'Optional MCP Setup', path: '/docs/mcp' },
            { id: 'library', label: 'Library Packs', path: '/docs/library' },
        ]
    }
]

function DocsLayout() {
    return (
        <div className="min-h-screen bg-obsidian-900 text-slate-200 transition-colors duration-300">
            {/* Top Navigation */}
            <nav className="sticky top-0 z-50 w-full border-b border-dev-border bg-obsidian-900/80 backdrop-blur-md">
                <div className="max-w-[1440px] mx-auto px-4 h-14 flex items-center justify-between font-mono text-sm">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="hover:text-jade-500 transition-colors flex items-center gap-2 text-white">
                            <span className="text-jade-500">✶</span> ~/linggen
                        </Link>
                        <span className="text-obsidian-700">/</span>
                        <span className="text-slate-400">docs</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-slate-400">
                        <a href="https://github.com/linggen/linggen" className="hover:text-jade-500">GitHub</a>
                        <Link to="/pricing" className="hover:text-jade-500">Pricing</Link>
                    </div>
                </div>
            </nav>

            <div className="max-w-[1440px] mx-auto flex gap-0">
                {/* Left Sidebar */}
                <aside className="hidden lg:block w-64 h-[calc(100vh-3.5rem)] sticky top-14 border-r border-dev-border overflow-y-auto py-8 px-6">
                    <div className="space-y-8">
                        {NAV_GROUPS.map((group) => (
                            <div key={group.title}>
                                <h5 className="text-[10px] font-bold uppercase tracking-widest text-obsidian-700 mb-4 font-mono">
                                    {group.title}
                                </h5>
                                <ul className="space-y-1">
                                    {group.items.map((item) => (
                                        <li key={item.id}>
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) => `
                                                    block px-3 py-1.5 rounded-md text-sm transition-all duration-200 font-mono
                                                    ${isActive 
                                                        ? 'bg-jade-500/10 text-jade-500 border-l-2 border-jade-500 rounded-l-none' 
                                                        : 'text-slate-500 hover:text-white hover:bg-obsidian-800'}
                                                `}
                                            >
                                                {({ isActive }) => (
                                                    <>
                                                        {isActive ? '❯ ' : '  '}
                                                        {item.label}
                                                    </>
                                                )}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0 py-12 px-4 md:px-12 lg:px-24">
                    <article className="max-w-3xl prose prose-invert prose-headings:font-display prose-a:text-jade-500 hover:prose-a:text-jade-600 prose-pre:bg-obsidian-800 prose-pre:border prose-pre:border-dev-border">
                        <Routes>
                            <Route index element={<Navigate to="quick-start" replace />} />
                            <Route path="quick-start" element={<QuickStart />} />
                            <Route path="graph-cli" element={<GraphAndCLI />} />
                            <Route path="skills" element={<Skills />} />
                            <Route path="memory" element={<Memory />} />
                            <Route path="sources" element={<Sources />} />
                            <Route path="vscode-extension" element={<VSCodeExtension />} />
                            <Route path="mcp" element={<MCPSetup />} />
                            <Route path="library" element={<Library />} />
                        </Routes>
                    </article>
                </main>

                {/* Right Sidebar (Optional: Page Outline) */}
                <aside className="hidden xl:block w-64 h-[calc(100vh-3.5rem)] sticky top-14 py-12 px-6">
                    <div className="border-l border-dev-border pl-4">
                        <h6 className="text-[10px] font-bold uppercase tracking-widest text-obsidian-700 mb-4 font-mono">
                            Navigation
                        </h6>
                        <ul className="space-y-3">
                            <li className="text-xs text-slate-500 italic">
                                Use the sidebar to browse sections.
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default DocsLayout
