import { observer } from 'mobx-react-lite'

import { Themes, themes } from '@/shared/consts/themes'
import { useActions, useStore } from '@/shared/hooks'

import { Select } from '@code-gear/web/ui'

const ThemeSwitcher = observer(() => {
  const actions = useActions()
  const { theme } = useStore()

  const handleChange = (theme: Themes) => {
    actions.changeTheme(theme)
  }

  return (
    <Select<Themes>
      defaultValue="vs-dark"
      onChange={handleChange}
      value={theme}
      options={themes.map((theme) => ({
        value: theme,
        label: theme
      }))}
    />
  )
})

export default ThemeSwitcher
