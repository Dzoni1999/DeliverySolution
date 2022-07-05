import { AdminModule } from './admin/admin.module';
import { DelivererModule } from './deliverer/deliverer.module';
import { FormsModule } from '@angular/forms';
import { CommonCompsModule } from './common-comps/common-comps.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    UserModule,
    CommonCompsModule,
    ToastrModule.forRoot(),
    FormsModule,
    DelivererModule,
    AdminModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
  ],
  exports: [
  ]
})
export class AppModule { }
