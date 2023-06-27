import { RouterProvider as Router } from 'react-router-dom'

import router from '../config/router'

import { WithChildren } from '$/modules/shared/types'

const RouterProvider = () => {
  return <>
    {/* Preact does not support react-router-dom correctly*/}
    {/* @ts-ignore*/}
    <Router router={router} />
    </>
}


export default RouterProvider
