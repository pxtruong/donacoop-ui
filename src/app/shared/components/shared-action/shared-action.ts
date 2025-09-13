import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { ButtonBase } from '../../models/button-basic.model';
import { ITableColumn } from '../../models/table.model';
import { ButtonCancel } from '../button-cancel/button-cancel';

@Component({
  selector: 'shared-action',
  imports: [ButtonCancel, CommonModule],
  templateUrl: './shared-action.html',
  styleUrl: './shared-action.scss',
  standalone: true,
})
export class SharedAction extends ButtonBase {
  @Input() actionList: any[] = [];
  @Input() iElement: any;
  @Input() iColumn!: ITableColumn;

  public onActionClick(action: any) {
    this.clickBTN.emit(action);
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
