import { ContentTab } from '@/components/tabs'
import { maxTabsLength } from '@/shared/consts'

export const isMaxTabsLength = (content: ContentTab[]) => {
  return content.length >= maxTabsLength
}
