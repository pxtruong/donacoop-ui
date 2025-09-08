import { Component, Input } from '@angular/core';
import { ButtonCancel } from '../button-cancel/button-cancel';
import { CommonModule } from '@angular/common';
import { ButtonBase } from '../../models/button-basic.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { StoreDataKeys } from '../../../core/models/store-data.model';

@Component({
  selector: 'shared-action',
  imports: [ButtonCancel, CommonModule],
  templateUrl: './shared-action.html',
  styleUrl: './shared-action.scss',
  standalone: true,
})
export class SharedAction extends ButtonBase {
  @Input() actionList: any[] = [];
  public isLoading: boolean = false;

  public onActionClick(action: any) {
    this.clickBTN.emit(action);
  }

  protected override prepareData() {
    this.subcribe(
      StoreDataService.getSubcribe(StoreDataKeys.IS_LOADING),
      (isLoading) => {
        this.isLoading = isLoading;
        this.logLevel.debug(`isload--`, isLoading);
      }
    );
  }
}
