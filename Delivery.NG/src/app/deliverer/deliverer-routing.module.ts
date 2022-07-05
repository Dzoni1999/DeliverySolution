import { DelivererProfileComponent } from './deliverer-profile/deliverer-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'deliverer/profile', component: DelivererProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelivererRoutingModule { }
