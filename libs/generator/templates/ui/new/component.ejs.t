---
to: src/<%= module_name %>/<%= module_name %>.tsx
---
import { <%= h.changeCase.pascal(module_name) %>Styles } from './<%= module_name %>.styles'

export interface <%= h.changeCase.pascal(module_name) %>Props {

}

export const <%= h.changeCase.pascal(module_name) %> = (props: <%= h.changeCase.pascal(module_name) %>Props) => {
  return <div> <%= module_name %> </div>
}

