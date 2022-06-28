import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { HomeComponent } from './home/home/home.component';
import { HiddenViewComponent } from './home/hidden-view/hidden-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    HiddenViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
