import {
  createBrowserRouter
} from "react-router-dom"

import { Main } from '@/pages/Main'
import { RoutePaths } from '@/shared/paths'

const router = createBrowserRouter([
  {
    path: RoutePaths.MAIN,
    element: <Main/>
  }
])


export default router
