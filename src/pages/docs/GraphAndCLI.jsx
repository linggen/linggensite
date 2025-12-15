function GraphAndCLI() {
    return (
        <article className="doc-article">
            <h1>🗺️ Graph View &amp; CLI</h1>
            <p className="doc-intro">
                Linggen 0.2+ adds an IDE-like workflow: a system map (dependency graph) and a CLI for running Linggen anywhere.
            </p>

            <section className="doc-section">
                <h2>Graph View (System Map)</h2>
                <p>
                    The graph view helps you answer: <strong>"what depends on what?"</strong> before you refactor, rename modules,
                    or onboard to an unfamiliar codebase.
                </p>
                <ol className="doc-steps">
                    <li>Index a project (via the app UI or CLI)</li>
                    <li>Open <strong>Graph</strong> in the Linggen UI</li>
                    <li>Search for a file/module and inspect neighbors (imports/uses)</li>
                </ol>
                <div className="doc-note">
                    <strong>Tip:</strong> Use the graph as a “blast radius” tool: find the node, then check incoming/outgoing edges
                    to see who will break.
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
linggen serve

# Custom port
linggen serve --port 9000`}</code></pre>

                <h3>Index a project</h3>
                <pre className="doc-code"><code>{`# Incremental (fast) vs full rebuild
linggen index /path/to/project --mode incremental
linggen index /path/to/project --mode full

# Wait until indexing completes
linggen index /path/to/project --wait`}</code></pre>

                <h3>Status</h3>
                <pre className="doc-code"><code>{`linggen status
linggen status --limit 20`}</code></pre>
            </section>
        </article>
    )
}

export default GraphAndCLI

