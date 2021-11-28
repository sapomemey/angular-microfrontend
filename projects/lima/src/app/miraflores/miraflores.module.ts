import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MirafloresComponent } from './miraflores.component';

@NgModule({
  declarations: [MirafloresComponent],
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'miraflores', pathMatch: 'full' },
      { path: 'miraflores', component: MirafloresComponent }
    ])
  ],
})
export class MirafloresModule { }
