import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { SharedAddNewPopup } from '../../../../shared/components/shared-add-new-popup/shared-add-new-popup';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import {
  GET_ADD_MEW_DIEM_DEN,
  GET_ADD_NEW_CONFIG_CONG_TY,
} from '../../constants/company-add-new-config.constant';
import { tableConfigCongTy } from '../../constants/company-table.constant';
import { COMPANY_FIELD_CONSTANT } from '../../constants/company-field.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';

@Component({
  selector: 'company',
  imports: [SharedTable],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
  standalone: true,
})
export class CompanyComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = tableConfigCongTy;
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getCompanyList(),
      (res) => {
        if (!Array.isArray(res)) {
          return;
        }
        const showData: any[] = [];
        res.forEach((i) => {
          if (Array.isArray(i.deliveryPoints) && i.deliveryPoints.length > 0) {
            showData.push(i);
            i.deliveryPoints.forEach((deliveryPoint: any) => {
              showData.push({
                [COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG]: deliveryPoint.name,
                [COMPANY_FIELD_CONSTANT.QUANG_DUONG]: deliveryPoint.distance,
                [`actioncolumnHideComponent`]: true,
              });
            });
          } else {
            showData.push(i);
          }
        });
        this._uppdateTableData(showData);
        StoreDataService.update(StoreDataKeys.COMPANY_LIST, res);
      },
      (error) => {}
    );
  }

  override updateAPI(id: any, data: any) {
    return this._masterDataService.updateCompany(id, data);
  }

  override deleteAPI(id: any) {
    return this._masterDataService.deleteCompany(id);
  }

  override createAPI(data: any) {
    let request = { ...data };
    const deliveryPoints = [];
    const regexNumber = new RegExp('[0-9]*$', 'g');
    for (const property in data) {
      if (!data[property]) {
        continue;
      }

      if (/diaDiemGiaoHang/.test(property)) {
        const match = property.match(regexNumber);
        if (!match) {
          continue;
        }
        deliveryPoints.push({
          name: data[property],
          distance: data[`${COMPANY_FIELD_CONSTANT.QUANG_DUONG}${match[0]}`],
        });
        delete request[property];
        delete request[`${COMPANY_FIELD_CONSTANT.QUANG_DUONG}${match[0]}`];
      }
    }
    request.deliveryPoints = deliveryPoints;
    return this._masterDataService.createCompany(request);
  }

  protected override getFormConfig(record: any): any[] {
    return GET_ADD_NEW_CONFIG_CONG_TY(record, this._formGroupAddNew);
  }

  protected override addCircle(record: any) {
    this._formGroupAddNew = this._builder.group({});
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Thêm Điểm Đến`,
        confirmBTNText: `Xác nhận`,
        formConfig: GET_ADD_MEW_DIEM_DEN(record, this._formGroupAddNew),
        confirmAction: (data: any) => {
          const request = {
            name: data[COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG],
            [COMPANY_FIELD_CONSTANT.QUANG_DUONG]:
              data[COMPANY_FIELD_CONSTANT.QUANG_DUONG],
            companyId: record.id,
          };
          return this._masterDataService
            .createDeliveryPoints(this._clearNullData(request))
            .pipe(
              finalize(() => {
                this._loadData();
              })
            );
        },
        initData: record,
        formGroup: this._formGroupAddNew,
      },
      panelClass: ['common-popup-3xx'],
    });
  }
}
