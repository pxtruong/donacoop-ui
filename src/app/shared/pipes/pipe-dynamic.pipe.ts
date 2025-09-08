import { Pipe, PipeTransform } from '@angular/core';
import { ITableColumn } from '../models/table.model';

@Pipe({
  name: 'pipeDynamic',
  standalone: true,
})
export class PipeDynamicPipe implements PipeTransform {
  transform(
    value: any,
    pipe: PipeTransform | undefined,
    ...args: any[]
  ): unknown {
    if (!pipe) {
      const column: ITableColumn = args[0];
      const element: any = args[1];
      if (!column) return '';
      return element[column.field];
    }
    if (!pipe.transform) {
      return '';
    }
    return pipe.transform(value, ...args);
  }
}
