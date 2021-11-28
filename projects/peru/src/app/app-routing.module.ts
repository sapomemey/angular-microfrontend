import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LoaderMf, RouteMf } from './loader-mf';

export function initRoute(router: Router) {
  return () => {
    return new Promise<void>((resolve) => {
      const routesMf: RouteMf[] = [
        {
          path: 'lima',
          remoteName: 'lima',
          exposedModule: './Module',
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          ngModuleName: 'MirafloresModule',
        },
        {
          path: 'cuzco',
          remoteName: 'cuzco',
          exposedModule: './Module',
          remoteEntry: 'http://localhost:4200/remoteCuzco.js',
          ngModuleName: 'MachuPicchuModule',
        }
      ];

      const loaderMf = new LoaderMf(router, loadRemoteModule);
      loaderMf.load(routesMf);

      resolve();
    });
  };
}

const routes: Routes = [
  { path: '', redirectTo: 'lima', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initRoute,
      deps: [Router],
      multi: true
    }
  ]
})
export class AppRoutingModule { }
