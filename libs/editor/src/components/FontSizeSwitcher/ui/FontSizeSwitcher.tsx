import { Select } from 'antd'
import { observer } from 'mobx-react-lite'

import { FontSizes, fontSizes } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'


const FontSizeSwitcher = observer(() => {
  const actions = useActions()
  const { fontSize } = useStore()

  const handleChange = (fontSize: FontSizes) => {
    actions.changeFontSize(fontSize)
  }

  return <Select
    size={'middle'}
    onChange={handleChange}
    value={fontSize}
    style={{ width: 200 }}
    options={fontSizes.map((value) => ({
      value,
      label: `${value}px`
    }))}
  />

})

export default FontSizeSwitcher
