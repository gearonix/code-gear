import { useErrorBoundary } from 'preact/hooks'

import { WithPreactChildren } from '@/types'

import ErrorTemplate from './ui/error-template'

const ErrorBoundary = ({ children }: WithPreactChildren) => {
  const [error] = useErrorBoundary()

  console.error(error)

  if (error) {
    return <ErrorTemplate errorInfo={error} />
  }

  return <>{children}</>
}

export default ErrorBoundary
