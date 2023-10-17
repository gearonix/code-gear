# FileSystem Web API

Thanks to [FileSystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) you can read the contents of files, edit them and save them locally on your computer.

Yes, this is possible **directly** in the browser. And this fits very well into the functionality of the editor.

## Handle Files

This is how files are opened through the editor.

```ts
export const useFileHandler = () => {
  return async (): Promise<Undefinable<FileHandlerData>> => {
    if ('showOpenFilePicker' in window) {
      const [fileHandle] = await window.showOpenFilePicker(filePickerOptions)
      const fileData = await fileHandle.getFile()
      const fileContent = await fileData.text()
      const [fileLang] = getLanguageFromName(fileData.name)

      return {
        name: fileData.name,
        type: fileData.type,
        content: fileContent,
        fileHandle,
        language: fileLang
      }
    }
  }
}
```

## Save Files

And this is how saving is implemented. These hooks make file manipulation easy.

```ts
export const useFileSaver = () => {
  return async (
    fileHandle: Nullable<FileSystemFileHandle>,
    textContent: string
  ) => {
    try {
      let handle = fileHandle

      if (!isFunction(fileHandle?.createWritable)) {
        handle = await window.showSaveFilePicker()
      }

      const stream = await (handle as FileSystemFileHandle).createWritable()
      await stream.write(textContent)
      await stream.close()

      return handle
    } catch (error) {
      throw new NotSupportedException()
    }
  }
}
```

::: warning Experimental

Currently, `FileSystemAPI` is only supported by Chrome, Edge and Opera browsers.

:::
