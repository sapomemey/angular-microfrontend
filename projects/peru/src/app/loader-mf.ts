export interface RouteMf {
  remoteName: string;
  exposedModule: string;
  remoteEntry: string;
  ngModuleName: string;
  path: string;
}

export class LoaderMf {
  constructor(
    private router: any,
    private loadRemoteModule: any,
  ) { }

  load(routes: RouteMf[]) {
    const { config } = this.router;
    const configRoutes = routes.map((route: any) => {
      return {
        loadChildren: () => this.loadRemoteModule({
          remoteName: route.remoteName,
          exposedModule: route.exposedModule,
          remoteEntry: route.remoteEntry
        }).then((m: any) => m[route.ngModuleName]),
        ...route,
      }
    });

    this.router.resetConfig([
      ...config,
      ...configRoutes,
    ]);
  }
}
