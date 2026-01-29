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
            {/* Background Blobs */}
            <div className="bg-blob top-[-100px] left-[-100px] opacity-50" />
            <div className="bg-blob bottom-[-100px] right-[-100px] bg-jade-500/5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Headline & Subtitle */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-8 text-slate-900 dark:text-white max-w-[20ch] mx-auto lg:mx-0"
                        >
                            Fast start.
                            <span className="bg-gradient-to-r from-jade-500 to-emerald-500 bg-clip-text text-transparent block mt-2">
                                Long-term alignment.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0"
                        >
                            Linggen helps coding AIs understand your project from day one, and keep your design intent anchored as the code evolves.<br/>
                            Sub-agent? MCP? Plugin? Skills? No. Linggen sets it up, you focus on building.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-5"
                        >
                            <a href="/docs" className="group relative px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-jade-500/20 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-jade-500/0 via-jade-500/20 to-jade-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <span className="relative">Get Started</span>
                            </a>
                            {/* <a href="/docs" className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 font-bold rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 hover:border-jade-500/50">
                                Read Docs
                            </a> */}
                        </motion.div>
                    </div>

                    {/* Right: Terminal & Interactive Demo */}
                    <div className="flex-1 w-full max-w-2xl relative">
                        <div className="absolute -left-8 top-1/2 bottom-0 w-px bg-gradient-to-b from-jade-500/20 via-jade-500/5 to-transparent hidden xl:block" />

                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-jade-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm"
                            >
                                {/* Terminal Header */}
                                <div className="bg-slate-800/50 backdrop-blur-md px-5 py-4 border-b border-slate-800 flex items-center justify-between text-slate-400">
                                    <div className="flex gap-2.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-lg shadow-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-lg shadow-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-lg shadow-green-500/20" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">bash — installation</div>
                                    <div className="w-12" />
                                </div>

                                {/* Terminal Content */}
                                <div className="p-8 space-y-6">
                                    <div className="space-y-3">
                                        <div className="text-slate-300 text-[10px] font-bold uppercase tracking-widest"># Quick Start</div>
                                        <div className="flex items-center justify-between gap-4 group/cmd">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <span className="text-jade-300 flex-shrink-0 font-bold">❯</span>
                                                <code className="text-jade-300 font-bold break-all selection:bg-jade-500 selection:text-slate-900">{INSTALL_ONE_LINER}</code>
                                            </div>
                                            <button
                                                onClick={copyToClipboard}
                                                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-inner ${copied
                                                    ? 'bg-jade-500 text-white'
                                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                                                    }`}
                                            >
                                                {copied ? 'Copied' : 'Copy'}
                                            </button>
                                        </div>
                                    </div>
                               
                                </div>
                            </motion.div>
                        </div>

                        {/* Feature Preview Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity">
                                <span className="text-8xl text-white">⚓</span>
                            </div>

                            <div className="flex items-center justify-between mb-8 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-jade-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-jade-500/20 transition-transform group-hover:scale-110">
                                        <span className="text-xl font-bold">⚓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-xl tracking-tight leading-none mb-1">Design Anchors</h3>
                                        <p className="text-[10px] text-jade-300 font-mono font-bold uppercase tracking-widest">Memory Context</p>
                                    </div>
                                </div>
                                <div className="text-[10px] text-jade-300 font-mono bg-jade-500/20 px-3 py-1.5 rounded-full border border-jade-500/40 backdrop-blur-md">
                                    auth-flow.md
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-jade-400 to-emerald-600 shadow-[0_0_20px_rgba(0,212,170,0.4)]"></div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="text-[10px] font-black text-jade-300 uppercase tracking-[0.3em]">Active Intent Layer</div>
                                    </div>

                                    <div className="text-sm text-jade-300 font-mono leading-relaxed pl-2 selection:bg-jade-500 selection:text-slate-900">
                                        {anchoredMemoryExample}
                                    </div>
                                </div>

                                <p className="text-base text-slate-300 leading-relaxed px-1 font-medium">
                                    Your assistant sees the <strong className="text-white">original design intent</strong> right next to the code, preventing refactor drift.
                                </p>

                                <div className="flex flex-wrap gap-5 px-1">
                                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-jade-500 shadow-[0_0_10px_rgba(0,212,170,0.8)]" />
                                        Team Ready
                                    </div>
                                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                                        <span className="w-2 h-2 rounded-full bg-jade-500 shadow-[0_0_10px_rgba(0,212,170,0.8)]" />
                                        Local First
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
