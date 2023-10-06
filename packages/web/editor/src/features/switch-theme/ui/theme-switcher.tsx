import { Select }     from '@code-gear/web/ui'
import { observer }   from 'mobx-react-lite'

import { Themes }     from '@/shared/consts/themes'
import { themes }     from '@/shared/consts/themes'
import { useActions } from '@/shared/hooks'
import { useStore }   from '@/shared/hooks'

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
