import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/about'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'

import { RoutePaths } from '$/client-shared'
import { Editor } from '$/editor'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main />
  },
  {
    path: RoutePaths.EDITOR,
    element: (
      <Suspense fallback={null}>
        <Editor />
      </Suspense>
    )
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
