import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function SkillDetailPage() {
    const { owner, repo, skillName } = useParams()
    const [skill, setSkill] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const fetchSkillDetail = async () => {
            try {
                setLoading(true)
                setError(null)

                // Search for the specific skill
                const response = await fetch(`https://linggen-analytics.liangatbc.workers.dev/skills/search?q=${encodeURIComponent(skillName)}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch skill details')
                }
                const data = await response.json()

                let skillsArray = []
                if (Array.isArray(data)) {
                    skillsArray = data
                } else if (data && typeof data === 'object') {
                    skillsArray = data.skills || data.data || data.results || []
                }

                // Find the matching skill
                const matchedSkill = skillsArray.find(s =>
                    s.skill === skillName &&
                    s.url === `https://github.com/${owner}/${repo}`
                )

                if (!matchedSkill) {
                    throw new Error('Skill not found')
                }

                // Parse name and description from content YAML frontmatter
                let name = matchedSkill.skill || 'Unnamed Skill'
                let description = ''
                let content = matchedSkill.content || ''

                if (matchedSkill.content) {
                    const frontmatterMatch = matchedSkill.content.match(/^---\n([\s\S]*?)\n---/)
                    if (frontmatterMatch) {
                        const frontmatter = frontmatterMatch[1]
                        const nameMatch = frontmatter.match(/^name:\s*(.+)$/m)
                        const descMatch = frontmatter.match(/^description:\s*(.+)$/m)

                        if (nameMatch) name = nameMatch[1].trim()
                        if (descMatch) description = descMatch[1].trim()

                        // Remove frontmatter from content
                        content = matchedSkill.content.replace(/^---\n[\s\S]*?\n---\n/, '')
                    }
                }

                setSkill({
                    id: matchedSkill.skill_id,
                    name: name,
                    description: description,
                    content: content,
                    author: matchedSkill.url ? new URL(matchedSkill.url).pathname.split('/')[1] : null,
                    installCount: matchedSkill.install_count || 0,
                    version: matchedSkill.ref || 'main',
                    skillName: matchedSkill.skill,
                    repoUrl: matchedSkill.url,
                    url: matchedSkill.url
                })
            } catch (err) {
                console.error('Error fetching skill details:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchSkillDetail()
    }, [owner, repo, skillName])

    const copyToClipboard = () => {
        if (skill?.repoUrl && skill?.skillName) {
            const command = `linggen skills add ${skill.repoUrl} --skill ${skill.skillName}`
            navigator.clipboard.writeText(command)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors duration-300">
            <Navigation />

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Link */}
                    <Link
                        to="/skills"
                        className="inline-flex items-center gap-2 text-jade-500 hover:text-jade-600 font-medium text-sm mb-8"
                    >
                        ← Back to Skills
                    </Link>

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-20">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-200 dark:border-obsidian-700 border-t-jade-500"></div>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">Loading skill details...</p>
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

                    {/* Skill Details */}
                    {skill && (
                        <div className="space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
                                    {skill.name}
                                </h1>
                                {skill.author && (
                                    <p className="text-sm text-slate-500 dark:text-slate-500 font-mono">
                                        by {skill.author}
                                    </p>
                                )}
                                {skill.description && (
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {skill.description}
                                    </p>
                                )}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-6 p-6 bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-dev-border rounded-2xl">
                                <div className="flex items-center gap-2">
                                    <span className="text-jade-500">📦</span>
                                    <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">{skill.installCount}</span>
                                    <span className="text-slate-600 dark:text-slate-400">installs</span>
                                </div>
                                {skill.version && (
                                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono">
                                        <span>Version:</span>
                                        <span className="font-bold">{skill.version}</span>
                                    </div>
                                )}
                            </div>

                            {/* Install Command */}
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                    Installation
                                </h2>
                                <div className="relative">
                                    <div className="bg-obsidian-900 dark:bg-obsidian-950 rounded-lg p-4 border border-dev-border">
                                        <code className="text-sm text-jade-500 font-mono break-all">
                                            linggen skills add {skill.repoUrl} --skill {skill.skillName}
                                        </code>
                                    </div>
                                    <button
                                        onClick={copyToClipboard}
                                        className="absolute top-2 right-2 px-3 py-1.5 bg-jade-500 hover:bg-jade-600 text-white text-xs font-bold rounded-lg transition-colors"
                                    >
                                        {copied ? '✓ Copied!' : 'Copy'}
                                    </button>
                                </div>
                            </div>

                            {/* Links */}
                            {skill.url && (
                                <div>
                                    <a
                                        href={skill.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-jade-500 hover:text-jade-600 font-medium"
                                    >
                                        View on GitHub ↗
                                    </a>
                                </div>
                            )}

                            {/* Content */}
                            {skill.content && (
                                <div className="space-y-3">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                                        SKILL.md
                                    </h2>
                                    <div className="p-6 bg-slate-50 dark:bg-obsidian-800 border border-slate-200 dark:border-dev-border rounded-2xl">
                                        <pre className="whitespace-pre-wrap font-mono text-sm text-slate-700 dark:text-slate-300 overflow-x-auto">
                                            {skill.content}
                                        </pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default SkillDetailPage
