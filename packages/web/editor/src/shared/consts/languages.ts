import { ValueOf } from '@code-gear/web/shared'

export const languages = {
  js: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  jsx: 'typescript',
  html: 'html',
  htm: 'html',
  txt: 'text',
  css: 'css',
  py: 'python',
  cpp: 'cpp',
  go: 'go',
  c: 'c',
  java: 'java'
} as const

export type LanguagesValues = ValueOf<typeof languages>

export type LanguagesKeys = keyof typeof languages

export const executorAllowedLanguages: LanguagesValues[] = [
  'java',
  'python',
  'cpp',
  'c',
  'go',
  'javascript'
]
