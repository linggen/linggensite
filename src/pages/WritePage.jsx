import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CM6Editor from '../components/CM6Editor';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const INITIAL_TEMPLATE = `---
type: wiki
title: New Wiki Entry
date: ${new Date().toISOString().split('T')[0]}
summary: A shared definition of a concept or standard.
tags: [fundamentals, conventions]
---

# New Wiki Entry

Define the intent or concept here...

\`\`\`mermaid
graph TD
    A[Concept] --> B[Implementation]
    B --> C[Alignment]
\`\`\`
`;

function WritePage() {
    const [content, setContent] = useState(INITIAL_TEMPLATE);
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `new-wiki-entry.md`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-obsidian-900 transition-colors flex flex-col">
            <Navigation />

            <main className="flex-1 pt-24 pb-12 container mx-auto px-6 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-jade-500 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
                            <span className="p-1 bg-jade-500/10 rounded">✏️</span> Write Mode
                        </div>
                        <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
                            New Wiki Entry
                        </h1>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleCopy}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${copied
                                ? 'bg-jade-500 text-white'
                                : 'bg-slate-100 dark:bg-obsidian-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-obsidian-700'
                                }`}
                        >
                            {copied ? 'Copied!' : 'Copy Markdown'}
                        </button>
                        <button
                            onClick={handleDownload}
                            className="px-6 py-2 bg-jade-500 text-white rounded-lg text-sm font-bold hover:scale-105 transition-transform shadow-lg shadow-jade-500/20"
                        >
                            Download .md
                        </button>
                    </div>
                </div>

                <div className="flex-1 min-h-[600px]">
                    <CM6Editor
                        value={content}
                        onChange={(val) => setContent(val)}
                    />
                </div>

                <div className="mt-8 p-6 bg-jade-500/5 rounded-2xl border border-jade-500/20 flex items-center gap-4">
                    <div className="text-2xl">💡</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        This editor uses Linggen's <strong>Live Preview</strong> engine. Markdown syntax is hidden when you move the cursor away,
                        and Mermaid diagrams render automatically. To publish, download the file and add it to
                        <code className="mx-1 px-1.5 py-0.5 bg-obsidian-900 rounded text-jade-500 font-mono text-xs">src/content/articles/</code>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default WritePage;
