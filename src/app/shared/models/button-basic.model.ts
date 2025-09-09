import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../core/components/base/base.component';

@Component({
  selector: 'app-control-base',
  standalone: true,
  template: '',
})
export class ButtonBase extends BaseComponent {
  @Input() iIcon: string = '';
  @Input() iText: string = '';
  @Input() iCustomClass: string = '';
  @Input() iToolTip: string = '';
  @Input() iColor: string = 'primary';
  @Input() iColorIcon: string = 'primary';
  @Output() clickBTN = new EventEmitter();
  @Input() iDisabled: boolean = false;
  onClick() {
    console.log(`click btn`);
    this.clickBTN.emit();
  }
}
