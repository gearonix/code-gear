import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { Themes, themes } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'

import { LocalStorageClient } from '$/shared'

const ThemeSwitcher = observer(() => {
  const actions = useActions()
  const { theme } = useStore()
  const storage = new LocalStorageClient()

  const handleChange = (theme: Themes) => {
    storage.set('EDITOR_THEME', theme)
    actions.changeTheme(theme)
  }


  return <Select
          size={'middle'}
          defaultValue="vs-dark"
          onChange={handleChange}
          value={theme}
          style={{ width: 200 }}
          options={themes.map((theme) => ({
            value: theme,
            label: theme
          }))}
        />

})

export default ThemeSwitcher
