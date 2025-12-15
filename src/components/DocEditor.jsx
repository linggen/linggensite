import mdEditorScreenshot from '../assets/md-editor.png'

function DocEditor() {
    return (
        <section className="doc-editor-section" id="doc-editor">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    Doc First, Code Second
                    <span className="title-decoration">◆</span>
                </h2>
                <p className="section-description">
                    Document your projects with the built-in markdown editor. Capture decisions, architecture notes, and gotchas—then let AI use this context to make better suggestions.
                </p>

                <div className="doc-editor-preview">
                    <img 
                        src={mdEditorScreenshot} 
                        alt="Linggen Markdown Editor - Document your projects" 
                        className="doc-editor-screenshot"
                    />
                </div>

                <div className="doc-editor-benefits">
                    <div className="benefit-card">
                        <h3>📝 Write Project Docs</h3>
                        <p>Use the markdown editor to document architecture, decisions, and conventions. Link notes to specific files in your codebase.</p>
                    </div>
                    <div className="benefit-card">
                        <h3>🔗 Link to Code</h3>
                        <p>Connect your documentation to the dependency graph. See which files relate to your design decisions.</p>
                    </div>
                    <div className="benefit-card">
                        <h3>🤖 AI-Ready Context</h3>
                        <p>Your docs become part of the project memory. When you ask AI to implement features, it sees your documented constraints and patterns.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DocEditor
