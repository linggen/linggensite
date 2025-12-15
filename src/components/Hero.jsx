import appScreenshot from '../assets/sources.png'
import mdEditorScreenshot from '../assets/md-editor.png'
import { INSTALL_ONE_LINER, INSTALL_COMMAND } from '../constants'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-top">
                    <div className="hero-left">
                        <h1 className="hero-headline">Stop re-explaining to AI.</h1>
                        <p className="hero-subtitle">
                            The free and local app for your AI’s memory.
                        </p>
                    </div>

                    <div className="hero-right">
                        <div className="hero-install-snippet">
                            <p >Get started in seconds:</p>
                            <pre className="hero-code">
                                <code>{`${INSTALL_ONE_LINER}\n${INSTALL_COMMAND}`}</code>
                            </pre>
                            <p className="hero-note">
                                macOS works today. Windows &amp; Linux coming soon.
                            </p>
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
