import { Component } from '@angular/core';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { GET_ADD_NEW_CONFIG_CHUC_VU } from '../../constants/role-add-new-config.constant';
import { ROLE_FIELD_CONSTANT } from '../../constants/role-field.constant';
import { GET_TABLE_CONFIG_ROLE } from '../../constants/role-table.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';
import { CDanaCoopBase } from '../../../base/models/basic-item.model';

@Component({
  selector: 'md-position',
  imports: [SharedTable],
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss',
  standalone: true,
})
export class PositionComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = GET_TABLE_CONFIG_ROLE();
  protected override _apiLoadData() {
    if (!this.tableConfig.paginationConfig) {
      return this._masterDataService.getRoles();
    }
    return this._masterDataService.getRoleListListPaging(
      CDanaCoopBase.makeRequestPaging(this.tableConfig.paginationConfig)
    );
  }

  protected override getFormConfig(record: any): any[] {
    return GET_ADD_NEW_CONFIG_CHUC_VU(record, this._formGroupAddNew);
  }
  protected override updateAPI(id: any, data: any) {
    if (data[ROLE_FIELD_CONSTANT.TEN_CHUC_VU]) {
      data[ROLE_FIELD_CONSTANT.KEY] = data[ROLE_FIELD_CONSTANT.TEN_CHUC_VU]
        .toLowerCase()
        .replace(/\s/g, '_');
    }
    return this._masterDataService.updateRoles(id, data);
  }

  protected override deleteAPI(id: any) {
    return this._masterDataService.deleteRoles(id);
  }
  override createAPI(data: any) {
    if (data[ROLE_FIELD_CONSTANT.TEN_CHUC_VU]) {
      data[ROLE_FIELD_CONSTANT.KEY] = data[ROLE_FIELD_CONSTANT.TEN_CHUC_VU]
        .toLowerCase()
        .replace(/\s/g, '_');
    }
    return this._masterDataService.createRoles(data);
  }
}
