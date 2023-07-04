import { Component, Fragment } from 'preact'
import { useErrorBoundary } from 'preact/hooks'
import { useRouteError } from 'react-router-dom'

import ErrorTemplate from './ui/ErrorTemplate'

import { Nullable,WithChildren } from '$/shared'


interface State{
  hasError: boolean,
  errorInfo: Nullable<string>
}
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


// class ErrorBoundary extends Component<WithChildren, State> {
//   public state: State = {
//     hasError: false,
//     errorInfo: null
//   }
//   public static getDerivedStateFromError(error: Error): State {
//     return { hasError: true, errorInfo: error.message }
//   }
//
//   public componentDidCatch(error: Error) {
//     console.error('Uncaught fatal error:', error)
//   }
//
//   render() {
//     if (this.state.hasError) {
//       return <ErrorTemplate errorInfo={this.state.errorInfo as string}/>
//     }
//
//     return this.props.children
//   }
// }


export default ErrorBoundary
