import {
  createBrowserRouter
} from "react-router-dom"

import { Main } from '@/pages/Main'
import { NotFound } from '@/pages/NotFound'

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
  },
  {
    path: '*',
    element: <NotFound/>
  }
])


export default router
