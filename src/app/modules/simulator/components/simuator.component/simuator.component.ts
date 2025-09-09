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
  public formGroup = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
  });
  formConfig: IDynamicFormModel[] = [];
  public signalLight1: string = 'red';

  public formGroup2 = new FormGroup({
    cam1: new FormControl(''),
    beforeLicensePlate: new FormControl(''),
    afterLicensePlate: new FormControl(''),
    beforeCommand: new FormControl(''),
    afterCommand: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig2: IDynamicFormModel[] = [];
  public signalLight2: string = 'green';
  constructor(
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
    this.formConfig = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup.controls.cam1,
        },
        className: 'col-12',
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup.controls.beforeLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup.controls.beforeLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup.controls.afterLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup.controls.afterCommand,
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
        className: 'col-12',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
    ];
    this.formConfig2 = [
      {
        fieldName: 'cam1',
        iComponent: SharedInputComponent,
        label: 'Camera đọc biển số',
        iParams: {
          iControl: this.formGroup2.controls.cam1,
        },
        className: 'col-12',
      },
      {
        fieldName: 'weight',
        iComponent: SharedInputComponent,
        label: 'Khối lương',
        iParams: {
          iControl: this.formGroup2.controls.weight,
        },
        className: 'col-12',
      },
      {
        fieldName: 'stoneType',
        iComponent: SharedInputComponent,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup2.controls.stoneType,
        },
        className: 'col-12',
      },
      {
        fieldName: 'beforeLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe trước',
        iParams: {
          iControl: this.formGroup2.controls.beforeLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'beforeCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe trước',
        iParams: {
          iControl: this.formGroup2.controls.beforeLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterLicensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe sau',
        iParams: {
          iControl: this.formGroup2.controls.afterLicensePlate,
        },
        className: 'col-6',
      },
      {
        fieldName: 'afterCommand',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe sau',
        iParams: {
          iControl: this.formGroup2.controls.afterCommand,
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
        className: 'col-12',
        clickBTN: () => {
          this.logLevel.debug(`click`);
        },
      },
    ];
  }
}
