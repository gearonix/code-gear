enum AppRoutes {
  MAIN = 'MAIN',
  EDITOR = 'EDITOR',
  ABOUT = 'ABOUT',
  PROFILE = 'PROFILE'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.EDITOR]: '/edit',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/users'
}

export const PrivatePaths = [RoutePaths.PROFILE]
