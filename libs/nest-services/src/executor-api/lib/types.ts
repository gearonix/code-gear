export const ExecutorLanguages = {
  java: 'java',
  python: 'py',
  cpp: 'cpp',
  c: 'c',
  go: 'go',
  cs: 'cs',
  javascript: 'js'
} as const

export type ExecutorLanguagesKeys = keyof typeof ExecutorLanguages
export type ExecutorLanguagesValues =
  (typeof ExecutorLanguages)[ExecutorLanguagesKeys]
