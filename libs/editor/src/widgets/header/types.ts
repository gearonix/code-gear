export interface ExecutorRequest {
  code: string
  language: string
  input?: string
}
export interface ExecutorResponse {
  timeStamp: number
  status: number
  output: string
  error: string
  language: string
  info: string
}

export interface NotificationMessage {
  isError: boolean
  message: string
}
