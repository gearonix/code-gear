import { Popover }             from '@code-gear/web/ui'
import { useCallback }         from 'react'

import { PreviewEditor }       from '@/entities/preview-editor'
import { IFrame }              from '@/entities/preview-i-frame'
import { useModalsContext }    from '@/shared/hooks'

import { HtmlPreviewProvider } from '../context'
import { EditorBlock }         from './html-preview.styles'
import { PreviewBlock }        from './html-preview.styles'
import { PreviewWrapper }      from './html-preview.styles'

const HtmlPreview = () => {
  const modalsContext = useModalsContext()
  const { isHtmlPreviewOpened } = modalsContext.state

  const closeHtmlPreview = useCallback(() => {
    modalsContext.update({ isHtmlPreviewOpened: false })
  }, [modalsContext])

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
