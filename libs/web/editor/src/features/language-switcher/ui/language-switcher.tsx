import { observer } from 'mobx-react-lite'

import { LanguagesValues } from '@/shared/consts/languages'
import { useGetters } from '@/shared/hooks'

import { useMappedLanguages } from '../hooks'

import { Select } from '$/ui'

const LanguageSwitcher = observer(() => {
  const languages = useMappedLanguages()
  const getters = useGetters()
  const language = getters.getActiveLanguage()
  const activeTab = getters.getActiveTab()

  const handleChange = (newLanguage: LanguagesValues) => {
    activeTab.lang = newLanguage
  }

  return (
    <Select<LanguagesValues>
      onChange={handleChange}
      value={language}
      options={languages}
    />
  )
})

export default LanguageSwitcher
