import { CommonCompsModule } from './../common-comps/common-comps.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonCompsModule
  ],
  exports:[
    
  ]
})
export class UserModule { }
