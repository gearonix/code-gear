import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/about'
import { EditPage } from '@/pages/edit'
import { Main } from '@/pages/main'
import { NotFound } from '@/pages/not-found'
import { ProfilePage } from '@/pages/profile'

import { RoutePaths } from '@code-gear/web/shared'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main />
  },
  {
    path: RoutePaths.EDITOR,
    element: <EditPage />
  },
  {
    path: RoutePaths.ABOUT,
    element: <About />
  },
  {
    path: `${RoutePaths.PROFILE}/:username`,
    element: <ProfilePage />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
