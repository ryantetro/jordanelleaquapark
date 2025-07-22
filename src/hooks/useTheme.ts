import { useLocalStorage } from './useLocalStorage'
import { STORAGE_KEYS } from '../constants'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>(STORAGE_KEYS.THEME, 'system')

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement
    
    root.classList.remove('light', 'dark')
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  const setSystemTheme = () => {
    setTheme('system')
    applyTheme('system')
  }

  return {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
      applyTheme(newTheme)
    },
    toggleTheme,
    setSystemTheme,
  }
} 