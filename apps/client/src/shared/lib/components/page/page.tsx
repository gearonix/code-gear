import { ErrorBoundary } from '@code-gear/web/shared'
import { WithChildren }  from '@code-gear/web/shared'

import AuthGuard         from '@/shared/lib/components/page/auth-guard'

const Page = ({ children }: WithChildren) => {
  return (
    <ErrorBoundary>
      <AuthGuard>{children}</AuthGuard>
    </ErrorBoundary>
  )
}

export default Page
