import {
  createBrowserRouter
} from "react-router-dom"

import { Main } from '@/pages/Main'

import { Editor } from '$/editor'
import { RoutePaths } from '$/shared'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main/>
  },
  {
    path: RoutePaths.EDITOR,
    element: <Editor/>
  }
])


export default router
