import { Select }     from '@code-gear/web/ui'
import { observer }   from 'mobx-react-lite'

import { FontSizes }  from '@/shared/consts/font-sizes'
import { fontSizes }  from '@/shared/consts/font-sizes'
import { useActions } from '@/shared/hooks'
import { useStore }   from '@/shared/hooks'

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
