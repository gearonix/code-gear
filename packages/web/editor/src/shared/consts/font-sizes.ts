import { Keys } from '@code-gear/web/shared'

export const maxTabsLength = 9 as const

export const fontSizes = [14, 16, 18, 20, 22, 24, 26] as const

export type FontSizes = Keys<typeof fontSizes>

export const tabSizes = [4, 2] as const

export type TabSizes = Keys<typeof tabSizes>
