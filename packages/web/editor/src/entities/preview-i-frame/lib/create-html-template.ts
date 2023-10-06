import { PreviewState } from '@/components/html-preivew/types'

export const createHtmlTemplate = ({ html, css, javascript }: PreviewState) => `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
          <style>
            body {
            color: #C4CBDA;
            font-size: 20px;
            padding-left: 10px;
            }
           </style>
        </html>
`
