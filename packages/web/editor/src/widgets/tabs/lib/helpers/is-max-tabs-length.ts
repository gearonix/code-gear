import { maxTabsLength } from '@/shared/consts/font-sizes'

import { ContentTab } from '../../index'

export const isMaxTabsLength = (content: ContentTab[]) => {
  return content.length >= maxTabsLength
}
