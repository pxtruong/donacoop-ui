import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { SharedAddNewPopup } from '../../../../shared/components/shared-add-new-popup/shared-add-new-popup';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { FIELD_KHO_CONSTANT } from '../../constants/field-kho.constant';
import { GET_TABLE_CONFIG_KHO } from '../../constants/kho-table.constant';
import {
  GET_ADD_NEW_CONFIG_WAREHOUSES,
  GET_ADD_NEW_LOAI_DA_VAO_KHO,
} from '../../constants/warehouses-add-new-config.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';

@Component({
  selector: 'md-warehouse',
  imports: [SharedTable],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.scss',
  standalone: true,
})
export class WarehouseComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = GET_TABLE_CONFIG_KHO();
  isShowAddMore: boolean = true;
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getWarehouses(),
      (res) => {
        if (!Array.isArray(res)) {
          return;
        }
        res.forEach((i) => {
          if (!Array.isArray(i.stocks)) {
            return;
          }
          i.stocks.forEach(
            (stock: { stoneType: { id: number }; quantity: number }) => {
              i[stock.stoneType.id] = stock.quantity;
            }
          );
        });
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }
  override updateAPI(id: any, data: any) {
    return this._masterDataService.updateWarehouses(id, data);
  }

  override deleteAPI(id: any) {
    return this._masterDataService.deleteWarehouses(id);
  }
  override createAPI(data: any) {
    return this._masterDataService.createWarehouses(data);
  }

  protected override getFormConfig() {
    return GET_ADD_NEW_CONFIG_WAREHOUSES();
  }

  protected override _prepareEditData(record: any) {
    const _record: any = { ...record };
    if (_record.company) {
      _record[FIELD_KHO_CONSTANT.COMPANY] = _record.company.id;
    }
    return _record;
  }

  protected override addCircle(record: any) {
    this._formGroupAddNew = this._builder.group({});
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Thêm Loại Đá Vào Kho`,
        confirmBTNText: `Xác nhận`,
        formConfig: GET_ADD_NEW_LOAI_DA_VAO_KHO(record, this._formGroupAddNew),
        confirmAction: (data: any) => {
          const request = {
            [FIELD_KHO_CONSTANT.SO_LUONG]: data[FIELD_KHO_CONSTANT.SO_LUONG],
            [FIELD_KHO_CONSTANT.LOAI_DA]: data[FIELD_KHO_CONSTANT.LOAI_DA],
            [FIELD_KHO_CONSTANT.WAREHOUSEID]: record.id,
          };
          let hasStock: boolean = false;
          let updateStockId: number = 0;
          if (Array.isArray(record.stocks)) {
            record.stocks.forEach((stock: any) => {
              if (data[FIELD_KHO_CONSTANT.LOAI_DA] === stock.stoneType.id) {
                hasStock = true;
                updateStockId = stock.id;
              }
            });
          }
          if (hasStock) {
            return this._masterDataService
              .updateStock(updateStockId, this._clearNullData(request))
              .pipe(
                finalize(() => {
                  this._loadData();
                })
              );
          } else {
            return this._masterDataService
              .createStock(this._clearNullData(request))
              .pipe(
                finalize(() => {
                  this._loadData();
                })
              );
          }
        },
        initData: this._prepareCircle(record),
        formGroup: this._formGroupAddNew,
      },
      panelClass: ['common-popup-3xx'],
    });
  }
}
