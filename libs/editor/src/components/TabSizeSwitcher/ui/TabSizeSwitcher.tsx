import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { TabSizes, tabSizes } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'

const TabSizeSwitcher = observer(() => {
  const actions = useActions()
  const { tabSize } = useStore()

  const handleChange = (tabSize: TabSizes) => {
    actions.changeTabSize(tabSize)
  }

  return <Select
    size={'middle'}
    onChange={handleChange}
    value={tabSize}
    style={{ width: 200 }}
    options={tabSizes.map((value) => ({
      value,
      label: value
    }))}
  />

})

export default TabSizeSwitcher
