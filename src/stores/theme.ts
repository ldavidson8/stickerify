import { atom, computed } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export type ThemePreference = 'system' | 'light' | 'dark'

export type EffectiveTheme = 'light' | 'dark'

export const selectedThemePreference = persistentAtom<ThemePreference>(
  'theme', // localStorage key
  'system', // Default value if localStorage is empty
  {
    encode: (value) => JSON.stringify(value),
    decode: (value) => {
      // If value from localStorage is null/undefined (key missing or explicitly undefined)
      // return 'system'. Otherwise, parse the JSON string.
      if (value == null) {
        return 'system'
      }
      try {
        // Ensure it's one of the valid values after parsing
        const parsed = JSON.parse(value)
        if (parsed === 'light' || parsed === 'dark' || parsed === 'system') {
          return parsed
        }
      } catch (e) {
        console.error('Error decoding theme from localStorage', e)
      }
      // Fallback to system if parsing fails or value is unexpected
      return 'system'
    },
  },
)

export const systemColorScheme = atom<EffectiveTheme>('light')

export const effectiveTheme = computed(
  [selectedThemePreference, systemColorScheme],
  (themePreference, systemTheme) => {
    if (themePreference === 'system') {
      return systemTheme
    }
    return themePreference
  },
)

export function setThemePreference(themePreference: ThemePreference): void {
  selectedThemePreference.set(themePreference)
}
