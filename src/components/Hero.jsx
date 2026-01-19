import { useState } from 'react'
import { motion } from 'framer-motion'
import appScreenshot from '../assets/sources.png'
import mdEditorScreenshot from '../assets/md-editor.png'
import { INSTALL_ONE_LINER, INSTALL_COMMAND } from '../constants'

function Hero() {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(INSTALL_ONE_LINER)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const useCases = [
        { role: "User", text: "How does this project handle auth?" },
        { role: "Linggen", text: "Reading .linggen/memory/auth-flow.md... Orchestrating context..." },
        { role: "User", text: "Apply our team's style to this component." },
        { role: "Linggen", text: "Applying Skills from .linggen/skills/react-style.md..." }
    ]
    const anchoredMemoryExample = `// linggen memory: auth-flow.md | Authentication Logic Spec`

    return (
        <section className="relative pt-32 pb-20 overflow-hidden" id="home">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Headline & Subtitle */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-8 text-slate-900 dark:text-white max-w-[20ch] mx-auto lg:mx-0"
                        >
                            You define what the code should become.
                            <span className="text-jade-500 block mt-2">Linggen makes it stay that way.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-12"
                        >
                            Linggen anchors design decisions, rules, and intent directly into your codebase—so humans and AI can evolve it without drifting from the original design.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <a href="#get-started" className="px-8 py-4 bg-obsidian-900 text-white dark:bg-white dark:text-obsidian-900 font-bold rounded-lg hover:scale-105 transition-transform">
                                Get Started
                            </a>
                            <a href="/docs" className="px-8 py-4 border border-slate-300 dark:border-dev-border font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-obsidian-800 transition-colors text-slate-900 dark:text-white">
                                Read Docs
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Terminal & Interactive Demo */}
                    <div className="flex-1 w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-obsidian-900 rounded-xl border border-dev-border shadow-2xl overflow-hidden font-mono text-sm"
                        >
                            {/* Terminal Header */}
                            <div className="bg-obsidian-800 px-4 py-3 border-b border-dev-border flex items-center justify-between text-slate-400">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                                </div>
                                <div className="text-[10px] uppercase tracking-widest font-bold">bash — installation</div>
                                <div className="w-12" />
                            </div>

                            {/* Terminal Content */}
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-slate-500"># 1. Install CLI</div>
                                    <div className="flex items-center justify-between gap-4 group/cmd">
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <span className="text-jade-500 flex-shrink-0">❯</span>
                                            <code className="text-jade-500 font-bold break-all truncate">{INSTALL_ONE_LINER}</code>
                                        </div>
                                        <button
                                            onClick={copyToClipboard}
                                            className={`flex-shrink-0 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter transition-all flex items-center gap-1.5 ${copied
                                                ? 'bg-jade-500 text-white opacity-100'
                                                : 'bg-obsidian-700 text-slate-400 hover:bg-obsidian-600 opacity-50 hover:opacity-100'
                                                }`}
                                        >
                                            {copied ? (
                                                <>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                                    Copy
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-slate-500"># 2. Start Orchestrator</div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-jade-500">❯</span>
                                        <code className="text-white font-bold">linggen</code>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature Preview Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 p-6 bg-obsidian-800 rounded-xl border border-dev-border shadow-xl relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 bg-jade-500/20 rounded-lg text-jade-500">⚓</span>
                                    <span className="font-bold text-white text-lg">Design Anchors</span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono">.linggen/memory/auth-flow.md</span>
                            </div>

                            <div className="space-y-4">
                                <div className="p-3 bg-obsidian-900/50 rounded-lg border border-jade-500/30 relative group">
                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-jade-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                    
                                    <div className="flex items-center gap-2 mb-2 opacity-50">
                                        <span className="text-jade-500 text-xs">⚓</span>
                                        <span className="text-[10px] font-bold text-jade-400 uppercase tracking-widest">Design Anchor</span>
                                    </div>
                                    
                                    <div className="text-sm text-slate-300 italic font-mono truncate pl-6">
                                        {anchoredMemoryExample}
                                    </div>
                                </div>
                                
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    Your assistant sees the same intent your team does—right next to the code.
                                </p>
                                
                                <ul className="space-y-2 text-xs text-slate-500">
                                    <li className="flex items-center gap-2">
                                        <span className="text-jade-500">✶</span> Fewer repeats, better output
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-jade-500">✶</span> Prevents AI “code drift”
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
