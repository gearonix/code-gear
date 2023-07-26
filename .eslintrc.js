const { configure, presets } = require('eslint-kit')


module.exports = configure({
  mode: 'only-errors',
  allowDebug: process.env.NODE_ENV !== "production",
  root: __dirname,
  presets: [
    presets.node(),
    presets.prettier({
      singleQuote: true,
      trailingComma: "none"
    }),
    presets.typescript({
      root: './',
      tsconfig: 'tsconfig.base.json'
    }),
    presets.react(),
  ],
  extend: {
    root: true,
    ignorePatterns: ["**/*"],
    plugins: ["@nx"],
    // My custom config
    extends: ["gearonix"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "quotes": [2, "single", { "avoidEscape": true }],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/member-delimiter-style": ["error",  {"multiline" : {"delimiter": "none"}}],
      "import/no-unresolved": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "import/extensions": "off"
    }
  }
})
