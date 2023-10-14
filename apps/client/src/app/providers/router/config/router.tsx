import { RoutePaths }          from '@code-gear/web/shared'
import { createBrowserRouter } from 'react-router-dom'

import { EditPage }            from '@/pages/edit'
import { Main }                from '@/pages/main'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main />
  },
  {
    path: RoutePaths.EDITOR,
    element: <EditPage />
  }
])

export default router
