import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dyanmicFormErrorPipe',
  standalone: true,
})
export class DynamicFormErrorPipe implements PipeTransform {
  transform(errors: any, ...args: unknown[]): string {
    console.log(errors);
    let message = '';

    for (const property in errors) {
      message += `${
        errors[property]?.message ? errors[property].message : ''
      } \n`;
    }
    return message;
  }
}
