import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {
  public formatDate: string = 'dd-MM-yyyy';
  transform(data: any, ...args: unknown[]): string {
    if (!data) {
      return '';
    }
    return formatDate(data, this.formatDate, 'en-US');
  }
}
