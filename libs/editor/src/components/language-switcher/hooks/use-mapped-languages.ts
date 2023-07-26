import { languages } from '@/shared/consts'

export const useMappedLanguages = () => {
  const mapped = [...new Set(Object.values(languages))]

  return mapped.map((lang) => ({
    value: lang,
    label: lang
  }))
}
