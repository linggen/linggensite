function Compatibility() {
    const tools = ['Cursor', 'Zed', 'Windsurf', 'VS Code', 'Claude', 'OpenAI']
    
    return (
        <section className="py-12 border-y border-slate-200 dark:border-dev-border bg-white dark:bg-obsidian-900 transition-colors">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 dark:text-obsidian-700 font-mono">
                        Works with your AI coding tools:
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
                        {tools.map(tool => (
                            <span 
                                key={tool} 
                                className="text-xl md:text-2xl font-display font-bold text-slate-500 dark:text-obsidian-700 hover:text-jade-500 transition-all duration-300 cursor-default select-none whitespace-nowrap"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compatibility

