import { languages } from '@/shared/consts/languages'

export const useMappedLanguages = () => {
  const mapped = [...new Set(Object.values(languages))]

  return mapped.map((lang) => ({
    value: lang,
    label: lang
  }))
}
