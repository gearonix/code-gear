import { Display }        from '@code-gear/web/shared'
import { WithChildren }   from '@code-gear/web/shared'

import { useThemeLoader } from '../hooks'

const ThemeLoader = ({ children }: WithChildren) => {
  const isLoaded = useThemeLoader()
  return <Display when={isLoaded}>{children}</Display>
}

export default ThemeLoader
