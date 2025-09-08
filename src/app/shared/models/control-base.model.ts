import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicExtends } from './basic-extends.model';
import { ControlInputBase } from './control-input-base.model';
import { ControlOutputBase } from './control-output-base.model';

@Component({
  selector: 'control-base',
  standalone: true,
  template: '',
})
export class ControlBase
  extends BasicExtends
  implements ControlInputBase, ControlOutputBase
{
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

  @Output() triggerSearch = new EventEmitter<void>();
  get _formControl(): FormControl {
    return this.iControl as FormControl;
  }

  get _formGroup(): FormGroup {
    return this.iControl as FormGroup;
  }
}
