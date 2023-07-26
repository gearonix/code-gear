import { useEffect, useState } from 'react'

import { EditorTitle } from '@/components/html-preview/ui/editor/preview-editor.styles'
import { useStorage } from '@/shared/hooks'

import { usePreview } from '../../context'
import { createHtmlTemplate } from '../../lib/create-html-template'

import { useDebounce } from '$/client-shared'
import { AiOutlineSwap } from '$/icons'

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
  }, [state])

  return (
    <>
      <EditorTitle>
        <AiOutlineSwap /> Result
      </EditorTitle>
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
