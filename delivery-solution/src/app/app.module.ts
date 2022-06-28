import { CommonCompsModule } from './common-comps/common-comps.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RolePipe } from './pipes/role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    UserModule,
    CommonCompsModule,
    ToastrModule.forRoot(),
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
