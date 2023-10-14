import { capitalize }         from './utils'
import { transformKebabCase } from './utils'
import { isString }           from '@grnx-utils/types'
import { DefaultTheme }       from 'vitepress'

export interface CreateSidebarTabPayload {
  base: string
  items: ([string, string] | string)[]
}

export const createSidebarTab = (
  payload: CreateSidebarTabPayload
): DefaultTheme.SidebarItem => {
  return {
    text: capitalize(payload.base),
    items: payload.items.map((item) => ({
      base: payload.base,
      text: isString(item) ? transformKebabCase(item) : item[0],
      link: `/${isString(item) ? item : item[1]}`
    }))
  }
}
