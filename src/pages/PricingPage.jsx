import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function PricingPage() {
    return (
        <div className="bg-white dark:bg-obsidian-900 min-h-screen transition-colors">
            <Navigation />
            
            <main className="pt-32 pb-24">
                <section className="container mx-auto px-6 text-center mb-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6"
                    >
                        Simple, Trust-Based Pricing
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Free for individuals. Commercial licenses for teams and enterprises. 
                        No credit card required to get started.
                    </motion.p>
                </section>

                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {/* Individual Plan */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-10 bg-slate-50 dark:bg-obsidian-800/30 rounded-3xl border border-slate-200 dark:border-dev-border flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-obsidian-700 font-mono mb-6">Open Source</div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">Individual</h2>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">$0<span className="text-sm font-normal text-slate-500">/ forever</span></div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
                                Perfect for solo developers, students, and open-source contributors.
                            </p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {['Full local indexing', 'Persistent Memory', 'Visual System Map', 'Local Vector Search', 'Cursor & Zed Integration'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="text-jade-500">✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/docs" className="w-full py-3 bg-white text-obsidian-900 text-center font-bold rounded-xl hover:scale-[1.02] transition-transform">
                                Get Started
                            </Link>
                        </motion.div>

                        {/* Commercial Plan */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="p-10 bg-white dark:bg-obsidian-800 rounded-3xl border-2 border-jade-500 shadow-2xl shadow-jade-500/10 flex flex-col h-full relative"
                        >
                            <div className="absolute top-0 right-0 p-4">
                                <span className="px-3 py-1 bg-jade-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Recommended</span>
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-jade-500 font-mono mb-6">For Professionals</div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">Commercial</h2>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">$50<span className="text-sm font-normal text-slate-500">/ user / year</span></div>
                            <p className="text-slate-700 dark:text-slate-300 mb-8 text-sm">
                                For professional teams (5+) and companies using Linggen in commercial environments.
                            </p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {['All Individual features', 'Commercial Use Rights', 'Priority Technical Support', 'Team Memory Sync (Soon)', 'Shared Knowledge Graph'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-semibold">
                                        <span className="text-jade-500">✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="mailto:linggen77@gmail.com" className="w-full py-3 bg-jade-500 text-white text-center font-bold rounded-xl hover:scale-[1.02] transition-transform">
                                Contact for License
                            </a>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-10 bg-slate-50 dark:bg-obsidian-800/30 rounded-3xl border border-slate-200 dark:border-dev-border flex flex-col h-full"
                        >
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-obsidian-700 font-mono mb-6">High Control</div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">Enterprise</h2>
                            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Custom</div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
                                For large organizations requiring centralized control, security, and governance.
                            </p>
                            <ul className="space-y-4 mb-10 flex-1">
                                {['SSO / SAML Support', 'RBAC & Audit Logs', 'On-Prem Deployment', 'Dedicated Account Manager', 'Custom SLA'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="text-jade-500">✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="mailto:linggen77@gmail.com" className="w-full py-3 border border-slate-200 dark:border-dev-border text-slate-900 dark:text-white text-center font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors">
                                Contact Sales
                            </a>
                        </motion.div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-12">
                        <h3 className="text-2xl font-bold font-display text-center text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 italic">Do I need a license for a team of 2?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    No. Linggen is free for small teams up to 5 users. Once you grow, we ask for support.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 italic">Is there a SaaS version?</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Linggen is local-first for privacy. We're working on managed sync for effortless team collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default PricingPage
