import React, { useState, useEffect, useCallback, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { livePreviewPlugin, livePreviewTheme } from './cm6-live-preview';

const linggenTheme = EditorView.theme({
    '&': {
        fontSize: '15px',
        height: '100%',
    },
    '.cm-content': {
        fontFamily: 'var(--font-mono)',
        padding: '2rem',
    },
    '.cm-line': {
        padding: '0 4px',
    },
    '.cm-gutters': {
        backgroundColor: 'transparent',
        borderRight: '1px solid var(--color-dev-border)',
        color: 'var(--color-obsidian-700)',
    },
    '.cm-activeLine': {
        backgroundColor: 'rgba(0, 212, 170, 0.05)',
    }
});

function CM6Editor({ value, onChange, placeholder = "Start writing design intent..." }) {
    const [isDarkMode, setIsDarkMode] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="h-full w-full bg-white dark:bg-obsidian-900 overflow-hidden rounded-2xl border border-slate-200 dark:border-dev-border shadow-2xl">
            <CodeMirror
                value={value}
                height="100%"
                theme={isDarkMode ? oneDark : 'light'}
                onChange={onChange}
                placeholder={placeholder}
                extensions={[
                    markdown({
                        base: markdownLanguage,
                        codeLanguages: languages
                    }),
                    linggenTheme,
                    livePreviewPlugin,
                    livePreviewTheme,
                    EditorView.lineWrapping,
                ]}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    dropCursor: true,
                    allowMultipleSelections: true,
                    indentOnInput: true,
                }}
            />
        </div>
    );
}

export default CM6Editor;
