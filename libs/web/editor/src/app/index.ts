import { lazy } from 'react'

const Editor = lazy(() => import('./editor'))

export { Editor }

export {
  EditorActions,
  EditorGetters,
  EditorStore,
  EditorStoreContext
} from './providers/editor-store'
export type { ModalsPayload, ModalsState } from './providers/modals-provider'
export { ModalsContext } from './providers/modals-provider'
export { useCustomTheme } from './providers/theme-loader'
