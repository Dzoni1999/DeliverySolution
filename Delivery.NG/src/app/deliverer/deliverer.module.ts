import { CommonCompsModule } from './../common-comps/common-comps.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelivererRoutingModule } from './deliverer-routing.module';
import { DelivererProfileComponent } from './deliverer-profile/deliverer-profile.component';


@NgModule({
  declarations: [
    DelivererProfileComponent
  ],
  imports: [
    CommonModule,
    DelivererRoutingModule,
    CommonCompsModule
  ]
})
export class DelivererModule { }
