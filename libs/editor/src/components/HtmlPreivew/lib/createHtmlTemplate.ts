import { PreviewState } from '@/components/HtmlPreivew/types'

export const createHtmlTemplate = ({ html, css, javascript }: PreviewState) => `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
`
