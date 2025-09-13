import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../core/components/base/base.component';
import { CoreDialogComponent } from '../../../core/components/core-dialog/core-dialog.component';
import { SnackType } from '../../../core/enum/snack-type';
import { SnackService } from '../../../core/services/snack.service';
import { IDynamicFormModel } from '../../models/dynamic-form.model';
import { ButtonAcceppt } from '../button-acceppt/button-acceppt';
import { ButtonCancel } from '../button-cancel/button-cancel';
import { SharedForm } from '../shared-form/shared-form';

@Component({
  selector: 'app-shared-add-new-popup',
  imports: [CoreDialogComponent, ButtonAcceppt, ButtonCancel, SharedForm],
  templateUrl: './shared-add-new-popup.html',
  styleUrl: './shared-add-new-popup.scss',
  standalone: true,
})
export class SharedAddNewPopup extends BaseComponent {
  public title: string = 'Thêm Mới';
  public message: string = '';
  public confirmBTNText: string = 'Thêm Mới';
  private _formGroup!: FormGroup;
  public formConfig: IDynamicFormModel[] = [];
  constructor(
    private _dialogRef: MatDialogRef<SharedAddNewPopup>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _builder: FormBuilder,
    private _snackService: SnackService
  ) {
    super();
    if (data.title) {
      this.title = data.title;
    }
    if (data.confirmBTNText) {
      this.confirmBTNText = data.confirmBTNText;
    }
    if (data.message) {
      this.message = data.message;
      return;
    }
    if (data.formGroup) {
      this._formGroup = data.formGroup;
    } else {
      this._formGroup = this._builder.group({});
    }
    if (data.formConfig) {
      this.formConfig = data.formConfig;
      const initData = data.initData ? data.initData : {};
      this._initControl(initData);
    }
  }

  private _initControl(initData: any) {
    if (!Array.isArray(this.formConfig)) {
      return;
    }
    this.formConfig.forEach((item) => {
      if (!item.iParams) {
        return;
      }
      let validations: ValidatorFn[] = [];
      if (item.validations) {
        validations = [...item.validations];
      }
      this._formGroup.addControl(
        item.fieldName,
        new FormControl(initData[item.fieldName], validations)
      );
      item.iParams.iControl = this._formGroup.get(
        item.fieldName
      ) as FormControl;
      if (item.defaultDisabled) {
        this._formGroup.get(item.fieldName)?.disable();
      }
    });
  }

  public cancel() {
    this._dialogRef.close();
  }

  public async confirmed() {
    if (this._formGroup.invalid) {
      return;
    }
    if (this.data.confirmAction) {
      this.data.confirmAction(this._formGroup?.value).subscribe(() => {
        this._snackService.showSnack({
          message: 'Thêm mới thành công',
          type: SnackType.Success,
          timeout: 3000,
        });
        this._dialogRef.close();
      });
    } else {
      this._dialogRef.close();
    }
  }
}
