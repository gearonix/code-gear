import { useFileSaver } from './useFileHandler'
import { useFileHandler } from './useFileSaver'

export const useFileService = () => {
  const open = useFileHandler()
  const save = useFileSaver()
  return {
    open,
    save
  }
}
