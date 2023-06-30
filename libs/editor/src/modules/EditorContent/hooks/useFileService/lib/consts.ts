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
