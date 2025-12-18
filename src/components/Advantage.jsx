function Advantage() {
    return (
        <section className="advantage-section" id="why-linggen">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    The Linggen Advantage
                    <span className="title-decoration">◆</span>
                </h2>
                
                <div className="advantage-grid">
                    <div className="advantage-card old-way">
                        <div className="card-tag">Traditional AI Chat</div>
                        <h3>The Context Gap</h3>
                        <p className="card-desc">AI is blind to anything you haven't manually copy-pasted.</p>
                        <ul className="advantage-list">
                            <li>Manual file hunting & pasting</li>
                            <li>Frequent architectural hallucinations</li>
                            <li>Loses context between sessions</li>
                            <li>No understanding of file relationships</li>
                        </ul>
                        <div className="card-status status-bad">AI is guessing</div>
                    </div>
                    
                    <div className="advantage-card new-way">
                        <div className="card-tag primary">Cultivated with Linggen</div>
                        <h3>Sentient Knowledge</h3>
                        <p className="card-desc">AI has a persistent, searchable map of your entire ecosystem.</p>
                        <ul className="advantage-list">
                            <li>Instant cross-project retrieval via MCP</li>
                            <li>Accurate "blast-radius" analysis via Graph</li>
                            <li>Persistent memory for design decisions</li>
                            <li>Tribal knowledge stored locally in Markdown</li>
                        </ul>
                        <div className="card-status status-good">AI understands</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage

