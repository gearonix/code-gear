import { observer } from 'mobx-react-lite'

import { FontSizes, fontSizes } from '@/shared/consts/font-sizes'
import { useActions, useStore } from '@/shared/hooks'

import { Select } from '@code-gear/web/ui'

const FontSizeSwitcher = observer(() => {
  const actions = useActions()
  const { fontSize } = useStore()

  const handleChange = (fontSize: FontSizes) => {
    actions.changeFontSize(fontSize)
  }

  return (
    <Select<FontSizes>
      onChange={handleChange}
      value={fontSize}
      options={fontSizes.map((value) => ({
        value,
        label: `${value}px`
      }))}
    />
  )
})

export default FontSizeSwitcher
