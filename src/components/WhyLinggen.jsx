import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function WhyLinggen() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-obsidian-800/20" id="why">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-white dark:bg-obsidian-900 rounded-[3rem] border border-slate-200 dark:border-dev-border shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 select-none pointer-events-none">
                            <span className="text-9xl font-display font-black text-jade-500">“</span>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-jade-500 font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                <span className="w-8 h-px bg-jade-500" /> The Vision
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight">
                                From implementers to <span className="text-jade-500 italic">architects</span>.
                            </h2>
                            
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                <p>
                                    In the era of AI coding, the bottleneck is no longer typing code—it's managing <strong>intent</strong>. 
                                    Every developer is now an architect, making decisions that determine the future of the system.
                                </p>
                                <p>
                                    Linggen is your organization's living engineering spec. It anchors product intent, 
                                    architectural decisions, and team conventions directly into the codebase, so both humans and AI 
                                    can ship changes without drifting from the original design.
                                </p>
                                <p className="font-medium text-slate-900 dark:text-white">
                                    Define the intent once. Let Linggen make it stay that way.
                                </p>
                            </div>
                            
                            <div className="mt-12 pt-12 border-t border-slate-100 dark:border-dev-border/50 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-jade-500/20 flex items-center justify-center text-xl">
                                        🚀
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Built for the future of work</div>
                                        <div className="text-sm text-slate-500">Spec-driven, AI-aligned development</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Link to="/wiki" className="text-sm font-bold text-jade-500 hover:underline">Explore the wiki →</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyLinggen
