import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedDatePicker } from '../../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_ADD_NEW_ACTIVITIES } from '../../constants/activities-add-new-form.constant';
import { GET_TABLE_CONFIG_ACTIVITIES } from '../../constants/activities-table.constant';
import { ActivitiesService } from '../../services/activities.services';

@Component({
  selector: 'activities',
  imports: [BaseLayoutComponent, SharedForm, SharedTable],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
  standalone: true,
})
export class TheoDoiHoatDongComponent extends DonacoopBaseComponent {
  private masterDataFormGroup = new FormGroup({
    xeXuc: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
  });
  public formConfig: IDynamicFormModel[] = [];
  public override tableConfig: ITableConfig = GET_TABLE_CONFIG_ACTIVITIES();

  constructor(
    protected _activitiesService: ActivitiesService,

    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
  }
  protected override _loadData() {
    this._initForm();
    this.subcribe(
      this._activitiesService.getActivities(),
      (res) => {
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }

  protected _initForm() {
    const truckList = StoreDataService.getValue(StoreDataKeys.TRUCK_LIST);
    let truckOptions: any[] = [];
    if (Array.isArray(truckList)) {
      truckList.forEach((i) => {
        truckOptions.push({
          value: i.id,
          label: `${i.licensePlate} - ${i.type} - ${i.driver.fullName}`,
        });
      });
    }
    this.formConfig = [
      {
        fieldName: 'xeXuc',
        iComponent: SharedSelect,
        label: 'Biển Số Xe',
        iParams: {
          iControl: this.masterDataFormGroup.get('xeXuc'),
          dataSource: truckOptions,
        },
        className: 'col-3',
      },
      {
        fieldName: 'fromDate',
        iComponent: SharedDatePicker,
        label: 'Từ Ngày',
        iParams: {
          iControl: this.masterDataFormGroup.get('fromDate'),
        },
        className: 'col-3',
      },
      {
        fieldName: 'toDate',
        iComponent: SharedDatePicker,
        label: 'Đến Ngày',
        iParams: {
          iControl: this.masterDataFormGroup.get('toDate'),
        },
        className: 'col-3',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Tìm',
          iCustomClass: 'mt-4',
        },
        className: 'col-3',
        clickBTN: () => {
          this.logLevel.debug('Click tìm in activities');
        },
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Thêm',
          iCustomClass: 'mt-4',
        },
        className: 'col-3',
        clickBTN: () => {
          this.logLevel.debug('Click thêm in activities');
          this.addNewPopup();
        },
      },
    ];
  }
  protected override getFormConfig() {
    return GET_ADD_NEW_ACTIVITIES();
  }
}
