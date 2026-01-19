function Compatibility() {
    const tools = ['Cursor', 'Zed', 'Windsurf', 'VS Code', 'Claude', 'OpenAI']
    
    return (
        <section className="py-20 border-y border-slate-200/40 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/10 transition-colors relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300 dark:to-slate-700" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 dark:text-slate-600 font-mono">
                            Powering leading AI workflows
                        </span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300 dark:to-slate-700" />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20 lg:gap-x-24">
                        {tools.map(tool => (
                            <span 
                                key={tool} 
                                className="text-2xl md:text-3xl font-display font-black text-slate-300 dark:text-slate-800 hover:text-jade-500/80 dark:hover:text-jade-500/50 hover:scale-110 transition-all duration-700 cursor-default select-none whitespace-nowrap group relative"
                            >
                                {tool}
                                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-jade-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-50" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compatibility

