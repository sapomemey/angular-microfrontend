import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/lima', pathMatch: 'full' },
  { path: 'lima', loadChildren: () => import('./miraflores/miraflores.module').then(m => m.MirafloresModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
