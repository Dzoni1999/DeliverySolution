import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonCompsRoutingModule } from './common-comps-routing.module';
import { ErrorViewComponent } from './error-view/error-view.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ErrorViewComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    CommonCompsRoutingModule,
  ],
  exports: [
    ProfileComponent
  ]
})
export class CommonCompsModule { }
