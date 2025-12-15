import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const isHomePage = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-brand">
                    <img src={logo} alt="Linggen Logo" className="nav-logo" />
                    <span className="nav-title">Linggen</span>
                </Link>

                <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    {isHomePage ? (
                        <a onClick={() => scrollToSection('features')}>Features</a>
                    ) : (
                        <Link to="/#features">Features</Link>
                    )}
                    <Link to="/docs">Docs</Link>
                    {isHomePage ? (
                        <a onClick={() => scrollToSection('beta')}>Beta</a>
                    ) : (
                        <Link to="/#beta">Beta</Link>
                    )}
                </div>

                <div className="nav-actions">
                    {isHomePage ? (
                        <a
                            className="nav-download-btn"
                            onClick={() => scrollToSection('get-started')}
                        >
                            Install
                        </a>
                    ) : (
                        <Link className="nav-download-btn" to="/#get-started">
                            Install
                        </Link>
                    )}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
