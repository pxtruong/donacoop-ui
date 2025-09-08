import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { SharedDatePicker } from '../../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { SharedTimePicker } from '../../../../shared/components/shared-time-picker/shared-time-picker';
import { BasicExtends } from '../../../../shared/models/basic-extends.model';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { tableConfigKeHoach } from '../../constants/ke-hoach-table.constant';
import { FIELD_KE_HOACH } from '../../constants/field-ke-hoach.constant';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';

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
  public formConfig: IDynamicFormModel[] = [
    {
      fieldName: 'xeXuc',
      iComponent: SharedSelect,
      label: 'Chọn Xe Xúc',
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

  public override tableConfig: ITableConfig = tableConfigKeHoach;
  protected override _loadData() {
    this.tableConfig.dataSource = [...mockupData];
  }
}

export const mockupData: any[] = [
  {
    bienSoXe: '66N1-428432',
    loaiDa: 'Stone 1',
    ngay: '22/2/2025',
    gio: '02:30',
  },
  {
    bienSoXe: '66N1-428433',
    loaiDa: 'Stone 2',
    ngay: '22/2/2025',
    gio: '03:00',
  },
  {
    bienSoXe: '66N1-428434',
    loaiDa: 'Stone 3',
    ngay: '23/2/2025',
    gio: '04:15',
  },
  {
    bienSoXe: '66N1-428435',
    loaiDa: 'Stone 1',
    ngay: '23/2/2025',
    gio: '05:30',
  },
  {
    bienSoXe: '66N1-428436',
    loaiDa: 'Stone 2',
    ngay: '24/2/2025',
    gio: '06:45',
  },
  {
    bienSoXe: '66N1-428437',
    loaiDa: 'Stone 3',
    ngay: '24/2/2025',
    gio: '07:00',
  },
  {
    bienSoXe: '66N1-428438',
    loaiDa: 'Stone 1',
    ngay: '25/2/2025',
    gio: '08:10',
  },
  {
    bienSoXe: '66N1-428439',
    loaiDa: 'Stone 2',
    ngay: '25/2/2025',
    gio: '09:25',
  },
  {
    bienSoXe: '66N1-428440',
    loaiDa: 'Stone 3',
    ngay: '26/2/2025',
    gio: '10:40',
  },
  {
    bienSoXe: '66N1-428441',
    loaiDa: 'Stone 1',
    ngay: '26/2/2025',
    gio: '11:55',
  },
  {
    bienSoXe: '66N1-428442',
    loaiDa: 'Stone 2',
    ngay: '27/2/2025',
    gio: '13:00',
  },
  {
    bienSoXe: '66N1-428443',
    loaiDa: 'Stone 3',
    ngay: '27/2/2025',
    gio: '14:15',
  },
  {
    bienSoXe: '66N1-428444',
    loaiDa: 'Stone 1',
    ngay: '28/2/2025',
    gio: '15:30',
  },
  {
    bienSoXe: '66N1-428445',
    loaiDa: 'Stone 2',
    ngay: '28/2/2025',
    gio: '16:45',
  },
  {
    bienSoXe: '66N1-428446',
    loaiDa: 'Stone 3',
    ngay: '1/3/2025',
    gio: '17:00',
  },
  {
    bienSoXe: '66N1-428447',
    loaiDa: 'Stone 1',
    ngay: '1/3/2025',
    gio: '18:10',
  },
  {
    bienSoXe: '66N1-428448',
    loaiDa: 'Stone 2',
    ngay: '2/3/2025',
    gio: '19:25',
  },
  {
    bienSoXe: '66N1-428449',
    loaiDa: 'Stone 3',
    ngay: '2/3/2025',
    gio: '20:40',
  },
  {
    bienSoXe: '66N1-428450',
    loaiDa: 'Stone 1',
    ngay: '3/3/2025',
    gio: '21:55',
  },
  {
    bienSoXe: '66N1-428451',
    loaiDa: 'Stone 2',
    ngay: '3/3/2025',
    gio: '23:05',
  },
];
