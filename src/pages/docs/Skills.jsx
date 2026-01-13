function Skills() {
    return (
        <article className="doc-article">
            <h1>🧩 Skills (v0.5.0+)</h1>
            <p className="doc-intro">
                Skills are lightweight, project-scoped instruction files that tell your AI assistant how to work in this repo.
                Think of them as a reusable “way of working” layer: coding style, testing expectations, refactor approach, and
                communication format.
            </p>

            <section className="doc-section">
                <h2>What is a Skill?</h2>
                <p>
                    A <strong>skill</strong> is a Markdown file under <code>{`{project-root}/.linggen/skills/`}</code>. When your
                    IDE assistant is MCP-connected to Linggen, it can read these files and follow them as behavioral guidance.
                </p>

                <div className="doc-note">
                    <strong>Rule of thumb:</strong> Skills improve <em>process quality</em> (how the assistant works), while your
                    request defines <em>what</em> to build.
                </div>
            </section>

            <section className="doc-section">
                <h2>How to Use Skills in a Project</h2>
                <ol className="doc-steps">
                    <li>Create <code>.linggen/skills/</code> in your repo.</li>
                    <li>Add one or more <code>.md</code> files describing how the AI should behave.</li>
                    <li>
                        In your IDE chat, ask the assistant to <strong>use Linggen MCP</strong> and follow the skill(s) while it
                        works.
                    </li>
                </ol>

                <p className="doc-quote">
                    “Call Linggen MCP and follow the skills in <code>.linggen/skills</code>. Implement this change with those
                    conventions.”
                </p>
            </section>

            <section className="doc-section">
                <h2>Find Skills via Linggen MCP (Library Packs)</h2>
                <p>
                    Linggen ships with a global Library of curated skill packs (and you can create your own). From an MCP-enabled
                    assistant (Cursor/Zed/Windsurf), you can ask it to discover and fetch skill packs:
                </p>

                <div className="doc-code-example">
                    <code>list_library_packs</code>
                </div>
                <div className="doc-code-example">
                    <code>get_library_pack(pack_id=&quot;react-pack&quot;)</code>
                </div>

                <p>
                    Then copy the pack content into your project as a skill file under <code>.linggen/skills/</code> (or keep it
                    in your global library and reuse it across repos).
                </p>
            </section>

            <section className="doc-section">
                <h2>Recommended Pattern</h2>
                <ul className="doc-list">
                    <li>
                        <strong>One “entry” skill:</strong> A short skill that explains how to use Linggen MCP + memory in this
                        repo.
                    </li>
                    <li>
                        <strong>Language / framework skill:</strong> e.g. Rust conventions, React conventions.
                    </li>
                    <li>
                        <strong>Team workflow skill:</strong> e.g. “always write tests”, “prefer minimal diffs”, “summarize
                        changes”.
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default Skills

