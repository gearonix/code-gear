import { ContentTab } from '../index'

export const useMappedTabs = (content: ContentTab[]) => {
  return content.map((tab) => ({
    label: tab.label,
    key: tab.key
  }))
}
