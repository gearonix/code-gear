enum AppRoutes {
  MAIN = 'MAIN',
  EDITOR = 'EDITOR',
  ABOUT = 'ABOUT',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.EDITOR]: '/edit',
  [AppRoutes.ABOUT]: '/about'
}
