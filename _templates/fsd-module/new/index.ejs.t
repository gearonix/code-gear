---
to: <%= module_name %>/index.ts
---
export { <%= module_name.charAt(0).toUpperCase() + module_name.slice(1) %> }  from './ui/<%= module_name %>'