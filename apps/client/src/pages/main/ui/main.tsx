import { RoutePaths } from '@code-gear/web/shared'
import { Link }       from 'react-router-dom'

import { Page }       from '@/shared/lib'

const Main = () => {
  return (
    <Page>
      <div>
        Not Ready Yet.
        <Link to={RoutePaths.EDITOR}>Link to Editor</Link>
      </div>
    </Page>
  )
}

export default Main
