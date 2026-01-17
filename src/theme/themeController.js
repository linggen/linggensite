const THEME_PREF_KEY = 'linggen.themePreference'

// Preference values:
// - "system": follow system preference (at night), but still use light during daytime
// - "light": force light
// - "dark": force dark
const VALID_PREFS = new Set(['system', 'light', 'dark'])

const DAY_START_HOUR = 7  // inclusive
const DAY_END_HOUR = 19   // exclusive

function isDaytime(date = new Date()) {
  const h = date.getHours()
  return h >= DAY_START_HOUR && h < DAY_END_HOUR
}

function getStoredPreference() {
  try {
    const raw = window.localStorage.getItem(THEME_PREF_KEY)
    return VALID_PREFS.has(raw) ? raw : 'system'
  } catch {
    return 'system'
  }
}

export function setThemePreference(pref) {
  const next = VALID_PREFS.has(pref) ? pref : 'system'
  try {
    window.localStorage.setItem(THEME_PREF_KEY, next)
  } catch {
    // ignore
  }
  applyResolvedTheme()
}

function getSystemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false
}

function resolveTheme(pref, date = new Date()) {
  if (pref === 'light') return 'light'
  if (pref === 'dark') return 'dark'
  // pref === 'system'
  if (isDaytime(date)) return 'light'
  return getSystemPrefersDark() ? 'dark' : 'light'
}

function applyTheme(theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme

  // Keep browser UI color in sync (best-effort).
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0b0e14' : '#ffffff')
}

let cleanupFns = []

function clearController() {
  cleanupFns.forEach((fn) => {
    try { fn() } catch { /* ignore */ }
  })
  cleanupFns = []
}

function scheduleNextTimeBoundary() {
  // Recompute at the next boundary (07:00 or 19:00) local time.
  const now = new Date()
  const next = new Date(now)
  next.setMinutes(0, 0, 0)

  const h = now.getHours()
  if (h < DAY_START_HOUR) {
    next.setHours(DAY_START_HOUR)
  } else if (h < DAY_END_HOUR) {
    next.setHours(DAY_END_HOUR)
  } else {
    next.setDate(next.getDate() + 1)
    next.setHours(DAY_START_HOUR)
  }

  const delayMs = Math.max(1_000, next.getTime() - now.getTime())
  const id = window.setTimeout(() => {
    applyResolvedTheme()
    // re-arm
    scheduleNextTimeBoundary()
  }, delayMs)

  cleanupFns.push(() => window.clearTimeout(id))
}

export function applyResolvedTheme() {
  if (typeof document === 'undefined') return
  const pref = getStoredPreference()
  const theme = resolveTheme(pref, new Date())
  applyTheme(theme)
}

export function initThemeController() {
  if (typeof window === 'undefined') return

  clearController()
  applyResolvedTheme()

  // React to system theme changes (only meaningful when pref === "system" and it's nighttime).
  const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
  if (mq?.addEventListener) {
    const onChange = () => applyResolvedTheme()
    mq.addEventListener('change', onChange)
    cleanupFns.push(() => mq.removeEventListener('change', onChange))
  } else if (mq?.addListener) {
    const onChange = () => applyResolvedTheme()
    mq.addListener(onChange)
    cleanupFns.push(() => mq.removeListener(onChange))
  }

  scheduleNextTimeBoundary()
}

