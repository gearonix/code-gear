import { WithChildren } from '@code-gear/client-shared'

import { ErrorBoundary } from '../ErrorBoundary'


const Page = ({ children }: WithChildren) => {
  return <ErrorBoundary>
    {children}
  </ErrorBoundary>
}


export default Page
