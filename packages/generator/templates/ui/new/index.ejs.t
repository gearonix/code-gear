---
to: src/<%= module_name %>/index.ts.template.template
---

export { <%= h.changeCase.pascal(module_name) %> } from './<%= module_name %>'
