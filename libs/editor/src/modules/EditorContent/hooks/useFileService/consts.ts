export const filePickerOptions = {
  types: [
    {
      accept: {
        "text/*": [".ts", ".tsx", ".js",
          ".jsx", ".vue", ".txt", ".py", ".yaml", ".yml"]
      },
      description: "Text Files"
    }
  ]
} as const

export const NotSupportedError = 'Your browser does not support saving and opening files.'
