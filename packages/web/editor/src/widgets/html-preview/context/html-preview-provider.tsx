import { ReducerPayload } from '@code-gear/web/shared'
import { WithChildren }   from '@code-gear/web/shared'
import { createContext }  from 'react'
import { useContext }     from 'react'
import { useMemo }        from 'react'
import { useReducer }     from 'react'

import { useStorage }     from '@/shared/hooks'

import { PreviewState }   from '../types'

export const PreviewContext = createContext<ReducerPayload<PreviewState>>({})

const HtmlPreviewProvider = ({ children }: WithChildren) => {
  const storage = useStorage()

  const initialState: PreviewState = storage.get('EDITOR_HTML_PREVIEW', {
    html: '<h2>Hi! This is a realtime HTML editor.</h2>',
    css: 'h2 {color: #C4CBDA;}',
    javascript: '// 😀'
  })

  const modalsReducer = (prev: PreviewState, next: Partial<PreviewState>) => {
    return { ...prev, ...next }
  }

  const [state, update] = useReducer(modalsReducer, initialState)

  const payload = useMemo(
    () => ({
      state,
      update
    }),
    [state]
  )

  return (
    <PreviewContext.Provider value={payload}>
      {children}
    </PreviewContext.Provider>
  )
}

export const usePreview = () => {
  return useContext(PreviewContext) as Required<ReducerPayload<PreviewState>>
}

export default HtmlPreviewProvider
