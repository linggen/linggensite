function MCPSetup() {
    return (
        <article className="doc-article">
            <h1>🔌 MCP Server Setup</h1>
            <p className="doc-intro">
                Connect Linggen to AI coding tools like Cursor, Zed, and Windsurf via the Model Context Protocol.
            </p>

            <section className="doc-section">
                <h2>What is MCP?</h2>
                <p>
                    <strong>Model Context Protocol (MCP)</strong> is a standard that lets AI tools 
                    access external context sources. When you connect Cursor to Linggen's MCP server, 
                    the AI can search your indexed knowledge base to provide better answers.
                </p>
                <p>
                    Linggen runs an MCP server automatically at <code>localhost:8787/mcp/sse</code>.
                </p>
            </section>

            <section className="doc-section">
                <h2>Connect Cursor IDE</h2>
                <p>
                    Linggen integrates seamlessly with Cursor. When you install the <strong>Linggen VS Code extension</strong>, 
                    it automatically registers the Linggen MCP server with Cursor using the 
                    <a href="https://cursor.com/docs/context/mcp-extension-api" target="_blank" rel="noopener noreferrer">MCP Extension API</a>.
                </p>
                
                <div className="doc-note">
                    <strong>Zero Config:</strong> You no longer need to manually edit <code>mcp.json</code>. 
                    The extension handles the connection programmatically, and it will not modify your <code>mcp.json</code> file.
                </div>

                <p>
                    If the connection doesn't happen automatically, you can trigger it via the Command Palette:
                    <br /><code>🌀 Linggen: Connect to Linggen</code>
                </p>

                <h3>Manual Configuration (No Extension)</h3>
                <p>
                    If you prefer not to install the VS Code extension, you can still manually connect Cursor to Linggen 
                    by adding the server to your Cursor MCP configuration file (<code>~/.cursor/mcp.json</code>):
                </p>
                
                <pre className="doc-code"><code>{`{
  "mcpServers": {
    "linggen": {
      "url": "http://localhost:8787/mcp/sse"
    }
  }
}`}</code></pre>
            </section>

            <section className="doc-section">
                <h2>Connect Zed</h2>
                <p>
                    Add the following to your Zed settings file 
                    (<code>~/.config/zed/settings.json</code> on macOS/Linux):
                </p>
                
                <pre className="doc-code"><code>{`{
  "context_servers": {
    "linggen": {
      "url": "http://localhost:8787/mcp/sse"
    }
  }
}`}</code></pre>

                <p>Then restart Zed to apply the changes.</p>
            </section>

            <section className="doc-section">
                <h2>Connect Windsurf</h2>
                <p>
                    Add the following to your Windsurf MCP configuration file 
                    (<code>~/.codeium/windsurf/mcp_config.json</code> on macOS/Linux):
                </p>
                
                <pre className="doc-code"><code>{`{
  "mcpServers": {
    "linggen": {
      "serverUrl": "http://localhost:8787/mcp/sse"
    }
  }
}`}</code></pre>

                <p>Then restart Windsurf to apply the changes.</p>
            </section>

            <section className="doc-section">
                <h2>Team Setup</h2>
                <p>
                    For team use, run Linggen on a shared machine (or server) and have team members 
                    connect to that instance instead of localhost.
                </p>
                
                <h3>On the Server</h3>
                <ol className="doc-steps">
                    <li>Install and run Linggen on a machine accessible to your team</li>
                    <li>Index your shared codebase and documentation</li>
                    <li>Note the machine's IP address (e.g., <code>192.168.1.100</code>)</li>
                </ol>

                <h3>On Team Members' Machines</h3>
                <p>Configure Cursor to point to the shared server in <code>~/.cursor/mcp.json</code>:</p>
                <pre className="doc-code"><code>{`{
  "mcpServers": {
    "linggen": {
      "url": "http://192.168.1.100:8787/mcp/sse"
    }
  }
}`}</code></pre>

                <div className="doc-note">
                    <strong>Security:</strong> The MCP server has no authentication by default. 
                    Only expose it on trusted networks or behind a VPN.
                </div>
            </section>

            <section className="doc-section">
                <h2>Available MCP Tools</h2>
                <p>The MCP server exposes these tools to connected AI clients:</p>
                
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Tool</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>search_codebase</code></td>
                            <td>Search for relevant code/doc snippets across indexed sources</td>
                        </tr>
                        <tr>
                            <td><code>enhance_prompt</code></td>
                            <td>Enhance a prompt with relevant context automatically</td>
                        </tr>
                        <tr>
                            <td><code>list_sources</code></td>
                            <td>List all indexed sources and their statistics</td>
                        </tr>
                        <tr>
                            <td><code>get_status</code></td>
                            <td>Check Linggen server and indexing health</td>
                        </tr>
                        <tr>
                            <td><code>memory_create</code></td>
                            <td>Create a new persistent memory snippet with citations</td>
                        </tr>
                        <tr>
                            <td><code>memory_search_semantic</code></td>
                            <td>Search for conceptually related memories using vector embeddings</td>
                        </tr>
                        <tr>
                            <td><code>query_codebase</code></td>
                            <td>Directly query the vector database for matching chunks</td>
                        </tr>
                        <tr>
                            <td><code>memory_update</code></td>
                            <td>Update an existing memory entry</td>
                        </tr>
                        <tr>
                            <td><code>memory_delete</code></td>
                            <td>Remove a memory from the persistent store</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </article>
    )
}

export default MCPSetup
