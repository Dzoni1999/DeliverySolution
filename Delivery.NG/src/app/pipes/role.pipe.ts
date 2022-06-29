import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolePipe'
})
export class RolePipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 1: 
        value = "Admin"
        break;
      case 2:
        value = "User"
        break;
      case 3:
        value = "Deliverer"
        break;
    }
    return value;
  }

}
