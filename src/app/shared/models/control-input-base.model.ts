import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-input-base',
  standalone: true,
  template: '',
})
export class ControlInputBase {
  @Input() label: string = '';
  @Input() iControl!: FormGroup | FormControl;
  @Input() dataSource!: Array<any>;
  @Input() valueFn!: any;
  @Input() set isDisabled(value: boolean) {
    if (this.iControl) {
      if (value) {
        this.iControl.disable();
      } else {
        this.iControl.enable();
      }
    }
  }
}
