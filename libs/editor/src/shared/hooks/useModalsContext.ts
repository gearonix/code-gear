import { useContext } from 'react'

import { ModalsContext, ModalsPayload } from '@/app'

export const useModalsContext = () => {
  return useContext(ModalsContext) as Required<ModalsPayload>
}

export const useModalContextState = () => {
  return useModalsContext().state
}
