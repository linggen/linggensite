/**
 * Live Preview Plugin for CodeMirror 6
 * 
 * Ported from linggen/frontend
 */

import {
    Decoration,
    EditorView,
    ViewPlugin,
    WidgetType
} from '@codemirror/view';
import { syntaxTree } from '@codemirror/language';
import { RangeSetBuilder } from '@codemirror/state';

// Lazy mermaid import
let mermaidInstance = null;
let mermaidInitialized = false;

async function getMermaid() {
    if (!mermaidInstance) {
        try {
            const mermaidModule = await import('mermaid');
            mermaidInstance = mermaidModule.default;
            if (!mermaidInitialized) {
                const isDark = document.documentElement.classList.contains('dark');
                mermaidInstance.initialize({
                    startOnLoad: false,
                    theme: isDark ? 'dark' : 'default',
                    securityLevel: 'loose',
                });
                mermaidInitialized = true;
            }
        } catch (err) {
            console.error('Failed to load mermaid:', err);
            return null;
        }
    }
    return mermaidInstance;
}

const mermaidEditBlocks = new Set();

class MermaidWidget extends WidgetType {
    constructor(code, blockPos) {
        super();
        this.code = code;
        this.blockPos = blockPos;
        this.id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
    }

    toDOM(view) {
        const container = document.createElement('div');
        container.className = 'cm-mermaid-container relative my-4 rounded-xl overflow-hidden border border-dev-border bg-obsidian-900/50';

        const editBtn = document.createElement('button');
        editBtn.className = 'absolute top-2 right-2 bg-jade-500/80 hover:bg-jade-500 text-white px-2 py-1 rounded cursor-pointer text-[10px] z-10 opacity-0 transition-opacity font-bold uppercase tracking-wider';
        editBtn.textContent = 'Edit';

        container.addEventListener('mouseenter', () => editBtn.style.opacity = '1');
        container.addEventListener('mouseleave', () => editBtn.style.opacity = '0');

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mermaidEditBlocks.add(this.blockPos);
            view.dispatch({
                selection: { anchor: this.blockPos },
                scrollIntoView: true
            });
            view.focus();
        });

        const diagramContainer = document.createElement('div');
        diagramContainer.className = 'flex justify-center p-6 min-h-[100px]';
        diagramContainer.innerHTML = '<div class="text-slate-500 animate-pulse text-xs font-mono">Rendering diagram...</div>';

        container.appendChild(editBtn);
        container.appendChild(diagramContainer);

        this.renderMermaid(diagramContainer);
        return container;
    }

    async renderMermaid(container) {
        try {
            const mermaid = await getMermaid();
            if (!mermaid) {
                container.innerHTML = '<div class="text-red-500 p-2">Mermaid not available</div>';
                return;
            }
            const { svg } = await mermaid.render(this.id, this.code.trim());
            container.innerHTML = svg;
        } catch (err) {
            container.innerHTML = `<div class="text-red-500 text-xs p-4 bg-red-500/10 rounded-lg">Mermaid Error: ${err.message}</div>`;
        }
    }

    eq(other) {
        return this.code === other.code && this.blockPos === other.blockPos;
    }
}

class HorizontalRuleWidget extends WidgetType {
    toDOM() {
        const hr = document.createElement('hr');
        hr.className = 'border-none border-t border-dev-border my-6';
        return hr;
    }
}

class BulletWidget extends WidgetType {
    toDOM() {
        const span = document.createElement('span');
        span.className = 'text-jade-500 font-bold mr-2';
        span.textContent = '•';
        return span;
    }
}

const hiddenMarkDecoration = Decoration.mark({ class: 'hidden' });
const boldDecoration = Decoration.mark({ class: 'font-bold text-slate-900 dark:text-white' });
const italicDecoration = Decoration.mark({ class: 'italic text-slate-600 dark:text-slate-400' });
const codeDecoration = Decoration.mark({ class: 'bg-jade-500/10 text-jade-500 px-1.5 py-0.5 rounded font-mono text-sm border border-jade-500/20' });

function getActiveLines(view) {
    const activeLines = new Set();
    for (const range of view.state.selection.ranges) {
        const startLine = view.state.doc.lineAt(range.from).number;
        const endLine = view.state.doc.lineAt(range.to).number;
        for (let i = startLine; i <= endLine; i++) {
            activeLines.add(i);
        }
    }
    return activeLines;
}

export const livePreviewPlugin = ViewPlugin.fromClass(
    class {
        constructor(view) {
            this.decorations = this.buildDecorations(view);
        }

        update(update) {
            if (update.docChanged || update.selectionSet || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(view) {
            const activeLines = getActiveLines(view);
            const doc = view.state.doc;
            const decorations = [];

            for (const { from, to } of view.visibleRanges) {
                syntaxTree(view.state).iterate({
                    from,
                    to,
                    enter: (node) => {
                        const line = doc.lineAt(node.from);
                        const isActiveLine = activeLines.has(line.number);
                        if (isActiveLine) return;

                        const nodeType = node.name;

                        // Headers
                        if (nodeType === 'HeaderMark') {
                            decorations.push({
                                from: node.from,
                                to: node.to + 1,
                                decoration: hiddenMarkDecoration
                            });
                        }

                        // Bold
                        if (nodeType === 'StrongEmphasis') {
                            decorations.push({ from: node.from, to: node.from + 2, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.to - 2, to: node.to, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.from + 2, to: node.to - 2, decoration: boldDecoration });
                        }

                        // Italic
                        if (nodeType === 'Emphasis') {
                            decorations.push({ from: node.from, to: node.from + 1, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.to - 1, to: node.to, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.from + 1, to: node.to - 1, decoration: italicDecoration });
                        }

                        // Inline code
                        if (nodeType === 'InlineCode') {
                            decorations.push({ from: node.from, to: node.from + 1, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.to - 1, to: node.to, decoration: hiddenMarkDecoration });
                            decorations.push({ from: node.from + 1, to: node.to - 1, decoration: codeDecoration });
                        }

                        // HR
                        if (nodeType === 'HorizontalRule') {
                            decorations.push({
                                from: node.from,
                                to: node.to,
                                decoration: Decoration.replace({ widget: new HorizontalRuleWidget() })
                            });
                        }

                        // List markers
                        if (nodeType === 'ListMark') {
                            decorations.push({
                                from: node.from,
                                to: node.to + 1,
                                decoration: Decoration.replace({ widget: new BulletWidget() })
                            });
                        }
                    }
                });
            }

            // Mermaid
            const fullText = doc.toString();
            const mermaidRegex = /```mermaid\s*\n([\s\S]*?)```/g;
            let match;
            while ((match = mermaidRegex.exec(fullText)) !== null) {
                const blockCode = match[1];
                const blockStart = match.index;
                const blockEnd = match.index + match[0].length;

                if (mermaidEditBlocks.has(blockStart)) {
                    let stillEditing = false;
                    for (const range of view.state.selection.ranges) {
                        if (range.from <= blockEnd && range.to >= blockStart) {
                            stillEditing = true;
                            break;
                        }
                    }
                    if (!stillEditing) {
                        mermaidEditBlocks.delete(blockStart);
                    } else {
                        continue;
                    }
                }

                decorations.push({
                    from: blockStart,
                    to: blockStart,
                    decoration: Decoration.widget({
                        widget: new MermaidWidget(blockCode, blockStart),
                        side: 1
                    })
                });

                const startLine = doc.lineAt(blockStart).number;
                const endLine = doc.lineAt(blockEnd).number;
                for (let i = startLine; i <= endLine; i++) {
                    const l = doc.line(i);
                    decorations.push({ from: l.from, to: l.from, decoration: Decoration.line({ class: 'hidden' }) });
                }
            }

            decorations.sort((a, b) => a.from - b.from || a.to - b.to);
            const builder = new RangeSetBuilder();
            for (const { from, to, decoration } of decorations) {
                try { builder.add(from, to, decoration); } catch (e) { /* ignore */ }
            }
            return builder.finish();
        }
    },
    { decorations: (v) => v.decorations }
);

export const livePreviewTheme = EditorView.theme({
    '.hidden': { display: 'none !important' },
    '.cm-mermaid-container svg': { maxWidth: '100%', height: 'auto' }
});
