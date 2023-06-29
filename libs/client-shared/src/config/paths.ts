enum AppRoutes {
  MAIN = 'MAIN',
  EDITOR = 'EDITOR'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.EDITOR]: '/edit'
}
