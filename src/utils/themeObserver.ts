import { systemColorScheme, effectiveTheme } from '@/stores/theme'

function setInitialSystemScheme() {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemColorScheme.set(mediaQuery.matches ? 'dark' : 'light')

    // Listen for changes
    mediaQuery.addEventListener('change', (e) => {
      console.log('System theme changed:', e.matches ? 'dark' : 'light')
      systemColorScheme.set(e.matches ? 'dark' : 'light')
    })
  }
}

function applyThemeClass() {
  if (typeof document !== 'undefined') {
    // Apply theme immediately on page load
    const currentTheme = effectiveTheme.get()
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }

    // Listen to the *effective* theme store for future changes
    effectiveTheme.listen((theme) => {
      console.log('Effective theme changed:', theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    })
  }
}

// Run initialization logic
setInitialSystemScheme()
applyThemeClass()

console.log(
  'Theme manager script loaded with effectiveTheme:',
  effectiveTheme.get(),
) // For debugging
