import appScreenshot from '../assets/sources.png'
import mdEditorScreenshot from '../assets/md-editor.png'
import { INSTALL_ONE_LINER, INSTALL_COMMAND } from '../constants'

function Hero() {
    const useCases = [
        "Call Linggen MCP, find out how project-A sends out message, and ingest it.",
        "Call Linggen MCP, load memory from project-B, learn its code style and design pattern.",
        "Load memory from linggen, find out what is the goal of this piece of code."
    ]
    const anchoredMemoryExample = `// linggen memory: rust-conventions-7b2e | Project Coding Rules`

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-top">
                    <div className="hero-left">
                        <h1 className="hero-headline">Stop re-explaining to AI.</h1>
                        <p className="hero-subtitle">
                            The free and local app for your AI’s memory. 
                            Linggen indexes your codebases and tribal knowledge so your AI 
                            can actually understand your architecture.
                        </p>
                    </div>

                    <div className="hero-right">
                        <div className="hero-onboarding-stack">
                            <div className="hero-install-snippet">
                                <p className="snippet-label">1. Install in seconds:</p>
                                <pre className="hero-code">
                                    <code>{`${INSTALL_ONE_LINER}\n${INSTALL_COMMAND}`}</code>
                                </pre>
                                <p className="hero-note">
                                    macOS works today. Windows &amp; Linux coming soon.
                                    <br />
                                    <a href="https://github.com/linggen/linggen" target="_blank" rel="noopener noreferrer" className="hero-github-link">
                                        View Source on GitHub
                                    </a>
                                </p>
                            </div>

                            <div className="hero-value-snippet">
                                <p className="snippet-label">2. Then ask your AI:</p>
                                <div className="hero-prompts">
                                    {useCases.map((text, i) => (
                                        <div key={i} className="hero-prompt-item">
                                            <span className="prompt-icon">💬</span>
                                            <code>{text}</code>
                                        </div>
                                    ))}
                                </div>

                                <div className="hero-anchor">
                                    <div className="hero-anchor-header">
                                        <span className="hero-anchor-icon">🧠</span>
                                        <span className="hero-anchor-title">Anchored Memory (v0.4.0)</span>
                                        <span className="hero-anchor-subtitle">One source of truth for rules & context</span>
                                    </div>

                                    <pre className="hero-anchor-code">
                                        <code>{anchoredMemoryExample}</code>
                                    </pre>

                                    <div className="hero-anchor-bullets">
                                        <span>Human-readable in code (CodeLens)</span>
                                        <span>LLM can fetch by ID via MCP</span>
                                        <span>Replaces scattered <code>cursor.rules</code> / <code>claude.md</code> / <code>agents.md</code></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-showcase">
                    <div className="app-window">
                        <img
                            src={appScreenshot}
                            alt="Linggen Sources & Graph"
                            className="app-screenshot"
                        />
                    </div>
                    <div className="app-window">
                        <img
                            src={mdEditorScreenshot}
                            alt="Linggen Markdown Editor"
                            className="app-screenshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
