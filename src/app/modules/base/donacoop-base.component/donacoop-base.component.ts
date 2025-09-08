import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { finalize, of } from 'rxjs';
import { SharedAddNewPopup } from '../../../shared/components/shared-add-new-popup/shared-add-new-popup';
import { BasicExtends } from '../../../shared/models/basic-extends.model';
import { ITableConfig } from '../../../shared/models/table.model';

@Component({
  selector: 'app-donacoop-base.component',
  imports: [],
  templateUrl: './donacoop-base.component.html',
  styleUrl: './donacoop-base.component.scss',
})
export class DonacoopBaseComponent extends BasicExtends implements OnInit {
  tableConfig!: ITableConfig;
  protected _formGroupAddNew!: FormGroup;
  constructor(protected _dialog: MatDialog, protected _builder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this._loadData();
  }
  protected _loadData() {}
  protected _uppdateTableData(data: any[]) {
    if (!this.tableConfig || !Array.isArray(data)) {
      return;
    }
    this.tableConfig.dataSource = [...data];
  }

  public onClickBTN(event: any) {
    const {
      action: { iIcon },
      record,
    } = event;
    if (iIcon === 'edit') {
      this._editPopup(record);
      return;
    }
    if (iIcon === 'delete') {
      this._deletePoup(record);
      return;
    }
    if (iIcon === 'add_circle_outline') {
      this.addCircle(record);
      return;
    }
    if (iIcon === 'disabled_by_default') {
      this._inactivePopup(record);
      return;
    }
  }

  protected addCircle(record: any) {}

  protected getFormConfig(record: any): any[] {
    return [];
  }

  protected _updateRequest() {}

  protected _prepareEditData(record: any) {
    return { ...record };
  }

  protected _prepareCircle(record: any) {
    return { ...record };
  }
  protected _editPopup(record: any) {
    this._formGroupAddNew = this._builder.group({});
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Sửa`,
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

  protected updateAPI(id: any, data: any) {
    return of(null);
  }

  protected _deletePoup(record: any) {
    this._dialog.open(SharedAddNewPopup, {
      data: {
        message: `Bạn có đồng ý xóa dòng này ?`,
        title: `Xóa`,
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

  protected _inactivePopup(record: any) {
    this._dialog.open(SharedAddNewPopup, {
      data: {
        message: `Bạn muốn ngừng hoạt động ?`,
        title: `Ngừng hoạt động`,
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

  protected inactiveAPI(id: any) {
    return of(null);
  }

  protected deleteAPI(id: any) {
    return of(null);
  }

  protected _prepareEventAddNew() {}

  public addNewPopup() {
    this._formGroupAddNew = this._builder.group({});
    this._prepareEventAddNew();
    this._dialog.open(SharedAddNewPopup, {
      data: {
        title: `Thêm mới`,
        formConfig: this.getFormConfig(null),
        confirmAction: (data: any) => {
          return this.createAPI(this._clearNullData(data)).pipe(
            finalize(() => {
              this._loadData();
            })
          );
        },
        formGroup: this._formGroupAddNew,
      },
      panelClass: ['common-popup-3xx'],
    });
  }

  protected createAPI(data: any) {
    return of(null);
  }

  protected _clearNullData(data: any) {
    let res: any = {};
    for (const property in data) {
      if (data[property] === null || data[property] === '') {
        continue;
      }
      res[property] = data[property];
    }
    return res;
  }
  protected updateCircle(id: any, data: any, otherRecord: any) {
    return of(null);
  }
}
