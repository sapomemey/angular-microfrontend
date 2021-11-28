import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cuzco', pathMatch: 'full' },
  { path: 'cuzco', loadChildren: () => import('./machu-picchu/machu-picchu.module').then(m => m.MachuPicchuModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
