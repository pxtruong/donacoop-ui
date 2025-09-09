import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedInputComponent } from '../../../../shared/components/shared-input/shared-input';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'simuator.component',
  imports: [BaseLayoutComponent, SharedForm],
  templateUrl: './simuator.component.html',
  styleUrl: './simuator.component.scss',
  standalone: true,
})
export class SimuatorComponent extends DonacoopBaseComponent {
  // #region GROUP 1
  public formGroup = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
  });
  formConfig: IDynamicFormModel[] = [];
  public signalLight1: string = 'red';
  // #region group 2
  public formGroup2 = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
  });
  formConfig2: IDynamicFormModel[] = [];
  public signalLight2: string = 'red';
  // #region group 3
  public formGroup3 = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig3: IDynamicFormModel[] = [];
  public signalLight3: string = 'green';
  // #region group 4
  public formGroup4 = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig4: IDynamicFormModel[] = [];
  public signalLight4: string = 'green';
  // #region group 5
  public formGroup5 = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig5: IDynamicFormModel[] = [];
  public signalLight5: string = 'green';
  constructor(
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
    this._config1();
    this._config2();
    this._config3();
    this._config4();
    this._config5();
  }

  private _config1() {
    this.formConfig = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup.controls.cam1,
        },
        className: 'col-6',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Cập Nhật',
          iCustomClass: 'mt-4',
        },
        className: 'col-6',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup.controls.afterLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup.controls.afterCommand,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }
  private _config2() {
    this.formConfig2 = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup2.controls.cam1,
        },
        className: 'col-6',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Cập Nhật',
          iCustomClass: 'mt-4',
        },
        className: 'col-6',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup2.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup2.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup2.controls.afterLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup2.controls.afterCommand,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _config3() {
    this.formConfig3 = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup3.controls.cam1,
        },
        className: 'col-6',
      },
      {
        fieldName: 'weight',
        iComponent: SharedInputComponent,
        label: 'Khối lương',
        iParams: {
          iControl: this.formGroup3.controls.weight,
        },
        className: 'col-6',
      },
      {
        fieldName: 'stoneType',
        iComponent: SharedInputComponent,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup3.controls.stoneType,
        },
        className: 'col-6',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Cập Nhật',
          iCustomClass: 'mt-4',
        },
        className: 'col-6',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup3.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup3.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup3.controls.afterLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup3.controls.afterCommand,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }
  private _config4() {
    this.formConfig4 = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup4.controls.cam1,
        },
        className: 'col-6',
      },
      {
        fieldName: 'weight',
        iComponent: SharedInputComponent,
        label: 'Khối lương',
        iParams: {
          iControl: this.formGroup4.controls.weight,
        },
        className: 'col-6',
      },
      {
        fieldName: 'stoneType',
        iComponent: SharedInputComponent,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup4.controls.stoneType,
        },
        className: 'col-6',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Cập Nhật',
          iCustomClass: 'mt-4',
        },
        className: 'col-6',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup4.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup4.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup4.controls.afterLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup4.controls.afterCommand,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _config5() {
    this.formConfig5 = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup5.controls.cam1,
        },
        className: 'col-6',
      },
      {
        fieldName: 'weight',
        iComponent: SharedInputComponent,
        label: 'Khối lương',
        iParams: {
          iControl: this.formGroup5.controls.weight,
        },
        className: 'col-6',
      },
      {
        fieldName: 'stoneType',
        iComponent: SharedInputComponent,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup5.controls.stoneType,
        },
        className: 'col-6',
      },
      {
        fieldName: 'btnAccept',
        iComponent: ButtonAcceppt,
        label: '',
        iParams: {
          iControl: null,
          iIcon: '',
          iText: 'Cập Nhật',
          iCustomClass: 'mt-4',
        },
        className: 'col-6',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup5.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup5.controls.beforeLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup5.controls.afterLicensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup5.controls.afterCommand,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }
}
