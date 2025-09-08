import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { SharedDatePicker } from '../../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { tableConfigTheoDoiKeHoach } from '../../constants/theo-doi-hoat-dong-table.constant';
import { ActivitiesService } from '../../services/activities.services';

@Component({
  selector: 'theo-doi-hoat-dong',
  imports: [BaseLayoutComponent, SharedForm, SharedTable],
  templateUrl: './theo-doi-hoat-dong.component.html',
  styleUrl: './theo-doi-hoat-dong.component.scss',
  standalone: true,
})
export class TheoDoiHoatDongComponent extends DonacoopBaseComponent {
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
  public override tableConfig: ITableConfig = tableConfigTheoDoiKeHoach;

  constructor(
    protected _activitiesService: ActivitiesService,

    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
  }
  protected override _loadData() {
    this.subcribe(
      this._activitiesService.getActivities(),
      (res) => {
        // remarkConfig
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }
}
