import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_ADD_NEW_DANG_KY_XE_TAI } from '../../constants/registrations-add-new-form.constant';
import { REVENUE_TYPE_VALUE } from '../../constants/registrations-constant';
import { GET_TABLE_CONFIG_REGISTRATTIONS } from '../../constants/registrations-table.constant';
import { FIELD_DAN_SACH_XE_TAI_ADD_NEW } from '../../constants/registrations-field.constant';
import { RegistrationsService } from '../../services/registrations.servies';

@Component({
  selector: 'registrations',
  imports: [BaseLayoutComponent, SharedTable, SharedForm],
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
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }
  override updateAPI(id: any, data: any) {
    return this._registrationsService.updateRegistrations(
      id,
      this._prepareData(data)
    );
  }

  override deleteAPI(id: any) {
    return this._registrationsService.deleteRegistrations(id);
  }
  override createAPI(data: any) {
    return this._registrationsService.createRegistrations(
      this._prepareData(data)
    );
  }

  private _prepareData(data: any) {
    let request: any = {};
    if (data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID]) {
      const divideCompany =
        data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID].split('-');
      const companyId = divideCompany[0];
      const destinationId = divideCompany[1];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID] = companyId;
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.DEPLOY_POINT] = destinationId;
    }
    if (data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID]) {
      const divideWarehouses =
        data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID].split('-');
      const destinationWarehouseId = divideWarehouses[0];
      const stoneTypeId = divideWarehouses[1];
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID] = stoneTypeId;
      request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.WAREHOUSES_ID] =
        destinationWarehouseId;
    }
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_DATE] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_DATE];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_TIME] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_TIME];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRIP_NUM] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRIP_NUM];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRUCK_ID] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRUCK_ID];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MO_TA] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MO_TA];
    request[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MACHINERIES_ID] =
      data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MACHINERIES_ID];
    return request;
  }

  protected override getFormConfig() {
    return GET_ADD_NEW_DANG_KY_XE_TAI();
  }

  protected override _prepareEditData(record: any) {
    record[
      FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID
    ] = `${record.buyerCompany.id}-${record.destination.id}`;
    record[
      FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID
    ] = `${record.destinationWarehouse.id}-${record.stoneType.id}`;
    record[FIELD_DAN_SACH_XE_TAI_ADD_NEW.MACHINERIES_ID] =
      record.pickupPosition.id;
    record[FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRUCK_ID] = record.truck.id;
    return { ...record };
  }

  override _prepareEventAddNew() {
    let lastRevenueTypeValue: any = null;
    this._formGroupAddNew.valueChanges.subscribe((data) => {
      console.log(`data--`, data);
      const revenueTypeValue = data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE];
      if (
        !data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE] ||
        revenueTypeValue === lastRevenueTypeValue
      ) {
        return;
      }
      lastRevenueTypeValue = data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE];
      const toWarehousesIdControl = this._formGroupAddNew.get(
        FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_WAREHOUSES_ID
      );
      const companyControl = this._formGroupAddNew.get(
        FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID
      );
      if (
        data[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE] ===
        REVENUE_TYPE_VALUE.DI_DOI
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
