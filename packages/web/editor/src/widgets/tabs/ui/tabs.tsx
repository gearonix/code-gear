import { TargetKey }     from '@code-gear/web/shared'
import { Popconfirm }    from 'antd'
import { toJS }          from 'mobx'
import { observer }      from 'mobx-react-lite'

import { maxTabsLength } from '@/shared/consts/font-sizes'
import { useActions }    from '@/shared/hooks'
import { useStore }      from '@/shared/hooks'

import { useConfirm }    from '../hooks/use-confirm'
import { useMappedTabs } from '../hooks/use-mapped-tabs'
import { TabsStyles }    from './tabs.styles'

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
    } else {
      if (content.length === 1) {
        return
      }
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

  return (
    <>
      <Popconfirm
        title="Delete the tab"
        description="Are you sure to delete this tab?"
        okText="Yes"
        cancelText="No"
        onConfirm={deleteTask}
        open={Boolean(confirm.val)}
        onCancel={confirm.off}
        arrow={false}>
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
  )
})

export default Tabs
