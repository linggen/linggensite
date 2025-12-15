import { VSCODE_EXTENSION_URL } from '../../constants'

function GraphAndCLI() {
    return (
        <article className="doc-article">
            <h1>🗺️ Graph View &amp; CLI</h1>
            <p className="doc-intro">
                Linggen 0.2+ is CLI-first: run a local server, index/update sources, and use a system map (dependency graph) in VSCode.
            </p>

            <section className="doc-section">
                <h2>Graph View (System Map) in VSCode</h2>
                <p>
                    The graph view helps you answer: <strong>"what depends on what?"</strong> before you refactor, rename modules,
                    or onboard to an unfamiliar codebase.
                </p>
                <ol className="doc-steps">
                    <li>Install the Linggen VSCode extension: <a href={VSCODE_EXTENSION_URL} target="_blank" rel="noopener noreferrer">Linggen for VSCode</a></li>
                    <li>Index a project via the CLI</li>
                    <li>Open the <strong>Graph</strong> view in VSCode, search for a file/module, then inspect neighbors (imports/uses)</li>
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

