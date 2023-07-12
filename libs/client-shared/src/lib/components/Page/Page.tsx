import { ErrorBoundary } from '../../../providers'
import { WithChildren } from '../../../types'



const Page = ({ children }: WithChildren) => {
  return <ErrorBoundary>
    {children}
  </ErrorBoundary>
}


export default Page
