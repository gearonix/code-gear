interface ErrorTemplateProps {
  errorInfo: string
}

const ErrorTemplate = ({ errorInfo }: ErrorTemplateProps) => {
  return (
    <div>
      Custom Error Boundary. <br />
    </div>
  )
}

export default ErrorTemplate
