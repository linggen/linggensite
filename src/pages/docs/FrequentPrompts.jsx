function FrequentPrompts() {
    return (
        <article className="doc-article">
            <h1>📜 Frequent Prompts</h1>
            <p className="doc-intro">
                Maximize your efficiency by using standardized prompt templates for common development workflows.
            </p>

            <section className="doc-section">
                <h2>Overview</h2>
                <p>
                    Linggen supports "Frequent Prompts"—pre-configured templates that help guide AI assistants 
                    through complex multi-step tasks. These templates ensure consistency and reduce the need 
                    to re-explain your workflow every time.
                </p>
            </section>

            <section className="doc-section">
                <h2>Example Workflows</h2>
                
                <h3>🌅 Init my day</h3>
                <p>
                    A powerful prompt to start your session. It instructs the AI to:
                </p>
                <ol className="doc-steps">
                    <li>List available projects using <code>list_sources</code>.</li>
                    <li>Recall important conventions using <code>memory_search_semantic</code>.</li>
                    <li>Summarize "what Linggen knows" about your current status.</li>
                    <li>Identify context gaps that need your confirmation.</li>
                </ol>

                <h3>💾 Save summary to memory</h3>
                <p>
                    Used at the end of a feature implementation or debugging session to capture what was learned:
                </p>
                <ul className="doc-list">
                    <li>AI drafts a structured memory entry (title, tags, body, citations).</li>
                    <li>You review and approve the draft.</li>
                    <li>AI calls <code>memory_create</code> to persist the knowledge.</li>
                </ul>
            </section>

            <section className="doc-section">
                <h2>Customizing Prompts</h2>
                <p>
                    Prompts are stored in <code>.linggen/prompts/</code> and are indexed by Linggen. 
                    You can edit these Markdown files directly or use the extension to manage them.
                </p>
                <div className="doc-note">
                    <strong>Tip:</strong> Use the <code>🌀 Linggen: Open Frequent Prompts</code> command 
                    in VS Code for quick access to your template library.
                </div>
            </section>
        </article>
    )
}

export default FrequentPrompts

