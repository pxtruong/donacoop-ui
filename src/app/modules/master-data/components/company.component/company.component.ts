import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { IResponsePaging } from '../../../../core/models/http-service.model';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { SharedAddNewPopup } from '../../../../shared/components/shared-add-new-popup/shared-add-new-popup';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { COMMON_FIELD } from '../../../base/donacoop-base.component/constants/donacoop-base.constant';
import {
  GET_ADD_MEW_DIEM_DEN,
  GET_ADD_NEW_CONFIG_CONG_TY,
} from '../../constants/company-add-new-config.constant';
import { COMPANY_FIELD_CONSTANT } from '../../constants/company-field.constant';
import { tableConfigCongTy } from '../../constants/company-table.constant';
import { ICompanyModel, IRequestCompany } from '../../models/company.model';
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
      (res: IResponsePaging<ICompanyModel>) => {
        const listCompany = res?.data;
        if (!Array.isArray(listCompany)) {
          return;
        }
        const showData: any[] = [];
        listCompany.forEach((i) => {
          i[`${COMMON_FIELD.ACTION}add_circle_outlineShow`] = true;
          if (Array.isArray(i.deliveryPoints) && i.deliveryPoints.length > 0) {
            showData.push(i);
            i.deliveryPoints.forEach((deliveryPoint: any) => {
              showData.push({
                [COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG]: deliveryPoint.name,
                [COMPANY_FIELD_CONSTANT.QUANG_DUONG]: deliveryPoint.distance,
                [COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG]:
                  deliveryPoint[
                    COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG
                  ],
                isDeliveryPoints: true,
                id: deliveryPoint.id,
                companyId: i.id,
              });
            });
          } else {
            showData.push(i);
          }
        });
        this._uppdateTableData(showData);
        StoreDataService.update(StoreDataKeys.COMPANY_LIST, res);
      },
      (error) => {
        this.logLevel.debug('load data error', error);
      }
    );
  }

  override updateAPI(id: number, data: IRequestCompany) {
    return this._masterDataService.updateCompany(id, data);
  }

  override deleteAPI(id: number) {
    return this._masterDataService.deleteCompany(id);
  }

  override createAPI(data: IRequestCompany) {
    let request = { ...data };
    // const deliveryPoints = [];
    // const regexNumber = new RegExp('[0-9]*$', 'g');
    // for (const property in data) {
    //   if (!data[property]) {
    //     continue;
    //   }

    //   if (/diaDiemGiaoHang/.test(property)) {
    //     const match = property.match(regexNumber);
    //     if (!match) {
    //       continue;
    //     }
    //     deliveryPoints.push({
    //       name: data[property],
    //       distance: data[`${COMPANY_FIELD_CONSTANT.QUANG_DUONG}${match[0]}`],
    //     });
    //     delete request[property];
    //     delete request[`${COMPANY_FIELD_CONSTANT.QUANG_DUONG}${match[0]}`];
    //   }
    // }
    request.deliveryPoints = [];
    return this._masterDataService.createCompany(request);
  }

  protected override getFormConfig(record: IRequestCompany): any[] {
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
          const request: any = {
            name: data[COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG],
            [COMPANY_FIELD_CONSTANT.QUANG_DUONG]:
              data[COMPANY_FIELD_CONSTANT.QUANG_DUONG],
            [COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG]:
              data[COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG],
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

  protected _editDeliveryPoints(record: any) {
    this._formGroupAddNew = this._builder.group({});
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Sửa Điểm Đến`,
        confirmBTNText: `Xác nhận`,
        formConfig: GET_ADD_MEW_DIEM_DEN(record, this._formGroupAddNew),
        confirmAction: (data: any) => {
          const request = {
            name: data[COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG],
            [COMPANY_FIELD_CONSTANT.QUANG_DUONG]:
              data[COMPANY_FIELD_CONSTANT.QUANG_DUONG],
            [COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG]:
              data[COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG],
            companyId: record.companyId,
          };
          return this._masterDataService
            .updateDeliveryPoints(record.id, this._clearNullData(request))
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

  protected override _editPopup(record: any) {
    if (record.isDeliveryPoints) {
      this._editDeliveryPoints(record);
      return;
    }

    this._formGroupAddNew = this._builder.group({});
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Sửa Công Ty`,
        confirmBTNText: `Xác nhận`,
        formConfig: this.getFormConfig(record),
        confirmAction: (data: any) => {
          return this.updateAPI(record.id, this._clearNullData(data)).pipe(
            finalize(() => {
              this._loadData();
            })
          );
        },
        initData: this._prepareEditData(record),
        formGroup: this._formGroupAddNew,
      },
      panelClass: ['common-popup-3xx'],
    });
  }

  protected _deleteDeliveryPoints(record: any) {
    this._dialog.open(SharedAddNewPopup, {
      data: {
        message: `Bạn có đồng ý xóa dòng này ?`,
        title: `Xóa Điểm Giao Hàng`,
        confirmBTNText: `Xác nhận`,
        confirmAction: () => {
          return this._masterDataService.deleteDeliveryPoints(record.id).pipe(
            finalize(() => {
              this._loadData();
            })
          );
        },
        initData: record,
      },
      panelClass: ['common-popup-3xx'],
    });
  }

  protected override _deletePoup(record: any) {
    if (record.isDeliveryPoints) {
      this._deleteDeliveryPoints(record);
      return;
    }
    this._dialog.open(SharedAddNewPopup, {
      data: {
        message: `Bạn có đồng ý xóa dòng này ?`,
        title: `Xóa Công Ty`,
        confirmBTNText: `Xác nhận`,
        confirmAction: () => {
          return this.deleteAPI(record.id).pipe(
            finalize(() => {
              this._loadData();
            })
          );
        },
        initData: record,
      },
      panelClass: ['common-popup-3xx'],
    });
  }
}
