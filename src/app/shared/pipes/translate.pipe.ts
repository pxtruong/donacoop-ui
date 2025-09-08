import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private _translateService: TranslateService,
    private _cd: ChangeDetectorRef
  ) {
    this._translateService.loadSuccessful.subscribe((value) => {
      if (value) {
        this._cd.detectChanges();
      }
    });
  }

  transform(value: string, ...args: unknown[]): string {
    let isTooltip = args[0];
    if (isTooltip) {
      return this._translateService.instantTooltip(value);
    }
    const _value = this._translateService.instant(value);
    return _value ? _value : value;
  }
}
