function Memory() {
    return (
        <article className="doc-article">
            <h1>🧠 Persistent Memory</h1>
            <p className="doc-intro">
                Persistent memory allows Linggen to capture and store architectural decisions, conventions, 
                and tribal knowledge that isn't always documented in the code itself.
            </p>

            <section className="doc-section">
                <h2>Anchored Memory (v0.4.0+)</h2>
                <p>
                    Starting with <strong>v0.4.0</strong>, Linggen introduces <strong>Anchored Memory</strong>. When you 
                    "Pin to Memory" from the VS Code extension, Linggen creates a lightweight "anchor" directly in your code 
                    as a comment.
                </p>
                <div className="doc-code-example">
                    <code>// linggen memory: rust-conventions-7b2e | Project Coding Rules: Summary</code>
                </div>
                <p>
                    These anchors serve several purposes:
                </p>
                <ul className="doc-list">
                    <li><strong>Human Readable:</strong> Developers can see exactly where a memory is attached and what it's about via CodeLens and hint text.</li>
                    <li><strong>LLM Retrieval:</strong> AI assistants can follow these IDs to fetch the full memory content via MCP, ensuring they always have the correct context for a specific file or function.</li>
                    <li><strong>Centralized Context:</strong> Solves the conflict between tool-specific files like <code>claude.md</code>, <code>cursor.md</code>, or <code>agents.md</code>. Instead of duplicating rules, you anchor them where they matter.</li>
                </ul>
            </section>

            <section className="doc-section">
                <h2>How Memory Works</h2>
                <p>
                    Memories are maintained as Markdown files stored directly in your codebase at 
                    <code>{`{project-root}/.linggen/memory/`}</code>. Each file contains <strong>YAML Frontmatter</strong> 
                    meta-data (ID, title, tags) followed by the content.
                </p>
                <p>
                    Each memory entry includes:
                </p>
                <ul className="doc-list">
                    <li><strong>Title & Body:</strong> The core knowledge being preserved.</li>
                    <li><strong>Citations:</strong> References back to specific files and line ranges in your codebase.</li>
                    <li><strong>Tags:</strong> Keywords for manual organization.</li>
                    <li><strong>Confidence Score:</strong> An indicator of how reliable this information is.</li>
                </ul>
            </section>

            <section className="doc-section">
                <h2>Semantic Recall</h2>
                <p>
                    Unlike standard documentation, Linggen's memory is <strong>indexed separately</strong> in a dedicated 
                    LanceDB table. This allows AI assistants to perform semantic searches specifically against your 
                    project's "tribal knowledge" to find context that standard code search might miss.
                </p>
                <div className="doc-note">
                    <strong>Note:</strong> Internal content like memories and prompt templates are indexed immediately 
                    when created, ensuring your AI always has the latest context.
                </div>
            </section>

            <section className="doc-section">
                <h2>Managing Memory</h2>
                <p>
                    Because memories are stored as standard Markdown files in your project, modern AI assistants 
                    (like Cursor) can manage them directly through file operations. 
                </p>
                <ul className="doc-list">
                    <li><strong>Creation:</strong> Ask the AI to "create a new memory file for this decision" in <code>.linggen/memory/</code>.</li>
                    <li><strong>Updates:</strong> Simply tell the AI to "update the coding rules memory" and it will modify the corresponding file.</li>
                    <li><strong>Retrieval:</strong> Use the <code>memory_search_semantic</code> tool for conceptually related lookups, or <code>memory_fetch_by_meta</code> to follow a specific code anchor ID.</li>
                </ul>
            </section>

            <section className="doc-section">
                <h2>Cross-Project Intelligence</h2>
                <p>
                    Because memories are indexed in Linggen's global vector database, your AI can access 
                    knowledge across multiple codebases simultaneously. This is powerful for maintaining 
                    consistency or learning from existing patterns in other projects.
                </p>
                <div className="doc-example-box">
                    <p><strong>Example Scenario:</strong></p>
                    <p>
                        You are working on <strong>Project A</strong> and want to use the same design pattern 
                        implemented in <strong>Project B</strong>. Simply tell your LLM:
                    </p>
                    <p className="doc-quote">
                        "Call Linggen MCP to search memories in <strong>Project B</strong>. Learn its coding 
                        style and design patterns for authentication, then apply similar logic here."
                    </p>
                </div>
            </section>

            <section className="doc-section">
                <h2>Best Practices</h2>
                <ul className="doc-list">
                    <li><strong>Be Atomic:</strong> Keep each memory focused on a single concept or decision.</li>
                    <li><strong>Use Citations:</strong> Always link memories to the code they describe.</li>
                    <li><strong>Draft First:</strong> Ask your AI to "propose a memory draft" before saving it to ensure accuracy.</li>
                </ul>
            </section>
        </article>
    )
}

export default Memory

