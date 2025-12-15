import { useState } from 'react'
import { INSTALL_ONE_LINER, INSTALL_COMMAND } from '../constants'

function GettingStarted() {
    const [copiedIndex, setCopiedIndex] = useState(null)

    const steps = [
        {
            number: 1,
            title: 'Install the CLI (recommended entry)',
            description: 'Run this once to install the Linggen CLI:',
            code: INSTALL_ONE_LINER
        },
        {
            number: 2,
            title: 'Install the runtime',
            description: 'This installs/updates the Linggen runtime for your platform:',
            code: INSTALL_COMMAND
        },
        {
            number: 3,
            title: 'Start and index your first project',
            description: 'Start the local server, then index a repo or folder:',
            code: `# Start the server (default: http://127.0.0.1:8787)
linggen serve

# Index your project
linggen index /path/to/your/project --wait`
        }
    ]

    const copyCode = (code, index) => {
        navigator.clipboard.writeText(code)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <section className="getting-started-section" id="get-started">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-decoration">◆</span>
                    Get Started (CLI-first)
                    <span className="title-decoration">◆</span>
                </h2>
                <p className="section-description">
                    The fastest path: install → run → index → use in your IDE via MCP.
                </p>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <div className="code-block">
                                    <code>{step.code}</code>
                                    <button
                                        className="copy-btn"
                                        onClick={() => copyCode(step.code, index)}
                                    >
                                        {copiedIndex === index ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="next-steps">
                    <h3>What's Next?</h3>
                    <ul>
                        <li>Connect Cursor/Zed/Windsurf via MCP (<code>http://localhost:8787/mcp/sse</code>)</li>
                        <li>Open the Graph view to see dependency “blast radius” before refactors</li>
                        <li>Share one Linggen server on a LAN for your team (point MCP to the server IP)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default GettingStarted
