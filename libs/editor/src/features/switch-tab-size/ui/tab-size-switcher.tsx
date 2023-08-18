import { observer } from 'mobx-react-lite'

import { TabSizes, tabSizes } from '@/shared/consts/font-sizes'
import { useActions, useStore } from '@/shared/hooks'

import { Select } from '$/ui'

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
