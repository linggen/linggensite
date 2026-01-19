import { motion } from 'framer-motion'

function Advantage() {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden" id="why-linggen">
            <div className="bg-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 bg-jade-500/5 scale-150" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 tracking-tight">
                        Keep code true to the design
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic font-display font-medium leading-relaxed">
                        "You define the direction — Linggen helps the AI follow it."
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
                    <div className="flex">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-12 bg-slate-50/50 dark:bg-slate-800/20 backdrop-blur-sm rounded-[3rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden group flex-1"
                        >
                            <div className="absolute top-0 right-0 p-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600 font-mono">
                                The Old Way
                            </div>
                            <h3 className="text-3xl font-black text-slate-400 dark:text-slate-700 mb-8 font-display tracking-tight line-through decoration-slate-300 dark:decoration-slate-800 decoration-2">
                                The Context Gap
                            </h3>
                            <p className="text-slate-500 dark:text-slate-600 mb-10 font-medium leading-relaxed">
                                AI is blind to anything you haven't manually copy-pasted or indexed with shallow RAG.
                            </p>
                            <ul className="space-y-5 mb-12">
                                {[
                                    'Manual file hunting & pasting',
                                    'Frequent architectural hallucinations',
                                    'Loses context between sessions',
                                    'No understanding of design intent'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-400 dark:text-slate-700 text-sm">
                                        <span className="mt-1 text-xs opacity-50 font-black">✕</span> 
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-700 font-mono italic">
                                AI is guessing
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="flex">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-12 bg-white dark:bg-slate-800 rounded-[3rem] border-2 border-jade-500 shadow-2xl shadow-jade-500/10 relative overflow-hidden flex-1 group"
                        >
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-jade-500/10 rounded-full blur-3xl group-hover:bg-jade-500/20 transition-all duration-700" />
                            
                            <div className="absolute top-0 right-0 p-6 text-[10px] font-black uppercase tracking-[0.3em] text-jade-500 font-mono">
                                The Linggen Way
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 font-display tracking-tight flex items-center gap-4">
                                <span className="text-jade-500 animate-pulse">✶</span> Anchored Alignment
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 mb-10 font-medium leading-relaxed">
                                AI follows your team’s rules and intent without repeated prompting or drift.
                            </p>
                            <ul className="space-y-5 mb-12">
                                {[
                                    'Design Anchors keep intent close to the code',
                                    'Skills capture your team’s “way of working”',
                                    'Dependency graph helps you see impact first',
                                    'Shared Wiki: one source of truth for AI'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-900 dark:text-slate-100 text-sm font-bold">
                                        <span className="mt-1 text-jade-500 font-black">✓</span> 
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-4">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-jade-500 font-mono">
                                    AI understands
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-jade-500/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage

