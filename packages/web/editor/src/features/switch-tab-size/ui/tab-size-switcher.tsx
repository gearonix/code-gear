import { Select }     from '@code-gear/web/ui'
import { observer }   from 'mobx-react-lite'

import { TabSizes }   from '@/shared/consts/font-sizes'
import { tabSizes }   from '@/shared/consts/font-sizes'
import { useActions } from '@/shared/hooks'
import { useStore }   from '@/shared/hooks'

const TabSizeSwitcher = observer(() => {
  const actions = useActions()
  const { tabSize } = useStore()

  const handleChange = (tabSize: TabSizes) => {
    actions.changeTabSize(tabSize)
  }

  return (
    <Select<TabSizes>
      onChange={handleChange}
      value={tabSize}
      options={tabSizes.map((value) => ({
        value,
        label: value
      }))}
    />
  )
})

export default TabSizeSwitcher
