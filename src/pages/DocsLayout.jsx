import { Link } from 'react-router-dom'
import QuickStart from './docs/QuickStart'
import Sources from './docs/Sources'
import MCPSetup from './docs/MCPSetup'
import Search from './docs/Search'

const DOC_SECTIONS = [
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'sources', label: 'Adding Sources' },
    { id: 'mcp', label: 'MCP Setup' },
    { id: 'search', label: 'Search & Chat' },
]

function DocsLayout() {
    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="docs-page">
            <main className="docs-main">
                <header className="docs-inline-header">
                    <Link to="/" className="docs-back-link">← Home</Link>
                    <h1 className="docs-hero-title">Documentation</h1>
                </header>

                <section id="quick-start" className="docs-section-wrapper">
                    <QuickStart />
                </section>
                <section id="sources" className="docs-section-wrapper">
                    <Sources />
                </section>
                <section id="mcp" className="docs-section-wrapper">
                    <MCPSetup />
                </section>
                <section id="search" className="docs-section-wrapper">
                    <Search />
                </section>
            </main>

            <aside className="docs-sidebar">
                <nav className="docs-sidebar-nav">
                    <p className="docs-sidebar-title">On this page</p>
                    <ul className="docs-sidebar-list">
                        {DOC_SECTIONS.map((s) => (
                            <li key={s.id}>
                                <button
                                    type="button"
                                    className="docs-sidebar-link"
                                    onClick={() => scrollTo(s.id)}
                                >
                                    {s.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default DocsLayout
