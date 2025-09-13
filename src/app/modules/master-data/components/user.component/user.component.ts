import { Component } from '@angular/core';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { GET_CONFIG_ADD_NEW_NHAN_SU } from '../../constants/user-add-new-config.constant';
import { GET_TABLE_NHAN_SU } from '../../constants/user-table.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';
import { USER_FIELD_CONSTANT } from '../../constants/user-field.constant';

@Component({
  selector: 'md-user.component',
  imports: [SharedTable],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
})
export class UserComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = GET_TABLE_NHAN_SU();
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getUserList(),
      (res) => {
        const data = res?.data;
        if (!Array.isArray(data)) {
          return;
        }
        this._uppdateTableData(data);
      },
      (error) => {}
    );
  }
  override updateAPI(id: any, data: any) {
    data.roles = [data.roles];
    return this._masterDataService.updateUser(id, data);
  }

  override deleteAPI(id: any) {
    return this._masterDataService.deleteUser(id);
  }
  override createAPI(data: any) {
    data.roles = [data.roles];
    return this._masterDataService.createUser(data);
  }
  protected override getFormConfig() {
    return GET_CONFIG_ADD_NEW_NHAN_SU();
  }

  protected override _prepareEditData(record: any) {
    const _record: any = { ...record };
    _record[USER_FIELD_CONSTANT.THUOC_CONG_TY] = _record?.company?.id;
    if (!_record.roles) {
      return _record;
    }
    _record[USER_FIELD_CONSTANT.CHUC_VU] = _record.roles[0]?.id;
    return _record;
  }
}
