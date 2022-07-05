import { PipesModule } from './../pipes/pipes.module';
import { CommonCompsModule } from './../common-comps/common-comps.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    AdminProfileComponent,
    UserListComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonCompsModule,
    PipesModule
  ]
})
export class AdminModule { }
