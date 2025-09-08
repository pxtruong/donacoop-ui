import { Component } from '@angular/core';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { GET_TABLE_CONFIG_XE_TAI } from '../../constants/danh-sach-xe-tai-table.constant';
import { FIELD_XE_TAI_CONSTANT } from '../../constants/field-danh-sach-xe-tai.constant';
import { GET_CONFIG_ADD_NEW_XE_TAI } from '../../constants/xe-tai-add-new-config.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';

@Component({
  selector: 'md-truck',
  imports: [SharedTable],
  templateUrl: './truck.component.html',
  styleUrl: './truck.component.scss',
  standalone: true,
})
export class TruckComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = GET_TABLE_CONFIG_XE_TAI();
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getTruckList(),
      (res) => {
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }
  override updateAPI(id: any, data: any) {
    return this._masterDataService.updateTruck(id, data);
  }

  override deleteAPI(id: any) {
    return this._masterDataService.deleteTruck(id);
  }
  override createAPI(data: any) {
    return this._masterDataService.createTruck(data);
  }

  protected override getFormConfig() {
    return GET_CONFIG_ADD_NEW_XE_TAI();
  }
  protected override _prepareEditData(record: any) {
    const _record: any = { ...record };
    if (_record.company) {
      _record[FIELD_XE_TAI_CONSTANT.THUOC_CONG_TY] = _record.company.id;
    }
    return _record;
  }
}
