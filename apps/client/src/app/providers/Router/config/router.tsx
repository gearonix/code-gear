import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/About'
import { Main } from '@/pages/Main'
import { NotFound } from '@/pages/NotFound'

import { RoutePaths } from '$/client-shared'
import { Editor } from '$/editor'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main />
  },
  {
    path: RoutePaths.EDITOR,
    element: <Editor />
  },
  {
    path: RoutePaths.ABOUT,
    element: <About />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
