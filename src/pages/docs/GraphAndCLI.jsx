import { VSCODE_EXTENSION_URL } from '../../constants'

function GraphAndCLI() {
    return (
        <article className="doc-article">
            <h1>🗺️ Graph View &amp; CLI</h1>
            <p className="doc-intro">
                Linggen is CLI-first: run a local server, index/update sources, and use a system map (dependency graph) in VSCode.
            </p>

            <section className="doc-section">
                <h2>VS Code Extension</h2>
                <p>
                    The Linggen VS Code extension provides seamless integration between your editor and the Linggen backend. 
                    It allows you to visualize your architecture and manage your knowledge base without leaving your IDE.
                </p>

                <h3>Key Features</h3>
                <ul className="doc-list">
                    <li>
                        <strong>System Map (Graph View):</strong> Visualize file and module dependencies. 
                        Answer "what depends on what?" before you refactor or onboard.
                    </li>
                    <li>
                        <strong>Explain Across Projects:</strong> Right-click code to get context-aware explanations using knowledge from all your indexed projects.
                    </li>
                    <li>
                        <strong>Pin to Memory (Anchored):</strong> Highlight code and pin it. Linggen creates a code anchor 
                        and saves the context to <code>.linggen/memory</code>, allowing both you and your AI to "follow" 
                        the link to the full documentation.
                    </li>
                    <li>
                        <strong>Automatic MCP:</strong> Linggen automatically registers itself with Cursor's MCP system—no manual config files required.
                    </li>
                </ul>

                <h3>Available Commands</h3>
                <p>Open the Command Palette (<code>Cmd+Shift+P</code>) and search for "Linggen":</p>
                <ul className="doc-commands">
                    <li><code>🌀 Linggen: Show Graph</code> — Open the interactive dependency graph in a side panel</li>
                    <li><code>🌀 Linggen: Index Current Project</code> — Start indexing the current workspace</li>
                    <li><code>🌀 Linggen: Explain Across Projects</code> — Get AI insights across all your repos</li>
                    <li><code>🌀 Linggen: Pin to Memory</code> — Save the current selection to Linggen's context</li>
                    <li><code>🌀 Linggen: Library</code> — Browse Skills/Policies and install packs into your repo</li>
                    <li><code>🌀 Linggen: Install Linggen CLI</code> — Helper to install the CLI runtime</li>
                </ul>

                <div className="doc-note">
                    <strong>Tip:</strong> Use the graph as a “blast radius” tool: find the node, then check incoming/outgoing edges
                    to see who will break before you make a change.
                </div>
            </section>

            <section className="doc-section">
                <h2>CLI Basics</h2>
                <p>
                    The CLI is the fastest way to run Linggen as a background service, index projects, and share one instance on a LAN.
                </p>
                <h3>Install</h3>
                <pre className="doc-code"><code>{`# One-liner (recommended)
curl -fsSL https://linggen.dev/install-cli.sh | bash`}</code></pre>

                <h3>Start the server</h3>
                <pre className="doc-code"><code>{`# Default: http://127.0.0.1:8787
linggen start`
                }</code></pre>

                <h3>Index / Update a project</h3>
                <pre className="doc-code"><code>{`# Incremental (fast) vs full rebuild
linggen index /path/to/project
`}</code></pre>

                <h3>Status</h3>
                <pre className="doc-code"><code>{`linggen status
`}</code></pre>
                <h3>Update</h3>
                <pre className="doc-code"><code>{`linggen update
`}</code></pre>
            </section>
        </article>
    )
}

export default GraphAndCLI

