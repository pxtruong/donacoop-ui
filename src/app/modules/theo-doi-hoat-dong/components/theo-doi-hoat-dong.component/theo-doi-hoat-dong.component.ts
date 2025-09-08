import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedDatePicker } from '../../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { SharedTimePicker } from '../../../../shared/components/shared-time-picker/shared-time-picker';
import { BasicExtends } from '../../../../shared/models/basic-extends.model';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { tableConfigTheoDoiKeHoach } from '../../constants/theo-doi-hoat-dong-table.constant';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';

@Component({
  selector: 'theo-doi-hoat-dong.component',
  imports: [BaseLayoutComponent, SharedForm, SharedTable],
  templateUrl: './theo-doi-hoat-dong.component.html',
  styleUrl: './theo-doi-hoat-dong.component.scss',
  standalone: true,
})
export class TheoDoiHoatDongComponent extends BasicExtends {
  private masterDataFormGroup = new FormGroup({
    xeXuc: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
  });
  public formConfig: IDynamicFormModel[] = [
    {
      fieldName: 'xeXuc',
      iComponent: SharedSelect,
      label: 'Biển Số Xe',
      iParams: {
        iControl: this.masterDataFormGroup.get('xeXuc'),
        dataSource: [
          { value: 1, label: 'Xe Xúc 1' },
          { value: 2, label: 'Xe Xúc 2' },
          { value: 3, label: 'Xe Xúc 3' },
          { value: 4, label: 'Xe Xúc 4' },
          { value: 5, label: 'Xe Xúc 5' },
          { value: 6, label: 'Xe Xúc 6' },
          { value: 7, label: 'Xe Xúc 7' },
        ],
      },
      className: 'col-3',
      onTriggerSearch: (data: ISelectionOption) => {
        console.log('Trigger search in Master Data with data:', data);
      },
    },
    {
      fieldName: 'fromDate',
      iComponent: SharedDatePicker,
      label: 'Từ Ngày',
      iParams: {
        iControl: this.masterDataFormGroup.get('fromDate'),
      },
      className: 'col-3',
      onTriggerSearch: (data: ISelectionOption) => {
        console.log('Trigger search in Master Data with data:', data);
      },
    },
    {
      fieldName: 'toDate',
      iComponent: SharedDatePicker,
      label: 'Đến Ngày',
      iParams: {
        iControl: this.masterDataFormGroup.get('toDate'),
      },
      className: 'col-3',
      onTriggerSearch: (data: ISelectionOption) => {
        console.log('Trigger search in Master Data with data:', data);
      },
    },
  ];

  public tableConfig: ITableConfig = tableConfigTheoDoiKeHoach;
  @ViewChild(SharedTable) sharedTable!: SharedTable;
}
