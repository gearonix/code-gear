import { useCallback } from 'react'

import { useModalsContext } from '@/shared/hooks'

import { HtmlPreviewProvider } from '../../context'
import PreviewEditor from '../Editor/PreviewEditor'
import IFrame from '../IFrame/IFrame'

import { EditorBlock, PreviewBlock, PreviewWrapper } from './HtmlPreview.styles'

import { Popover } from '$/client-shared'

const HtmlPreview = () => {
  const modalsContext = useModalsContext()
  const { isHtmlPreviewOpened } = modalsContext.state

  const closeHtmlPreview = useCallback(() => {
    modalsContext.update({ isHtmlPreviewOpened: false })
  }, [])

  return (
    <Popover
      isOpen={isHtmlPreviewOpened}
      onClose={closeHtmlPreview}
      height={750}>
      <HtmlPreviewProvider>
        <PreviewWrapper>
          <EditorBlock>
            <PreviewEditor lang="html" />
            <PreviewEditor lang="css" />
            <PreviewEditor lang="javascript" />
          </EditorBlock>

          <PreviewBlock>
            <IFrame />
          </PreviewBlock>
        </PreviewWrapper>
      </HtmlPreviewProvider>
    </Popover>
  )
}

export default HtmlPreview
