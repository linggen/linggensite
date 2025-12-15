import logo from '../assets/logo.svg'
import appScreenshot from '../assets/sources.png'
import { INSTALL_ONE_LINER, INSTALL_COMMAND } from '../constants'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <img src={logo} alt="Linggen Logo" className="hero-logo" />
                <h1 className="hero-title">
                    <span className="brand-name">Linggen</span>
                </h1>
                <p className="hero-subtitle">Local-first project memory + system map for AI-assisted coding</p>
                <p className="hero-description">
                    <strong>Linggen</strong> runs locally and helps you (and your IDE/LLM) understand a codebase via
                    <strong> search</strong>, an <strong>IDE-like UI</strong>, and a <strong>dependency graph view</strong>—with your data staying completely local.
                </p>
                <div className="cta-buttons">
                    <a href="#get-started" className="btn btn-primary">
                        Install in 30s
                    </a>
                    <a href="/docs" className="btn btn-secondary">Read Docs</a>
                </div>
                <p className="hero-note">
                    macOS works today. Windows &amp; Linux coming soon.
                </p>

                <div className="hero-install-snippet">
                    <pre className="hero-code">
                        <code>{`${INSTALL_ONE_LINER}\n${INSTALL_COMMAND}`}</code>
                    </pre>
                </div>

                <div className="app-preview">
                    <img 
                        src={appScreenshot} 
                        alt="Linggen App - Sources / Resource Management" 
                        className="app-screenshot"
                    />
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero
