import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo : '/login', pathMatch : 'full'},
  {path: '', component: AppComponent}


  // {path: 'login', component : LoginComponent},
  // {path: 'register', component : LoginComponent},
  // {path: 'reset-password', component : ResetPasswordComponent},
  // {path: '**', component : },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
