import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { SharedDatePicker } from '../../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { SharedTimePicker } from '../../../../shared/components/shared-time-picker/shared-time-picker';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_TABLE_CONFIG_PLANT } from '../../constants/ke-hoach-table.constant';
@Component({
  selector: 'app-ke-hoach.component',
  imports: [BaseLayoutComponent, SharedTable, SharedForm],
  templateUrl: './ke-hoach.component.html',
  styleUrl: './ke-hoach.component.scss',
})
export class KeHoachComponent extends DonacoopBaseComponent {
  private masterDataFormGroup = new FormGroup({
    xeXuc: new FormControl(''),
    ngay: new FormControl(''),
    gio: new FormControl(''),
  });
  public formConfig: IDynamicFormModel[] = [];

  public override tableConfig: ITableConfig = GET_TABLE_CONFIG_PLANT();
  private _dataSource = [];
  protected override _loadData() {
    this._dataSource = StoreDataService.getValue(StoreDataKeys.ACTIVITIES);
    this._initForm();
    this.tableConfig.dataSource = [...this._dataSource];
  }

  private _initForm() {
    const machineriesOptions: any[] = [];
    const existsMachineries: any = {};
    this._dataSource.forEach((i: any) => {
      if (!i.pickupPosition) {
        return;
      }
      const pickupPosition = i.pickupPosition;
      if (existsMachineries[pickupPosition.id]) {
        return;
      }
      machineriesOptions.push({
        label: pickupPosition.name,
        value: pickupPosition.id,
      });
      existsMachineries[pickupPosition.id] = true;
    });
    this.formConfig = [
      {
        fieldName: 'xeXuc',
        iComponent: SharedSelect,
        label: 'Chọn Xe Xúc',
        iParams: {
          iControl: this.masterDataFormGroup.get('xeXuc'),
          dataSource: machineriesOptions,
        },
        className: 'col-3',
        onTriggerSearch: (data: ISelectionOption) => {
          console.log('Trigger search in Master Data with data:', data);
        },
      },
      {
        fieldName: 'ngay',
        iComponent: SharedDatePicker,
        label: 'Chọn Ngày',
        iParams: {
          iControl: this.masterDataFormGroup.get('ngay'),
        },
        className: 'col-3',
        onTriggerSearch: (data: ISelectionOption) => {
          console.log('Trigger search in Master Data with data:', data);
        },
      },
      {
        fieldName: 'gio',
        iComponent: SharedTimePicker,
        label: 'Chọn Giờ',
        iParams: {
          iControl: this.masterDataFormGroup.get('gio'),
        },
        className: 'col-3',
        onTriggerSearch: (data: ISelectionOption) => {
          console.log('Trigger search in Master Data with data:', data);
        },
      },
    ];
  }
}
