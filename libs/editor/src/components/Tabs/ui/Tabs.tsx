import { Popconfirm } from 'antd'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { useConfirm } from '@/components/Tabs/hooks/useConfirm'
import { useMappedTabs } from '@/components/Tabs/hooks/useMappedTabs'
import { TabsStyles } from '@/components/Tabs/ui/Tabs.styles'
import { maxTabsLength } from '@/shared/consts'
import { useActions, useStore } from '@/shared/hooks'

import { TargetKey } from '$/client-shared'


const Tabs = observer(() => {
  const { activeKey, content } = useStore()
  const actions = useActions()
  const mappedTabs = useMappedTabs(content)
  const confirm = useConfirm()

  const onEdit = confirm.protect((
    targetKey: TargetKey,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      actions.tabs.createTab()
    }
    else {
      confirm.on(targetKey as string)
    }
  })

  const onChange = confirm.protect((activeKey: string) => {
    actions.tabs.changeActiveTab(activeKey)
  })

  const deleteTask = () => {
    actions.tabs.removeTab(confirm.val as string)
    confirm.off()
  }

  return <>
    <Popconfirm
      title="Delete the tab"
      description="Are you sure to delete this tab?"
      okText="Yes"
      cancelText="No"
      onConfirm={deleteTask}
      open={Boolean(confirm.val)}
      onCancel={confirm.off}
      arrow={false}
    >
    <TabsStyles
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={toJS(mappedTabs)}
        hideAdd={content.length >= maxTabsLength}
      />
    </Popconfirm>
    </>
})

export default Tabs
