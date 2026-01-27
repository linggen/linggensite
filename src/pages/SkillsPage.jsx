import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function SkillsPage() {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [copiedIndex, setCopiedIndex] = useState(null)

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true)
                setError(null)

                // Use different endpoints based on search query
                let url
                if (searchQuery.trim()) {
                    // Use search API when user is searching
                    url = `https://linggen-analytics.liangatbc.workers.dev/skills/search?q=${encodeURIComponent(searchQuery)}`
                } else {
                    // Use list all API when no search query
                    url = 'https://linggen-analytics.liangatbc.workers.dev/skills'
                }

                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error('Failed to fetch skills')
                }
                const data = await response.json()

                // Extract and normalize skills data
                let skillsArray = []
                if (Array.isArray(data)) {
                    skillsArray = data
                } else if (data && typeof data === 'object') {
                    skillsArray = data.skills || data.data || data.results || []
                }

                // Transform API fields to match UI expectations
                const normalizedSkills = skillsArray.map(skill => {
                    // Parse name and description from content YAML frontmatter
                    let name = skill.skill || 'Unnamed Skill'
                    let description = ''

                    if (skill.content) {
                        // Extract YAML frontmatter between --- markers
                        const frontmatterMatch = skill.content.match(/^---\n([\s\S]*?)\n---/)
                        if (frontmatterMatch) {
                            const frontmatter = frontmatterMatch[1]
                            const nameMatch = frontmatter.match(/^name:\s*(.+)$/m)
                            const descMatch = frontmatter.match(/^description:\s*(.+)$/m)

                            if (nameMatch) name = nameMatch[1].trim()
                            if (descMatch) description = descMatch[1].trim()
                        }
                    }

                    return {
                        id: skill.skill_id,
                        name: name,
                        description: description,
                        author: skill.url ? new URL(skill.url).pathname.split('/')[1] : null,
                        installCount: skill.install_count || 0,
                        version: skill.ref || 'main',
                        skillName: skill.skill,
                        repoUrl: skill.url,
                        url: skill.url
                    }
                })

                setSkills(normalizedSkills)
            } catch (err) {
                console.error('Error fetching skills:', err)
                setError(err.message)
                setSkills([])
            } finally {
                setLoading(false)
            }
        }

        // Debounce search to avoid too many API calls
        const timeoutId = setTimeout(() => {
            fetchSkills()
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchQuery])

    // API already handles filtering, just sort by install count
    const sortedSkills = Array.isArray(skills)
        ? [...skills].sort((a, b) => (b.installCount || 0) - (a.installCount || 0))
        : []

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors duration-300">
            <Navigation />

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Header */}
                    <header className="text-center mb-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-jade-500/10 rounded-full text-jade-500 font-mono text-xs font-bold uppercase tracking-widest">
                            <span>🌟</span> Community Skills
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-white">
                            Skills Leaderboard
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Discover popular community skills from the online registry. Install them via CLI or VS Code extension.
                        </p>
                    </header>

                    {/* Search Bar */}
                    <div className="mb-12">
                        <div className="relative max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search skills by name, description, or author..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-dev-border rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-jade-500 focus:ring-2 focus:ring-jade-500/20 transition-all"
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 dark:border-obsidian-700 border-t-jade-500"></div>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading skills...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="max-w-2xl mx-auto p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-2xl">
                            <p className="text-red-600 dark:text-red-400">
                                <strong>Error:</strong> {error}
                            </p>
                        </div>
                    )}

                    {/* Skills Grid */}
                    {!loading && !error && (
                        <>
                            <div className="mb-6 text-sm text-slate-600 dark:text-slate-400 text-center">
                                Showing {sortedSkills.length} {sortedSkills.length === 1 ? 'skill' : 'skills'}
                            </div>

                            {sortedSkills.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-lg text-slate-600 dark:text-slate-400">
                                        {searchQuery ? `No skills found matching "${searchQuery}"` : 'No skills found'}
                                    </p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sortedSkills.map((skill, index) => {
                                    const detailUrl = skill.author && skill.skillName
                                        ? `/skills/${skill.author}/${skill.repoUrl?.split('/').pop() || 'repo'}/${skill.skillName}`
                                        : '#'

                                    const copyInstallCommand = () => {
                                        if (skill.repoUrl && skill.skillName) {
                                            const command = `linggen skills add ${skill.repoUrl} --skill ${skill.skillName}`
                                            navigator.clipboard.writeText(command)
                                            setCopiedIndex(index)
                                            setTimeout(() => setCopiedIndex(null), 2000)
                                        }
                                    }

                                    return (
                                        <div
                                            key={skill.id || index}
                                            className="group p-6 bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-dev-border rounded-2xl hover:border-jade-500/50 hover:shadow-xl hover:shadow-jade-500/5 transition-all duration-300"
                                        >
                                        {/* Rank Badge */}
                                        {index < 3 && !searchQuery && (
                                            <div className="mb-3">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                                                    index === 0 ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
                                                    index === 1 ? 'bg-slate-300/20 text-slate-600 dark:text-slate-400' :
                                                    'bg-amber-700/20 text-amber-700 dark:text-amber-500'
                                                }`}>
                                                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} #{index + 1}
                                                </span>
                                            </div>
                                        )}

                                        {/* Skill Info */}
                                        <div className="space-y-3">
                                            <div>
                                                <Link to={detailUrl}>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-jade-500 transition-colors cursor-pointer">
                                                        {skill.name || 'Unnamed Skill'}
                                                    </h3>
                                                </Link>
                                                {skill.author && (
                                                    <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                                                        by {skill.author}
                                                    </p>
                                                )}
                                            </div>

                                            {skill.description && (
                                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                                                    {skill.description}
                                                </p>
                                            )}

                                            {/* Stats */}
                                            <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-dev-border">
                                                <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                                                    <span className="text-jade-500">📦</span>
                                                    <span className="font-mono font-bold">{skill.installCount || 0}</span>
                                                    <span>installs</span>
                                                </div>
                                                {skill.version && (
                                                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500 font-mono">
                                                        v{skill.version}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Install Command */}
                                            {skill.repoUrl && skill.skillName && (
                                                <div className="pt-3">
                                                    <div className="relative bg-obsidian-900 dark:bg-obsidian-950 rounded-lg p-3 pr-16 border border-dev-border">
                                                        <code className="text-[10px] text-jade-500 font-mono break-all">
                                                            linggen skills add {skill.repoUrl} --skill {skill.skillName}
                                                        </code>
                                                        <button
                                                            onClick={copyInstallCommand}
                                                            className="absolute top-2 right-2 px-2 py-1 bg-jade-500 hover:bg-jade-600 text-white text-[10px] font-bold rounded transition-colors"
                                                        >
                                                            {copiedIndex === index ? '✓' : 'Copy'}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Links */}
                                            {skill.url && (
                                                <div className="pt-2">
                                                    <a
                                                        href={skill.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs text-jade-500 hover:text-jade-600 font-medium inline-flex items-center gap-1"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        View on GitHub ↗
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </>
                    )}

                    {/* Installation Instructions */}
                    <section className="mt-20 max-w-3xl mx-auto">
                        <div className="p-8 bg-jade-500/5 border border-jade-500/20 rounded-3xl space-y-6">
                            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                                How to Install Skills
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-white dark:bg-obsidian-800 rounded-xl border border-slate-200 dark:border-dev-border">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="text-jade-500">⚡</span> Via CLI
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                        Copy the install command from any skill card and run it in your terminal:
                                    </p>
                                    <code className="block bg-obsidian-900 text-jade-500 p-3 rounded-lg font-mono text-xs mb-4">
                                        linggen skills add https://github.com/owner/repo --skill skill-name
                                    </code>
                                    <div className="pt-3 border-t border-slate-200 dark:border-dev-border">
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                            <strong>Can't find a skill?</strong> You can install any skill directly from GitHub repositories. Just use the command above with the repository URL and skill name.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-obsidian-800 rounded-xl border border-slate-200 dark:border-dev-border">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="text-jade-500">🔌</span> Via VS Code Extension
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Open the Command Palette and run <code className="px-2 py-0.5 bg-slate-100 dark:bg-obsidian-900 rounded font-mono text-xs">Linggen: Browse Online Skills</code>
                                    </p>
                                </div>
                            </div>
                            <div className="pt-4 text-center">
                                <Link
                                    to="/docs/skills"
                                    className="inline-flex items-center gap-2 text-jade-500 hover:text-jade-600 font-medium text-sm"
                                >
                                    Learn more about Skills →
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default SkillsPage
