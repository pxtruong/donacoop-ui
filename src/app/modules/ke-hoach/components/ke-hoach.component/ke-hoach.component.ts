import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { ButtonCancel } from '../../../../shared/components/button-cancel/button-cancel';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { SharedTable } from '../../../../shared/components/shared-table/shared-table';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ISelectionOption } from '../../../../shared/models/selection-option.model';
import { ITableConfig } from '../../../../shared/models/table.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { GET_TABLE_CONFIG_PLANT } from '../../constants/ke-hoach-table.constant';
import { ActivitiesService } from '../../../theo-doi-hoat-dong/services/activities.services';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-ke-hoach.component',
  imports: [BaseLayoutComponent, SharedTable, SharedForm],
  templateUrl: './ke-hoach.component.html',
  styleUrl: './ke-hoach.component.scss',
})
export class KeHoachComponent extends DonacoopBaseComponent {
  private plantFormGroup = new FormGroup({
    machineries: new FormControl(''),
  });
  public formConfig: IDynamicFormModel[] = [];

  public override tableConfig: ITableConfig = GET_TABLE_CONFIG_PLANT();
  private _dataSource = [];
  protected override _loadData() {
    const data = StoreDataService.getValue(StoreDataKeys.ACTIVITIES);
    this._dataSource = data
      .filter((i: any) => {
        return !i.gateOutTime && i.gateInTime;
      })
      .sort((a: any, b: any) => {
        if (!b.gateInTime) return -1;
        else if (!a.gateInTime) return 1;
        return (
          new Date(b.gateInTime).getTime() - new Date(a.gateInTime).getTime()
        );
      });
    this.tableConfig.dataSource = [...this._dataSource];
    this._initForm();
  }

  constructor(
    private _activitiesService: ActivitiesService,
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
  }
  private _initForm() {
    const machineriesOptions: any[] = [];
    const existsMachineries: any = {};
    this._dataSource.forEach((i: any) => {
      if (!i.pickupPosition) {
        return;
      }
      const pickupPosition = i.pickupPosition;
      if (existsMachineries[pickupPosition.id]) {
        return;
      }
      machineriesOptions.push({
        label: pickupPosition.name,
        value: pickupPosition.id,
      });
      existsMachineries[pickupPosition.id] = true;
    });
    this.formConfig = [
      {
        fieldName: 'machineries',
        iComponent: SharedSelect,
        label: 'Chọn Xe Xúc',
        iParams: {
          iControl: this.plantFormGroup.get('machineries'),
          dataSource: machineriesOptions,
          applyFieldValue: 'value',
        },
        className: 'col-3',
        onTriggerSearch: (data: ISelectionOption) => {
          this.logLevel.debug('Trigger search in Master Data with data:', data);
        },
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Tìm',
          iCustomClass: 'mt-4',
        },
        className: 'col-1',
        clickBTN: () => {
          this._filterData();
          this.logLevel.debug('Click tìm in KẾ Hoạch');
        },
      },
      {
        fieldName: 'btnAcceptRefresh',
        iComponent: ButtonCancel,
        label: '',
        iParams: {
          iControl: null,
          iIcon: 'autorenew',
          iText: '',
          iCustomClass: 'mt-4',
        },
        className: 'col-1',
        clickBTN: () => {
          this.subcribe(
            this._activitiesService.getActivities(),
            (res) => {
              this._loadData();
            },
            (error) => {}
          );
          this.logLevel.debug('Click Tải Lại Trang KẾ Hoạch');
        },
      },
    ];
  }

  private _filterData() {
    const filterData = this._clearNullData(this.plantFormGroup.value);
    if (!filterData) {
      return;
    }
    this.tableConfig.dataSource = [
      ...this._dataSource.filter((i: any) => {
        return filterData.machineries === i.pickupPosition.id;
      }),
    ];
  }
}
