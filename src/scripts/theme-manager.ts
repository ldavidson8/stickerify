import {
  effectiveTheme,
  systemColorScheme,
  type EffectiveTheme,
} from '@/stores/theme'

function applyThemeClass(theme: EffectiveTheme): void {
  const htmlEl = document.documentElement

  htmlEl.classList.toggle('dark-theme', theme === 'dark')

  htmlEl.setAttribute('data-theme', theme)
}

if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function updateSystemTheme(): void {
    systemColorScheme.set(mediaQuery.matches ? 'dark' : 'light')
  }

  updateSystemTheme()

  mediaQuery.addEventListener('change', updateSystemTheme)

  effectiveTheme.listen((theme) => {
    console.log(`Effective theme changed to: ${theme}`) // For debugging
    applyThemeClass(theme)
  })

  const initialTheme = effectiveTheme.get()
  console.log(`Applying initial theme: ${initialTheme}`)
  applyThemeClass(initialTheme)
} else {
  // Code here would run during SSR/build if this script were imported differently.
  // For theme class toggling, we primarily care about the client-side.
}
