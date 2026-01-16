import { motion } from 'framer-motion'

function Advantage() {
    return (
        <section className="py-24 bg-obsidian-900" id="why-linggen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
                        The Linggen Advantage
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto italic font-mono text-sm">
                        "Focus on the What and the Why — Linggen handles the How."
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="flex">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-10 bg-obsidian-800/30 rounded-3xl border border-dev-border relative overflow-hidden group flex-1"
                        >
                            <div className="absolute top-0 right-0 p-4 text-[10px] font-bold uppercase tracking-widest text-obsidian-700 font-mono">
                                Old Way
                            </div>
                            <h3 className="text-2xl font-bold text-obsidian-700 mb-6 font-display line-through decoration-obsidian-700">
                                The Context Gap
                            </h3>
                            <p className="text-obsidian-700 mb-8 font-medium">
                                AI is blind to anything you haven't manually copy-pasted.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Manual file hunting & pasting',
                                    'Frequent architectural hallucinations',
                                    'Loses context between sessions',
                                    'No understanding of file relationships'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-obsidian-700 text-sm">
                                        <span className="text-xs opacity-50 italic">✕</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-xs font-bold uppercase tracking-widest text-obsidian-700 font-mono italic">
                                AI is guessing
                            </div>
                        </motion.div>
                    </div>
                    
                    <div className="flex">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-10 bg-obsidian-800 rounded-3xl border-2 border-jade-500 shadow-2xl shadow-jade-500/10 relative overflow-hidden flex-1"
                        >
                            <div className="absolute top-0 right-0 p-4 text-[10px] font-bold uppercase tracking-widest text-jade-500 font-mono">
                                Linggen Way
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 font-display flex items-center gap-3">
                                <span className="text-jade-500">✶</span> AI Orchestration
                            </h3>
                            <p className="text-slate-300 mb-8 font-medium">
                                AI has a persistent, searchable map of your entire ecosystem.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Zero-config Skill-based retrieval',
                                    'Accurate "blast-radius" analysis via Graph',
                                    'Persistent Spec Holder for design decisions',
                                    'Team Mode: Shared truth for everyone'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-200 text-sm font-semibold">
                                        <span className="text-jade-500">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center gap-3">
                                <div className="text-xs font-bold uppercase tracking-widest text-jade-500 font-mono animate-pulse">
                                    AI understands
                                </div>
                                <div className="flex-1 h-px bg-jade-500/20" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantage

