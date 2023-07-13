import { useEffect, useState } from 'react'

import { useStorage } from '@/shared/hooks'

import { usePreview } from '../../context'
import { createHtmlTemplate } from '../../lib/createHtmlTemplate'

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
  }, [state])


  return <iframe
    srcDoc={srcDoc}
    title={'output'}
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"
  />
}


export default IFrame
