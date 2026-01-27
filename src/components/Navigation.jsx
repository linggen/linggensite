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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
            ? 'bg-white/70 dark:bg-obsidian-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-dev-border/50 py-2 shadow-sm'
            : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                    <img src={logo} alt="Linggen Logo" className="w-8 h-8 filter drop-shadow-sm group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500" />
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                        Linggen
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
                    <Link to="/wiki" className="text-slate-500 dark:text-slate-400 hover:text-jade-500 transition-colors">Wiki</Link>
                    <Link to="/skills" className="text-slate-500 dark:text-slate-400 hover:text-jade-500 transition-colors">Skills</Link>
                    <Link to="/docs" className="text-slate-500 dark:text-slate-400 hover:text-jade-500 transition-colors">Docs</Link>
                    <Link to="/pricing" className="text-slate-500 dark:text-slate-400 hover:text-jade-500 transition-colors">Pricing</Link>
                    <a
                        href="https://github.com/linggen/linggen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-jade-500/10"
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-obsidian-800/95 backdrop-blur-xl border-b border-slate-200 dark:border-dev-border p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4">
                    <Link to="/wiki" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-dev-border pb-2">Wiki</Link>
                    <Link to="/skills" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-dev-border pb-2">Skills</Link>
                    <Link to="/docs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-dev-border pb-2">Docs</Link>
                    <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-dev-border pb-2">Pricing</Link>
                    <a href="https://github.com/linggen/linggen" className="text-lg font-bold text-jade-500">GitHub ↗</a>
                </div>
            )}
        </nav>
    )
}

export default Navigation
