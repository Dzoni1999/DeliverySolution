import { FormsModule } from '@angular/forms';
import { RolePipe } from './../pipes/role.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonCompsRoutingModule } from './common-comps-routing.module';
import { ErrorViewComponent } from './error-view/error-view.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ErrorViewComponent,
    ProfileComponent,
    RolePipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CommonCompsRoutingModule,
    FormsModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class CommonCompsModule { }
