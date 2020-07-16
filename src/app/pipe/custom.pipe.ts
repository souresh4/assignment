import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, totalL:any, customL:any): any {
    console.log(value, totalL, customL)

    return Math.ceil(totalL/customL);
  }

}
