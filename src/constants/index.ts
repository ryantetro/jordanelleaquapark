// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// App Configuration
export const APP_NAME = 'AquaPark Mountain'
export const APP_VERSION = '1.0.0'

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  USER_PREFERENCES: 'userPreferences',
} as const

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const 