import { useEditor } from '@/shared/hooks/use-editor'

export const useEditorActions = () => {
  const editor = useEditor()

  const find = async () => {
    await editor.getAction('actions.find')?.run()
  }

  const replace = async () => {
    await editor.getAction('editor.action.startFindReplaceAction')?.run()
  }

  return {
    find,
    replace
  }
}
