import { ContentTab } from '@/components/Tabs'
import { maxTabsLength } from '@/shared/consts'

export const isMaxTabsLength = (content: ContentTab[] ) => {
  return content.length >= maxTabsLength
}
