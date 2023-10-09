---
to: src/<%= module_name %>/index.ts.template.template
---
export { <%= module_name.charAt(0).toUpperCase() + module_name.slice(1) %> }  from './ui/<%= module_name %>'
