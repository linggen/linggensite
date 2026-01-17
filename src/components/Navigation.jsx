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
            setScrolled(window.scrollY > 20)
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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            scrolled 
                ? 'bg-white/80 dark:bg-obsidian-900/80 backdrop-blur-md border-b border-slate-200 dark:border-dev-border py-3' 
                : 'bg-transparent py-5'
        }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                    <img src={logo} alt="Linggen Logo" className="w-8 h-8 filter drop-shadow-sm group-hover:scale-110 transition-transform" />
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                        Linggen
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {isHomePage ? (
                        <button onClick={() => scrollToSection('get-started')} className="text-slate-600 dark:text-slate-400 hover:text-jade-500 transition-colors">Features</button>
                    ) : (
                        <Link to="/#get-started" className="text-slate-600 dark:text-slate-400 hover:text-jade-500 transition-colors">Features</Link>
                    )}
                    <Link to="/docs" className="text-slate-600 dark:text-slate-400 hover:text-jade-500 transition-colors">Docs</Link>
                    <Link to="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-jade-500 transition-colors">Pricing</Link>
                    <a
                        href="https://github.com/linggen/linggen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 rounded-md hover:scale-105 transition-transform"
                    >
                        GitHub
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-jade-500"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-obsidian-800 border-b border-slate-200 dark:border-dev-border p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4">
                    <Link to="/docs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white">Docs</Link>
                    <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white">Pricing</Link>
                    <a href="https://github.com/linggen/linggen" className="text-lg font-medium text-jade-500">GitHub</a>
                </div>
            )}
        </nav>
    )
}

export default Navigation
