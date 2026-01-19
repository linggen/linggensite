function escapeHtml(s) {
    return String(s)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;')
}

export function slugify(s) {
    return String(s)
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export function parseFrontmatter(raw) {
    const text = String(raw || '')
    if (!text.startsWith('---\n')) {
        return { data: {}, body: text }
    }

    const end = text.indexOf('\n---\n', 4)
    if (end === -1) {
        return { data: {}, body: text }
    }

    const fm = text.slice(4, end).trim()
    const body = text.slice(end + '\n---\n'.length)

    const data = {}
    for (const line of fm.split('\n')) {
        const trimmed = line.trim()
        if (!trimmed || trimmed.startsWith('#')) continue
        const idx = trimmed.indexOf(':')
        if (idx === -1) continue
        const key = trimmed.slice(0, idx).trim()
        let value = trimmed.slice(idx + 1).trim()

        // basic arrays: [a, b, c]
        if (value.startsWith('[') && value.endsWith(']')) {
            const inner = value.slice(1, -1).trim()
            data[key] = inner
                ? inner.split(',').map((v) => v.trim()).filter(Boolean)
                : []
            continue
        }

        // strip quotes
        value = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1')
        data[key] = value
    }

    return { data, body }
}

export function markdownToHtml(rawMarkdown, opts = {}) {
    const md = String(rawMarkdown || '').replaceAll('\r\n', '\n')
    const { stripFirstH1 = false } = opts || {}

    // split out fenced code blocks first
    const parts = md.split(/```/g)
    const out = []
    let didStripH1 = false

    for (let i = 0; i < parts.length; i++) {
        const chunk = parts[i]
        const isCode = i % 2 === 1

        if (isCode) {
            const firstNewline = chunk.indexOf('\n')
            const lang = firstNewline === -1 ? '' : chunk.slice(0, firstNewline).trim()
            const code = firstNewline === -1 ? chunk : chunk.slice(firstNewline + 1)
            out.push(
                `<pre><code class="language-${escapeHtml(lang || 'text')}">${escapeHtml(code.trimEnd())}</code></pre>`
            )
            continue
        }

        // normal text chunk (no code fences)
        const lines = chunk.split('\n')
        let idx = 0
        while (idx < lines.length) {
            const line = lines[idx]

            // horizontal rule
            if (/^\s*---+\s*$/.test(line)) {
                out.push('<hr />')
                idx++
                continue
            }

            // headings
            const h = line.match(/^(#{1,6})\s+(.*)$/)
            if (h) {
                const level = h[1].length
                const text = h[2].trim()
                const id = slugify(text)
                if (stripFirstH1 && !didStripH1 && level === 1) {
                    didStripH1 = true
                    idx++
                    continue
                }
                out.push(`<h${level} id="${id}">${inlineMarkdown(escapeHtml(text))}</h${level}>`)
                idx++
                continue
            }

            // lists
            if (/^\s*[-*]\s+/.test(line)) {
                const items = []
                while (idx < lines.length && /^\s*[-*]\s+/.test(lines[idx])) {
                    const item = lines[idx].replace(/^\s*[-*]\s+/, '').trim()
                    items.push(`<li>${inlineMarkdown(escapeHtml(item))}</li>`)
                    idx++
                }
                out.push(`<ul>${items.join('')}</ul>`)
                continue
            }

            // ordered lists (1. 2. ...)
            if (/^\s*\d+\.\s+/.test(line)) {
                const items = []
                while (idx < lines.length && /^\s*\d+\.\s+/.test(lines[idx])) {
                    const item = lines[idx].replace(/^\s*\d+\.\s+/, '').trim()
                    items.push(`<li>${inlineMarkdown(escapeHtml(item))}</li>`)
                    idx++
                }
                out.push(`<ol>${items.join('')}</ol>`)
                continue
            }

            // blockquote
            if (/^\s*>\s+/.test(line)) {
                const quoteLines = []
                while (idx < lines.length && /^\s*>\s+/.test(lines[idx])) {
                    quoteLines.push(lines[idx].replace(/^\s*>\s+/, '').trim())
                    idx++
                }
                out.push(`<blockquote>${inlineMarkdown(escapeHtml(quoteLines.join(' ')))}</blockquote>`)
                continue
            }

            // blank line
            if (!line.trim()) {
                idx++
                continue
            }

            // paragraph (merge until blank)
            const para = []
            while (idx < lines.length && lines[idx].trim()) {
                para.push(lines[idx].trim())
                idx++
            }
            out.push(`<p>${inlineMarkdown(escapeHtml(para.join(' ')))}</p>`)
        }
    }

    return out.join('\n')
}

function inlineMarkdown(escapedText) {
    // inline code: `code`
    let s = escapedText.replace(/`([^`]+)`/g, (_, code) => `<code>${code}</code>`)
    // links: [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
        const safeUrl = String(url).startsWith('http') || String(url).startsWith('/') ? url : '#'
        return `<a href="${safeUrl}">${text}</a>`
    })
    // bold/italic (simple)
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>')
    return s
}

