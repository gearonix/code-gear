import { NotificationMessage } from './types'

export const CodeExecutionErrors: Record<string, NotificationMessage> = {
  NOT_SUPPORTED: {
    isError: true,
    message: 'This file type is not supported to execute'
  },
  ERRORS_IN_CODE: {
    isError: true,
    message: 'It looks like there are some errors in your code.'
  },
  SUCCESS: {
    isError: false,
    message: 'Code completed successfully!'
  },
  NETWORK_ERROR: {
    isError: true,
    message: 'Something went wrong'
  }
}
