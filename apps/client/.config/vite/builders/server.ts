import { PreviewOptions, ServerOptions } from 'vite'

export const preview: PreviewOptions = {
  port: 4200,
  host: 'localhost'
}

export const server: ServerOptions = {
  port: 3000,
  host: 'localhost',
  fs: {
    strict: false
  }
}
