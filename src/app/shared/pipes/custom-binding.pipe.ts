import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customBidingPipe',
  standalone: true,
})
export class CustomBindingPipe implements PipeTransform {
  private _customFunction!: any;
  set customFunction(value: any) {
    this._customFunction = value;
  }
  transform(data: any, ...args: unknown[]): string {
    if (this._customFunction) {
      return this._customFunction(data, args);
    }
    return '';
  }
}
