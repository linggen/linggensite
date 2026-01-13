function Library() {
    return (
        <article className="doc-article">
            <h1>📚 Library</h1>
            <p className="doc-intro">
                Browse Linggen&apos;s curated <strong>Skills</strong> and <strong>Policies</strong>, and install them into your local repo.
            </p>

            <section className="doc-section">
                <h2>What is the Library?</h2>
                <p>
                    The Library is a collection of reusable packs (for example: coding conventions, refactor workflows, security
                    guardrails). Packs are designed to be shared across projects and teams.
                </p>
            </section>

            <section className="doc-section">
                <h2>Open the Library</h2>
                <p>
                    In VS Code, open the Command Palette (<code>Cmd+Shift+P</code>) and run:
                </p>
                <div className="doc-code-example">
                    <code>🌀 Linggen: Library</code>
                </div>

                <p>
                    You&apos;ll see a Library view in the left sidebar where you can browse available packs and their content.
                </p>
            </section>

            <section className="doc-section">
                <h2>Install into a Repo</h2>
                <p>
                    Installing a pack copies it into your project under <code>.linggen/</code>, so it&apos;s versioned with your
                    code and applied consistently by your AI assistant.
                </p>
                <ul className="doc-list">
                    <li>
                        <strong>Skills</strong>: installed into <code>.linggen/skills/</code>
                    </li>
                    <li>
                        <strong>Policies</strong>: installed into <code>.linggen/policies/</code>
                    </li>
                </ul>

                <div className="doc-note">
                    <strong>Tip:</strong> Skills are “how to work” guidance. Policies are hard constraints / guardrails.
                </div>
            </section>
        </article>
    )
}

export default Library

