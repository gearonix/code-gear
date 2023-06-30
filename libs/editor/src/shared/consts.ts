import { ValueOf } from '$/shared'

// Themes for code-editor
export const themes = [
  "vs-dark",
  "Monokai",
  "Dracula",
  "Dreamweaver",
  "GitHub",
  "Nord",
  "Twilight",
  "IDLE",
  "Eiffel",
  "Tomorrow",
  "Dawn"
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
