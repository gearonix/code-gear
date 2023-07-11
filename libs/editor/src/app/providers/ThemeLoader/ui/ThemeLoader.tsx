import { useThemeLoader } from './../hooks'

import { Display, WithChildren } from '$/client-shared'

const ThemeLoader = ({ children }: WithChildren) => {
  const isLoaded = useThemeLoader()
  return <Display when={isLoaded}>
      {children}
    </Display>
}


export default ThemeLoader
