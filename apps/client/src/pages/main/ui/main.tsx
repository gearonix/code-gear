import { Link } from 'react-router-dom'

import { Page } from '@/shared/lib'

import { RoutePaths } from '@code-gear/web/shared'

const Main = () => {
  return (
    <Page>
      <div>
        main <br />
        <Link to={RoutePaths.EDITOR}>editor</Link>
      </div>
    </Page>
  )
}

export default Main
