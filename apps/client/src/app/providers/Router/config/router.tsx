import {
  createBrowserRouter
} from "react-router-dom"

import { Main } from '@/pages/Main'
import { NotFound } from '@/pages/NotFound'

import { RoutePaths } from '$/client-shared'
import { Editor } from '$/editor'

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
