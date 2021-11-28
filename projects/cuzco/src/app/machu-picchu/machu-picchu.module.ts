import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MachuPicchuComponent } from './machu-picchu.component';

@NgModule({
  declarations: [MachuPicchuComponent],
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'machu-picchu', pathMatch: 'full' },
      { path: 'machu-picchu', component: MachuPicchuComponent }
    ]),
  ]
})
export class MachuPicchuModule { }
