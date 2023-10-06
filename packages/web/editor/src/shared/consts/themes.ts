// Themes for code-editor

export const CUSTOM_THEME = 'Custom' as const

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

export type Themes = (typeof themes)[number]
