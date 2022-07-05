import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    switch(value){
      case 1: 
        value = "Active"
        break;
      case 2:
        value = "Pending"
        break;
      case 3:
        value = "Inactive"
        break;
    }
    return value;
  }

}
