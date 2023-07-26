import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { LanguagesValues } from '@/shared/consts'
import { useGetters } from '@/shared/hooks'

import { useMappedLanguages } from '../hooks'

const LanguageSwitcher = observer(() => {
  const languages = useMappedLanguages()
  const getters = useGetters()
  const language = getters.getActiveLanguage()
  const activeTab = getters.getActiveTab()

  const handleChange = (newLanguage: LanguagesValues) => {
    activeTab.lang = newLanguage
  }

  return (
    <Select
      size="middle"
      onChange={handleChange}
      value={language}
      style={{ width: 200 }}
      options={languages}
    />
  )
})

export default LanguageSwitcher
