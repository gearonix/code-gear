import { useErrorBoundary } from 'preact/hooks'

import { WithChildren } from '../../../types'

import ErrorTemplate from './ui/ErrorTemplate'

const ErrorBoundary = ({ children }: WithChildren) => {
  const [error] = useErrorBoundary()

  console.error(error)

  if (error) {
    return <ErrorTemplate errorInfo={error} />
  }

  return <>
    {children}
  </>
}

export default ErrorBoundary
