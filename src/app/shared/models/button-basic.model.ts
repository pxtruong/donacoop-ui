import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../core/components/base/base.component';
import { StoreDataService } from '../../core/services/store-data.service';
import { StoreDataKeys } from '../../core/models/store-data.model';

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
  public isLoading: boolean = false;
  onClick() {
    this.logLevel.debug('onClick BTN');
    this.clickBTN.emit();
  }
  protected override _loadData() {
    this.subcribe(
      StoreDataService.getSubcribe(StoreDataKeys.IS_LOADING),
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }
}
