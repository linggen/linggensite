function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    <strong>Linggen</strong> – Local-first memory layer for your code and knowledge
                </p>
                <p className="footer-links">
                    <a href="https://github.com/linggen/linggen" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span className="separator">·</span>
                    <a href="mailto:linggen77@gmail.com">Contact</a>
                    <span className="separator">·</span>
                    <a href="/docs">Docs</a>
                </p>
                <p className="footer-credit">
                    Built with Rust 
                </p>
            </div>
        </footer>
    )
}

export default Footer
