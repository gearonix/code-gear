import { useFileHandler } from './useFileHandler'
import { useFileSaver } from './useFileSaver'

export const useFileService = () => {
  const open = useFileHandler()
  const save = useFileSaver()
  return {
    open,
    save
  }
}
