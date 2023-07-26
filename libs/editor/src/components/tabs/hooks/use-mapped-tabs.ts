import { ContentTab } from '@/components/tabs'

export const useMappedTabs = (content: ContentTab[]) => {
  return content.map((tab) => ({
    label: tab.getLabel(),
    key: tab.getKeyId()
  }))
}
