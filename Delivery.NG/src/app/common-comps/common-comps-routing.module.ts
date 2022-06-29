import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './../common-comps/profile/profile.component';
import { ErrorViewComponent } from './../common-comps/error-view/error-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'errorView', component: ErrorViewComponent},
  {path: 'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonCompsRoutingModule { }
