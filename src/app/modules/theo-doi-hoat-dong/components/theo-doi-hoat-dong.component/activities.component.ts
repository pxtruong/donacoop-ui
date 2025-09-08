import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
import { FIELD_DAN_SACH_XE_TAI_ADD_NEW } from '../../../registrations/constants/registrations-field.constant';
import { GET_ADD_NEW_ACTIVITIES } from '../../constants/activities-add-new-form.constant';
import { FIELD_THEO_DOI_HOAT_DONG_CONSTANTS } from '../../constants/activities-field.constant';
import { GET_TABLE_CONFIG_ACTIVITIES } from '../../constants/activities-table.constant';
import { ActivitiesService } from '../../services/activities.services';

@Component({
  selector: 'activities',
  imports: [SharedForm, SharedTable],
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
        className: 'col-1',
        clickBTN: () => {
          this.logLevel.debug('Click tìm in activities');
        },
      },
      {
        fieldName: 'btnThem',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Thêm',
          iCustomClass: 'mt-4',
        },
        className: 'col-1',
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
  protected override updateAPI(id: number, data: any) {
    const request = this._setRequest(data);
    return this._activitiesService.updateActivities(id, request);
  }

  protected override deleteAPI(id: number) {
    return this._activitiesService.deleteActivities(id);
  }

  protected override createAPI(data: number) {
    const request = this._setRequest(data);
    return this._activitiesService.createActivities(request);
  }

  private _setRequest(record: any) {
    // registrationId - buyerCompanyId - pickupPositionId - stoneTypeId - truckId - revenueType
    if (!record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID]) {
      return record;
    }
    let request: any = {};
    const divideData =
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID].split('-');
    if (divideData) {
      request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID] =
        divideData[0];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID] = divideData[1];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MACHINERIES_ID] = divideData[2];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID] = divideData[3];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRUCK_ID] = divideData[4];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE] = divideData[5];
    }
    // map time In
    const inDate = record[
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG
    ] as Date;
    const inTime = record[
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.GIO_VAO_CONG
    ] as Date;
    inDate.setHours(inTime.getHours());
    inDate.setMinutes(inTime.getMinutes());
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG] =
      inDate.toISOString();

    // map time Out
    const outDate = record[
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG
    ] as Date;
    const outTime = record[
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.GIO_RA_CONG
    ] as Date;
    outDate.setHours(outTime.getHours());
    outDate.setMinutes(outTime.getMinutes());
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG] =
      outDate.toISOString();

    // weight time 1
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1] =
      record[
        FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1
      ].toISOString();
    // weight time 2
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2] =
      record[
        FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2
      ].toISOString();
    // weight
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG1] =
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG1];
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG2] =
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG2];

    // weight poisition
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_1] =
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_1];
    request[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_2] =
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_2];
    return request;
  }

  protected override _prepareEditData(record: any) {
    let _editData = { ...record };
    _editData[
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID
    ] = `${this._getIdInField(record, 'registration')}-${this._getIdInField(
      record,
      'buyerCompany'
    )}-${this._getIdInField(record, 'pickupPosition')}-${this._getIdInField(
      record,
      'stoneType'
    )}-${this._getIdInField(record, 'truck')}-${
      record[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE]
    }`;
    this._handleDateTime(_editData);
    return _editData;
  }

  private _handleDateTime(record: any) {
    // gate in time
    if (record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG]) {
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG]
      );
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.GIO_VAO_CONG] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG]
      );
    }
    // gate out time
    if (record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG]) {
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG]
      );
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.GIO_RA_CONG] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG]
      );
    }

    // weight time 1
    if (record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1]) {
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1]
      );
    }

    // weight time 2
    if (record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2]) {
      record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2] = new Date(
        record[FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2]
      );
    }
  }
  private _getIdInField(record: any, field: string): number | string {
    return record[field].id;
  }
}
