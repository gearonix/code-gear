import { Keys, ValueOf } from '$/client-shared'

export const CUSTOM_THEME = 'Custom' as const

// Themes for code-editor
export const themes = [
  'vs-dark',
  'Monokai',
  'Dracula',
  'Dreamweaver',
  'GitHub',
  'Nord',
  'Twilight',
  'IDLE',
  'Eiffel',
  'Tomorrow',
  CUSTOM_THEME
] as const

export type Themes = typeof themes[number]

export const languages = {
  'js': 'javascript',
  'ts': 'typescript',
  'tsx': 'typescript',
  'jsx': 'typescript',
  'html': 'html',
  'htm': 'html',
  'txt': 'text',
  'css': 'css'
} as const

export type LanguagesValues = ValueOf<typeof languages>

export type LanguagesKeys = keyof typeof languages


export const maxTabsLength = 9 as const

export const executorAllowedLanguages = ['java', 'python',
  'cpp', 'c', 'go', 'cs', 'javascript']

export const fontSizes = [14, 16, 18, 20, 22, 24, 26] as const

export type FontSizes = Keys<typeof fontSizes>

export const tabSizes = [4, 2] as const

export type TabSizes = Keys<typeof tabSizes>

