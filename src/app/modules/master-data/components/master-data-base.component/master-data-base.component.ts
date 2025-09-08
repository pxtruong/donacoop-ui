import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_ADD_NEW_CONFIG_CONG_TY } from '../../constants/company-add-new-config.constant';
import { MasterDataService } from '../../services/master-data.service';

@Component({
  selector: 'master-data-base.component',
  templateUrl: './master-data-base.component.html',
  styleUrl: './master-data-base.component.scss',
  standalone: true,
})
export class MasterDataBaseComponent
  extends DonacoopBaseComponent
  implements OnInit
{
  constructor(
    protected _masterDataService: MasterDataService,
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
  }

  protected override getFormConfig(record: any): any[] {
    return GET_ADD_NEW_CONFIG_CONG_TY(record, this._formGroupAddNew);
  }
}
