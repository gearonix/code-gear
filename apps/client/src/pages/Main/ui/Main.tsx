import { Link } from "react-router-dom"

import { Page,RoutePaths } from '$/client-shared'

const Main = () => {
  return <Page>
    <div>
    main <br/>
    <Link to={RoutePaths.EDITOR}>editor</Link>
  </div>
  </Page>
}

export default Main
