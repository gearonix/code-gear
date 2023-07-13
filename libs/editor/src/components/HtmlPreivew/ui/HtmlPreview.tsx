import { useCallback } from 'react'

import { useModalsContext } from '@/shared/hooks'

import { Popover } from '$/client-shared'

const HtmlPreview = () => {
  const modalsContext = useModalsContext()
  const { isHtmlPreviewOpened } = modalsContext.state

  const closeHtmlPreview = useCallback(() => {
    modalsContext.update({ isHtmlPreviewOpened: false })
  }, [])

  return <Popover isOpen={isHtmlPreviewOpened}
                  onClose={closeHtmlPreview} height={550}>

  </Popover>
}


export default HtmlPreview
