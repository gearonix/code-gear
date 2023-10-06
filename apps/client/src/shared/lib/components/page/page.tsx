import AuthGuard from '@/shared/lib/components/page/auth-guard'

import { ErrorBoundary, WithChildren } from '@code-gear/web/shared'

const Page = ({ children }: WithChildren) => {
  return (
    <ErrorBoundary>
      <AuthGuard>{children}</AuthGuard>
    </ErrorBoundary>
  )
}

export default Page
