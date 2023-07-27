import { useEffect, useState } from 'react'

import { useStorage } from '@/shared/hooks'
import { usePreview } from '@/widgets/html-preview'

import { createHtmlTemplate } from './../lib/create-html-template'

import { useDebounce } from '$/client-shared'

const IFrame = () => {
  const { state } = usePreview()
  const [srcDoc, setSrcDoc] = useState('')
  const storage = useStorage()

  const updateIframe = useDebounce(() => {
    setSrcDoc(createHtmlTemplate(state))
    storage.set('EDITOR_HTML_PREVIEW', state)
  }, 250)

  useEffect(() => {
    updateIframe()
  }, [state, updateIframe])

  return (
    <>
      <iframe
        srcDoc={srcDoc}
        title="output"
        frameBorder="0"
        width="100%"
        height="100%"
        sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
      />
    </>
  )
}

export default IFrame
