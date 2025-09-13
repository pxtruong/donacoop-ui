import { Component } from '@angular/core';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { ITableConfig } from '../../../../shared/models/table.model';
import { CONFIG_ADD_LOAI_DA } from '../../constants/stone-type-add-new-config.constant';
import { tableConfigLoaiDa } from '../../constants/stone-type-table.constant';
import { MasterDataBaseComponent } from '../master-data-base.component/master-data-base.component';

@Component({
  selector: 'md-stone-type',
  imports: [SharedTable],
  templateUrl: './stone-type.component.html',
  styleUrl: './stone-type.component.scss',
  standalone: true,
})
export class StoneTypeComponent extends MasterDataBaseComponent {
  override tableConfig: ITableConfig = tableConfigLoaiDa;
  protected override _loadData() {
    this.subcribe(
      this._masterDataService.getStoneType(),
      (res) => {
        this._uppdateTableData(res?.data);
      },
      (error) => {}
    );
  }
  override updateAPI(id: any, data: any) {
    return this._masterDataService.updateStoneType(id, data);
  }

  override deleteAPI(id: any) {
    return this._masterDataService.deleteStoneType(id);
  }
  override createAPI(data: any) {
    return this._masterDataService.createStoneType(data);
  }

  protected override getFormConfig() {
    return CONFIG_ADD_LOAI_DA;
  }
}
