import { StatusPipe } from './status.pipe';
import { RolePipe } from './role.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RolePipe,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RolePipe,
    StatusPipe
  ]
})
export class PipesModule { }
