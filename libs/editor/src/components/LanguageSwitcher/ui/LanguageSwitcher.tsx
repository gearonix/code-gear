import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { LanguagesValues } from '@/shared/consts'
import { useActions, useGetters } from '@/shared/hooks'

import { useMappedLanguages } from '../hooks'

const LanguageSwitcher = observer(() => {
  const actions = useActions()
  const languages = useMappedLanguages()
  const getters = useGetters()
  const language = getters.getActiveLanguage()

  const handleChange = (language: LanguagesValues) => {
    actions.changeLanguage(language)
  }

  return <Select
    size={'middle'}
    onChange={handleChange}
    value={language}
    style={{ width: 200 }}
    options={languages}
  />

})

export default LanguageSwitcher
