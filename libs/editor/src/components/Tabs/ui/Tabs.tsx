import React, { useRef, useState } from 'react'
import { Tabs as AntdTabs } from 'antd'
import { v4 as generateId } from 'uuid'

import { Tab } from './../types'

import { TargetKey } from '$/shared'

const initialItems: Tab[] = [
  { label: 'Untitled', key: generateId(), num: 0 }
]

const Tabs = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key)
  const [items, setItems] = useState(initialItems)

  const add = () => {
    const newActiveKey = generateId()
    const lastNumber = items.at(-1)?.num ?? -1
    setItems([...items, { label: 'Untitled', key: newActiveKey, num: lastNumber + 1 }])
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey: TargetKey) => {
    const targetIdx = items.findIndex((i) => i.key === targetKey)
    const last: Tab = items[targetIdx - 1]

    setItems(items.filter((item) => item.key !== targetKey))
    setActiveKey(last.key)
  }

  const onEdit = (
    targetKey: TargetKey,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  return (
    <AntdTabs
      type="editable-card"
      onChange={setActiveKey}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  )
}

export default Tabs
