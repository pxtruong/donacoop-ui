import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_ADD_NEW_DANG_KY_XE_TAI } from '../../constants/registrations-add-new-form.constant';
import {
  RegistrationStatus,
  REVENUE_TYPE_VALUE,
} from '../../constants/registrations-constant';
import {
  TRUCK_FIELD_ADD_NEW,
  REGISTRATIONS_FIELD,
} from '../../constants/registrations-field.constant';
import { GET_TABLE_CONFIG_REGISTRATTIONS } from '../../constants/registrations-table.constant';
import { RegistrationsService } from '../../services/registrations.servies';

@Component({
  selector: 'registrations',
  imports: [SharedTable, SharedForm, MatTabsModule],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss',
  standalone: true,
})
export class RegistrationsComponent extends DonacoopBaseComponent {
  public override tableConfig: ITableConfig = GET_TABLE_CONFIG_REGISTRATTIONS();
  @ViewChild(SharedTable) sharedTable!: SharedTable;
  public formConfig: IDynamicFormModel[] = [
    {
      fieldName: 'btnAccept',
      iComponent: ButtonAcceppt,
      label: '',
      iParams: {
        iControl: null,
        iIcon: '',
        iText: 'Thêm Mới',
        iCustomClass: 'mt-4',
      },
      className: 'col-12 justify-content-end d-flex',
      clickBTN: () => {
        this.addNewPopup();
      },
    },
  ];
  constructor(
    protected _registrationsService: RegistrationsService,
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
  }

  protected override _loadData() {
    this.subcribe(
      this._registrationsService.getRegistrations(),
      (res) => {
        // remarkConfig
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }

  protected override _uppdateTableData(data: any[]) {
    if (!this.tableConfig || !Array.isArray(data)) {
      return;
    }

    data.forEach((i, index: number) => {
      if (i.registrationStatus === RegistrationStatus.PENDING) {
        i[`${REGISTRATIONS_FIELD.STT}remarkConfig`] = {
          className: 'remark-yellow',
        };
      }
      if (i.registrationStatus === RegistrationStatus.ENTERED) {
        i[`${REGISTRATIONS_FIELD.STT}remarkConfig`] = {
          className: 'remark-blue',
        };
      }
      if (i.registrationStatus === RegistrationStatus.EXITED) {
        i[`${REGISTRATIONS_FIELD.STT}remarkConfig`] = {
          className: 'remark-green',
        };
      }
      if (i.registrationStatus === RegistrationStatus.INACTIVE) {
        i[`${REGISTRATIONS_FIELD.STT}remarkConfig`] = {
          className: 'remark-red',
        };
      }
      i[REGISTRATIONS_FIELD.STT] = index + 1;
    });
    this.tableConfig.dataSource = [...data];
  }
  override updateAPI(id: any, record: any) {
    return this._registrationsService.updateRegistrations(
      id,
      this._prepareData(record)
    );
  }

  override inactiveAPI(record: any) {
    // let request = {...record};
    request.registrationStatus = RegistrationStatus.INACTIVE;
    return this._registrationsService.updateRegistrations(
      record.id,
      this._prepareData(record)
    );
  }

  override createAPI(record: any) {
    return this._registrationsService.createRegistrations(
      this._prepareData(record)
    );
  }

  private _prepareData(record: any) {
    let request: any = {};
    // map company
    if (record[TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID]) {
      const divideCompany =
        record[TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID].split('-');
      const companyId = divideCompany[0];
      const destinationId = divideCompany[1];
      request[TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID] = companyId;
      request[TRUCK_FIELD_ADD_NEW.DEPLOY_POINT] = destinationId;
    }
    // map bussines revenue type
    request[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE] =
      record[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE];
    if (
      request[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE] === REVENUE_TYPE_VALUE.DI_DOI
    ) {
      request[TRUCK_FIELD_ADD_NEW.TO_WAREHOUSES_ID] =
        record[TRUCK_FIELD_ADD_NEW.TO_WAREHOUSES_ID];
      request[TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID] = null;
      request[TRUCK_FIELD_ADD_NEW.DEPLOY_POINT] = null;
    } else {
      request[TRUCK_FIELD_ADD_NEW.TO_WAREHOUSES_ID] = null;
    }
    // map stone and warehouses
    if (record[TRUCK_FIELD_ADD_NEW.STONE_TYPE_ID]) {
      const originalWarehouses =
        record[TRUCK_FIELD_ADD_NEW.STONE_TYPE_ID].split('-');
      const originalWarehouseId = originalWarehouses[0];
      const stoneTypeId = originalWarehouses[1];
      request[TRUCK_FIELD_ADD_NEW.STONE_TYPE_ID] = stoneTypeId;
      request[TRUCK_FIELD_ADD_NEW.WAREHOUSES_ID] = originalWarehouseId;
    }
    // map field
    request[TRUCK_FIELD_ADD_NEW.TO_DATE] = record[TRUCK_FIELD_ADD_NEW.TO_DATE];
    request[TRUCK_FIELD_ADD_NEW.TRIP_NUM] =
      record[TRUCK_FIELD_ADD_NEW.TRIP_NUM];
    request[TRUCK_FIELD_ADD_NEW.TRUCK_ID] =
      record[TRUCK_FIELD_ADD_NEW.TRUCK_ID];
    request[TRUCK_FIELD_ADD_NEW.MO_TA] = record[TRUCK_FIELD_ADD_NEW.MO_TA];
    request[TRUCK_FIELD_ADD_NEW.MACHINERIES_ID] =
      record[TRUCK_FIELD_ADD_NEW.MACHINERIES_ID];
    // map time
    const toTime = record[TRUCK_FIELD_ADD_NEW.TO_TIME];
    const fromTime = record[TRUCK_FIELD_ADD_NEW.FROM_TIME];
    request[
      TRUCK_FIELD_ADD_NEW.TO_TIME
    ] = `${fromTime.getHours()}:${fromTime.getMinutes()} - ${toTime.getHours()}:${toTime.getMinutes()}`;
    return request;
  }

  protected override getFormConfig(record: any) {
    return GET_ADD_NEW_DANG_KY_XE_TAI(record);
  }

  protected override _prepareEditData(record: any) {
    let _resData: any = { ...record };
    if (_resData.buyerCompany && _resData.destination) {
      _resData[
        TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID
      ] = `${_resData.buyerCompany.id}-${_resData.destination.id}`;
    }
    if (_resData.originWarehouse && _resData.stoneType) {
      _resData[
        TRUCK_FIELD_ADD_NEW.STONE_TYPE_ID
      ] = `${_resData.originWarehouse.id}-${_resData.stoneType.id}`;
    }

    if (_resData.pickupPosition) {
      _resData[TRUCK_FIELD_ADD_NEW.MACHINERIES_ID] = _resData.pickupPosition.id;
    }
    if (_resData.truck) {
      _resData[TRUCK_FIELD_ADD_NEW.TRUCK_ID] = _resData.truck.id;
    }
    if (_resData.originWarehouse) {
      _resData[TRUCK_FIELD_ADD_NEW.WAREHOUSES_ID] = _resData.originWarehouse.id;
    }
    // handle Time
    if (
      _resData[TRUCK_FIELD_ADD_NEW.TO_TIME] &&
      typeof _resData[TRUCK_FIELD_ADD_NEW.TO_TIME] === 'string'
    ) {
      this._handleTimeEdit(_resData);
    }
    return { ..._resData };
  }

  private _handleTimeEdit(record: any) {
    try {
      const arrivalTime = record[TRUCK_FIELD_ADD_NEW.TO_TIME].split(' - ');
      const fromTime = arrivalTime[0].split(':');
      const toTime = arrivalTime[1].split(':');
      const _fromDate = new Date();
      record[TRUCK_FIELD_ADD_NEW.FROM_TIME] = new Date(
        _fromDate.setHours(fromTime[0], fromTime[1])
      );
      const _toDate = new Date();
      record[TRUCK_FIELD_ADD_NEW.TO_TIME] = new Date(
        _toDate.setHours(toTime[0], toTime[1])
      );
    } catch (e) {
      this.logLevel.debug(`split time error`, e);
    }
  }
  protected override _prepareEventEdit() {
    this._prepareEventAddNew();
  }
  protected override _prepareEventAddNew() {
    let lastRevenueTypeValue: any = null;
    this._formGroupAddNew.valueChanges.subscribe((data) => {
      const revenueTypeValue = data[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE];
      if (
        !data[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE] ||
        revenueTypeValue === lastRevenueTypeValue
      ) {
        return;
      }
      lastRevenueTypeValue = data[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE];
      const toWarehousesIdControl = this._formGroupAddNew.get(
        TRUCK_FIELD_ADD_NEW.TO_WAREHOUSES_ID
      );
      const companyControl = this._formGroupAddNew.get(
        TRUCK_FIELD_ADD_NEW.BUYER_COMPANY_ID
      );
      if (
        data[TRUCK_FIELD_ADD_NEW.REVENUE_TYPE] === REVENUE_TYPE_VALUE.DI_DOI
      ) {
        toWarehousesIdControl?.enable({ emitEvent: false });
        companyControl?.disable({ emitEvent: false });
        companyControl?.reset({ emitEvent: false });
      } else {
        toWarehousesIdControl?.disable({ emitEvent: false });
        toWarehousesIdControl?.reset({ emitEvent: false });
        companyControl?.enable({ emitEvent: false });
      }
    });
  }
}
