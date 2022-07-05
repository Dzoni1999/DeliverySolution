import { PipesModule } from './../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
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
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CommonCompsRoutingModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class CommonCompsModule { }
