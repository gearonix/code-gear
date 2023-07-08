import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useMappedTabs } from '@/components/Tabs/hooks/useMappedTabs'
import { TabsStyles } from '@/components/Tabs/ui/Tabs.styles'
import { maxTabsLength } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'

import { TargetKey } from '$/client-shared'


const Tabs = observer(() => {
  const { activeKey, content } = useStore()
  const actions = useActions()
  const mappedTabs = useMappedTabs(content)

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

  return <TabsStyles
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={toJS(mappedTabs)}
        hideAdd={content.length >= maxTabsLength}
      />
})

export default Tabs
