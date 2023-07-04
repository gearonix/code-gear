import { useThemeLoader } from './../hooks'

import { Display, WithReactChildren } from '$/client-shared'

const ThemeLoader = ({ children }: WithReactChildren) => {
  const isLoaded = useThemeLoader()
  return <Display when={isLoaded}>
      {children}
    </Display>
}


export default ThemeLoader
