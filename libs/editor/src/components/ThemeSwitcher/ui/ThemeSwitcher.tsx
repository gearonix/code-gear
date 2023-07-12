import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { Themes, themes } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'

const ThemeSwitcher = observer(() => {
  const actions = useActions()
  const { theme } = useStore()

  const handleChange = (theme: Themes) => {
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
