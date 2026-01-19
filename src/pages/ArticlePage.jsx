import { Link, useLocation, useParams } from 'react-router-dom'
import { markdownToHtml, parseFrontmatter, slugify } from '../utils/markdown'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function loadArticleBySlug(slug) {
    const modules = import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default', eager: true })
    const matchKey = Object.keys(modules).find((k) => k.endsWith(`/${slug}.md`))
    if (!matchKey) return null
    const raw = modules[matchKey]
    const { data, body } = parseFrontmatter(raw)
    return { slug, data, body }
}

function ArticlePage() {
    const { slug } = useParams()
    const location = useLocation()
    const basePath = '/wiki'
    const article = loadArticleBySlug(slug)

    if (!article || article.data.type !== 'wiki') {
        return (
            <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors">
                <div className="container mx-auto px-6 pt-28 pb-20">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">
                            Not found
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            This wiki entry doesn’t exist.
                        </p>
                        <Link className="text-jade-500 hover:text-jade-600 font-bold" to={basePath}>
                            ← Back to Wiki
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    // Keep blog/wiki separation: if types don't match, still show but link back correctly
    const html = markdownToHtml(article.body, { stripFirstH1: true })
    const title = article.data.title || article.slug
    const summary = article.data.summary || ''
    const date = article.data.date || ''
    const words = String(article.body || '').trim().split(/\s+/).filter(Boolean).length
    const readingMins = Math.max(1, Math.round(words / 200))

    const toc = (() => {
        // Extract headings (## / ###) while ignoring fenced code blocks.
        const md = String(article.body || '').replaceAll('\r\n', '\n')
        const parts = md.split(/```/g)
        const headings = []
        for (let i = 0; i < parts.length; i += 2) {
            const text = parts[i]
            const lines = text.split('\n')
            for (const line of lines) {
                const m = line.match(/^(#{2,3})\s+(.*)$/)
                if (!m) continue
                const level = m[1].length
                const rawTitle = m[2].trim()
                headings.push({ level, title: rawTitle, id: slugify(rawTitle) })
            }
        }
        return headings
    })()

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors flex flex-col">
            <Navigation />

            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between gap-4 mb-8">
                        <Link className="text-jade-500 hover:text-jade-600 font-bold" to={basePath}>
                            ← Wiki
                        </Link>
                        <div className="flex items-center gap-4">
                            {date ? (
                                <span className="text-[10px] text-slate-500 dark:text-obsidian-700 font-mono whitespace-nowrap">
                                    {date}
                                </span>
                            ) : null}
                            <span className="text-[10px] text-slate-500 dark:text-obsidian-700 font-mono whitespace-nowrap">
                                {readingMins} min read
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
                        <div className="max-w-3xl">
                            <header className="mb-10">
                                <h1 className="text-4xl md:text-6xl font-black font-display text-slate-900 dark:text-white mb-5 tracking-tight leading-[1.05]">
                                    {title}
                                </h1>
                                {summary ? (
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                                        {summary}
                                    </p>
                                ) : null}
                            </header>

                            <article
                                className="lg-article"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>

                        {toc.length ? (
                            <aside className="hidden lg:block sticky top-28">
                                <div className="rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl p-5">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-500 mb-4">
                                        On this page
                                    </div>
                                    <nav className="space-y-2">
                                        {toc.map((h) => (
                                            <a
                                                key={`${h.id}-${h.level}`}
                                                href={`#${h.id}`}
                                                className={`block text-sm text-slate-600 dark:text-slate-400 hover:text-jade-500 transition-colors ${h.level === 3 ? 'pl-4' : ''}`}
                                            >
                                                {h.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>
                        ) : null}
                    </div>

                    {/* hint for back navigation context */}
                    {location.state?.from ? (
                        <div className="mt-12 text-xs text-slate-500 dark:text-obsidian-700 font-mono">
                            from: {location.state.from}
                        </div>
                    ) : null}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default ArticlePage

