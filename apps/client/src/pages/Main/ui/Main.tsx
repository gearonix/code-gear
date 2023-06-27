import { Link } from "react-router-dom"

const Main = () => {
  return <div>
    main
    <Link to={'/not_found'}>Testing preact router with preact-compat library</Link>
  </div>
}


export default Main
