import { ValueOf } from '$/client-shared'

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
  'Tomorrow'
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
