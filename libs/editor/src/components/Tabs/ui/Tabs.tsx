import { Tabs as AntdTabs } from 'antd'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useActions,useStore } from '@/shared/hooks'

import { TargetKey } from '$/shared'


const Tabs = observer(() => {
  const state = useStore()
  const actions = useActions()

  const onEdit = (
    targetKey: TargetKey,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      actions.tabs.createTab()
    }
    else {
      actions.tabs.removeTab(targetKey as string)
    }
  }

  const onChange = (activeKey: string) => {
    actions.tabs.changeActiveTab(activeKey)
  }

  return <AntdTabs
        type="editable-card"
        onChange={onChange}
        activeKey={state.activeKey}
        onEdit={onEdit}
        items={toJS(state.content)}
      />
})

export default Tabs
