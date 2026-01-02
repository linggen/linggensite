import { VSCODE_EXTENSION_URL } from '../../constants'

function QuickStart() {
    return (
        <article className="doc-article">
            <h1>🚀 Quick Start Guide</h1>
            <p className="doc-intro">
                Get up and running with Linggen in just a few minutes.
            </p>

            <section className="doc-section">
                <h2>1. Install the CLI</h2>
                <p>
                    Install Linggen CLI with a one-liner:
                </p>
                <pre className="doc-code"><code>{`curl -fsSL https://linggen.dev/install-cli.sh | bash`}</code></pre>
                <p>
                    Then install the runtime:
                </p>
                <pre className="doc-code"><code>{`linggen install`}</code></pre>
                <div className="doc-note">
                    <strong>Note:</strong> Currently macOS only. Windows & Linux coming soon.
                </div>
            </section>

            <section className="doc-section">
                <h2>2. Start the Server</h2>
                <p>
                    Start the Linggen backend server:
                </p>
                <pre className="doc-code"><code>{`linggen start`}</code></pre>
                <p>
                    On first run, Linggen will download the embedding model.
                    This only happens once. The server runs at <code>localhost:8787</code>.
                </p>
            </section>

            <section className="doc-section">
                <h2>3. Add Your First Source</h2>

                <pre className="doc-code"><code>{`# Index the current folder (common workflow)
linggen index

# Or index a specific folder
linggen index /path/to/your/project`}</code></pre>
                <p>Example output:</p>
                <pre className="doc-code"><code>{`✅ Connected to existing backend at http://127.0.0.1:8787
📂 Indexing: /path/to/your/project
   Creating new source: my-project
   ✅ Source created: <uuid>
   Mode: auto → full (first-time indexing)
🚀 Starting full indexing...
✅ Job completed successfully!
   Files indexed: 28
   Chunks created: 39`}</code></pre>
                <p>
                    Indexing time depends on the size of your project. A typical codebase (10k files) takes about 1-2 minutes.
                </p>
            </section>

            <section className="doc-section">
                <h2>Next Steps</h2>
                <ul>
                    <li>
                        <strong>Try Anchored Memory (v0.4.0):</strong> Highlight code in VS Code, right-click, and select "Linggen: Pin to Memory". See it anchored right in your code!
                    </li>
                    <li>
                        Install the VSCode extension and open the <strong>Graph</strong> view (
                        <a href={VSCODE_EXTENSION_URL} target="_blank" rel="noopener noreferrer">Linggen for VSCode</a>
                        )
                    </li>
                    <li>Add more sources (projects, documents, notes)</li>
                    <li>Set up <a href="/docs/mcp">MCP integration</a> with Cursor IDE</li>
                    <li>Capture architectural decisions with <a href="/docs/memory">Persistent Memory</a></li>
                    <li>Automate workflows with <a href="/docs/prompts">Frequent Prompts</a></li>
                    <li>Learn about <a href="/docs/sources">file patterns</a> to control what gets indexed</li>
                </ul>
            </section>
        </article>
    )
}

export default QuickStart
