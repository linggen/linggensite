function Compatibility() {
    const tools = ['Cursor', 'Zed', 'Windsurf', 'VS Code', 'Claude', 'OpenAI']
    
    return (
        <section className="compatibility-strip">
            <div className="container">
                <div className="strip-content">
                    <span className="strip-label">Works Seamlessly With:</span>
                    <div className="tools-grid">
                        {tools.map(tool => (
                            <span key={tool} className="tool-badge">{tool}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compatibility

