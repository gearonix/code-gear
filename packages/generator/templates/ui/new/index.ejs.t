---
to: src/<%= module_name %>/index.ts
---

export { <%= h.changeCase.pascal(module_name) %> } from './<%= module_name %>'
