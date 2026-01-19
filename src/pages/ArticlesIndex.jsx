import { Link, useLocation } from 'react-router-dom'
import { parseFrontmatter } from '../utils/markdown'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function loadArticles() {
    const modules = import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default', eager: true })
    const articles = Object.entries(modules).map(([path, raw]) => {
        const { data, body } = parseFrontmatter(raw)
        const slug = path.split('/').pop()?.replace(/\.md$/, '') || path
        return {
            slug,
            type: data.type || 'blog',
            title: data.title || slug,
            date: data.date || '',
            summary: data.summary || '',
            tags: Array.isArray(data.tags) ? data.tags : [],
            _body: body
        }
    })

    return articles.sort((a, b) => String(b.date).localeCompare(String(a.date)))
}

function ArticlesIndex({ type = 'wiki' }) {
    const location = useLocation()
    const basePath = '/wiki'
    const title = 'Wiki'
    const subtitle = 'Living definitions and internal concepts — short, versioned, and linkable.'

    const articles = loadArticles().filter((a) => a.type === 'wiki')

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors flex flex-col">
            <Navigation />

            <main className="flex-1 container mx-auto px-6 pt-32 pb-20">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-obsidian-700 font-mono mb-4">
                        <span className="p-1 bg-jade-500/10 rounded">📚</span> Wiki
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
                            {title}
                        </h1>
                        <Link
                            to={`${basePath}/new`}
                            className="px-4 py-2 bg-jade-500/10 text-jade-500 border border-jade-500/20 rounded-lg text-sm font-bold hover:bg-jade-500 hover:text-white transition-all"
                        >
                            + Write
                        </Link>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
                        {subtitle}
                    </p>

                    <div className="space-y-4">
                        {articles.map((a) => (
                            <Link
                                key={a.slug}
                                to={`${basePath}/${a.slug}`}
                                state={{ from: location.pathname }}
                                className="block p-6 bg-slate-50 dark:bg-obsidian-800/40 rounded-2xl border border-slate-200 dark:border-dev-border hover:border-jade-500/50 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                                        {a.title}
                                    </h2>
                                    {a.date ? (
                                        <span className="text-[10px] text-slate-500 dark:text-obsidian-700 font-mono whitespace-nowrap">
                                            {a.date}
                                        </span>
                                    ) : null}
                                </div>
                                {a.summary ? (
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {a.summary}
                                    </p>
                                ) : null}
                                {a.tags?.length ? (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {a.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] font-mono px-2 py-1 rounded-full bg-jade-500/10 text-jade-500 border border-jade-500/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </Link>
                        ))}

                        {articles.length === 0 ? (
                            <div className="p-6 text-sm text-slate-600 dark:text-slate-400 italic">
                                No articles yet. Add a Markdown file under <code className="font-mono">src/content/articles/</code>.
                            </div>
                        ) : null}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default ArticlesIndex

