import { Component } from '@angular/core';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { GET_ADD_NEW_MACHINERIES } from '../../constants/machineries-add-new-config.constant';
import { MACHINERIES_FIELD_CONSTANT } from '../../constants/machineries-field.constant';
import { GET_TABLE_CONFIG_MACHINERIES } from '../../constants/machineries-table.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';

@Component({
  selector: 'md-machineries',
  imports: [SharedTable],
  templateUrl: './machineries.component.html',
  styleUrl: './machineries.component.scss',
  standalone: true,
})
export class MachineriesComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = GET_TABLE_CONFIG_MACHINERIES();
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getMachineries(),
      (res) => {
        this._uppdateTableData(res);
      },
      (error) => {}
    );
  }

  protected override updateAPI(id: any, data: any) {
    return this._masterDataService.updateMachineries(id, data);
  }

  protected override deleteAPI(id: any) {
    return this._masterDataService.deleteMachineries(id);
  }

  protected override getFormConfig() {
    return GET_ADD_NEW_MACHINERIES();
  }

  override createAPI(data: any) {
    return this._masterDataService.createMachineries(data);
  }

  protected override _prepareEditData(record: any) {
    const _record: any = { ...record };
    if (_record.company) {
      _record[MACHINERIES_FIELD_CONSTANT.TEN_CONG_TY] = _record.company.id;
    }
    return _record;
  }
}
