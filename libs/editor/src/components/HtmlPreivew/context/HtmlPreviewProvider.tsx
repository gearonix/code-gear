import { createContext, useContext, useMemo, useReducer } from 'react'

import { useStorage } from '@/shared/hooks'

import { PreviewState } from '../types'

import { ReducerPayload, WithChildren } from '$/client-shared'


export const PreviewContext = createContext<ReducerPayload<PreviewState>>({})

const HtmlPreviewProvider = ({ children }: WithChildren) => {
  const storage = useStorage()

  const initialState : PreviewState = storage.get('EDITOR_HTML_PREVIEW', {
    html: '',
    css: '',
    javascript: ''
  })

  const modalsReducer = (prev: PreviewState, next: Partial<PreviewState>) => {
    return { ...prev, ...next }
  }

  const [state, update] = useReducer(modalsReducer, initialState)

  const payload = useMemo(() => ({
    state, update
  }), [state])

  return <PreviewContext.Provider value={payload}>
    {children}
  </PreviewContext.Provider>
}

export const usePreview = () => {
  return useContext(PreviewContext) as Required<ReducerPayload<PreviewState>>
}


export default HtmlPreviewProvider
