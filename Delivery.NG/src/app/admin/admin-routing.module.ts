import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin/profile', component: AdminProfileComponent},
  {path: 'admin/list', component: UserListComponent},
  {path: 'admin/sidebar', component: AdminSidebarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
