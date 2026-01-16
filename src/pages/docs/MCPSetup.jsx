function MCPSetup() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                    <span className="p-1 bg-jade-500/10 rounded">🔌</span> Integration
                </div>
                <h1 className="text-4xl font-bold font-display text-white">
                    Optional MCP Setup
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                    For advanced context retrieval, you can enable MCP to connect Linggen to AI coding tools 
                    like Cursor, Zed, and Windsurf.
                </p>
            </header>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Enabling MCP</h2>
                <div className="p-6 bg-amber-900/10 border-l-4 border-amber-500 rounded-r-2xl">
                    <p className="text-sm text-amber-200 leading-relaxed">
                        In the latest version, MCP is <strong>disabled by default</strong> to optimize for speed 
                        and token usage via the Skills workflow.
                    </p>
                </div>
                
                <ol className="space-y-4">
                    {[
                        'Open VS Code Settings.',
                        'Search for "Linggen: Enable MCP".',
                        'Check the box to start the local MCP server.',
                        'The extension will automatically register the server with Cursor/Zed.'
                    ].map((step, i) => (
                        <li key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-jade-500 text-white text-xs font-bold flex items-center justify-center font-mono">
                                {i + 1}
                            </span>
                            <p className="text-slate-400 text-sm">{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Manual Connection</h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                    If you prefer not to use the VS Code extension, add Linggen manually to your IDE's MCP configuration:
                </p>
                <div className="bg-obsidian-900 rounded-xl border border-dev-border p-6">
                    <pre className="text-[10px] md:text-xs font-mono text-white leading-relaxed overflow-x-auto">
                        <code>{`{
  "mcpServers": {
    "linggen": {
      "url": "http://localhost:8787/mcp/sse"
    }
  }
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold font-display text-white">Advanced Tools</h2>
                <table className="w-full text-left text-xs">
                    <thead className="bg-obsidian-800/50">
                        <tr>
                            <th className="px-4 py-3 font-bold font-mono text-jade-500 uppercase tracking-widest">Tool</th>
                            <th className="px-4 py-3 font-bold font-mono text-obsidian-700 uppercase tracking-widest">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-dev-border">
                        {[
                            { name: 'search_codebase', desc: 'Semantic search across all sources' },
                            { name: 'enhance_prompt', desc: 'Auto-inject relevant context' },
                            { name: 'memory_fetch', desc: 'Retrieve anchored spec content' },
                            { name: 'list_library', desc: 'Browse available Skill Packs' }
                        ].map((tool) => (
                            <tr key={tool.name} className="hover:bg-obsidian-800/30 transition-colors">
                                <td className="px-4 py-3 font-mono text-jade-600">{tool.name}</td>
                                <td className="px-4 py-3 text-slate-400 italic">{tool.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default MCPSetup
