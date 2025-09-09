import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseLayoutComponent } from '../../../../core/components/base-layout.component/base-layout.component';
import { ButtonAcceppt } from '../../../../shared/components/button-acceppt/button-acceppt';
import { SharedForm } from '../../../../shared/components/shared-form/shared-form';
import { SharedInputComponent } from '../../../../shared/components/shared-input/shared-input';
import { IDynamicFormModel } from '../../../../shared/models/dynamic-form.model';
import { DonacoopBaseComponent } from '../../../base/donacoop-base.component/donacoop-base.component';
import { SimulatorService } from '../../servies/simulator.service';
import { SharedSelect } from '../../../../shared/components/shared-select/shared-select';
import { StoreDataService } from '../../../../core/services/store-data.service';
import { StoreDataKeys } from '../../../../core/models/store-data.model';
import { WEIGHT_POSITION_OPTIONS_VALUE } from '../../../master-data/constants/truck.constant';

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
    licensePlate: new FormControl(''),
    command: new FormControl(''),
  });
  formConfig: IDynamicFormModel[] = [];
  public signalLight1: string = 'red';
  // #region group 2
  public formGroup2 = new FormGroup({
    cam1: new FormControl(''),
    licensePlate: new FormControl(''),
    command: new FormControl(''),
  });
  formConfig2: IDynamicFormModel[] = [];
  public signalLight2: string = 'red';
  // #region group 3
  public formGroup3 = new FormGroup({
    cam1: new FormControl(''),
    licensePlate: new FormControl(''),
    command: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig3: IDynamicFormModel[] = [];
  public signalLight3: string = 'green';
  // #region group 4
  public formGroup4 = new FormGroup({
    cam1: new FormControl(''),
    licensePlate: new FormControl(''),
    command: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig4: IDynamicFormModel[] = [];
  public signalLight4: string = 'green';
  // #region group 5
  public formGroup5 = new FormGroup({
    cam1: new FormControl(''),
    licensePlate: new FormControl(''),
    command: new FormControl(''),
    weight: new FormControl(''),
    stoneType: new FormControl(''),
  });
  formConfig5: IDynamicFormModel[] = [];
  public signalLight5: string = 'green';
  constructor(
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder,
    private _simulatorService: SimulatorService
  ) {
    super(_dialog, _builder);
    this._config1();
    this._config2();
    const stoneList = StoreDataService.getValue(StoreDataKeys.STONE_TYPE);
    const stoneTypeOptions: any[] = [];
    if (Array.isArray(stoneList)) {
      stoneList.forEach((i: any) => {
        stoneTypeOptions.push({
          label: `${i.name}`,
          value: `${i.id}`,
        });
      });
    }
    this._config3(stoneTypeOptions);
    this._config4(stoneTypeOptions);
    this._config5(stoneTypeOptions);
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
          this._handleApi1();
        },
      },
      {
        fieldName: 'licensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe',
        iParams: {
          iControl: this.formGroup.controls.licensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'command',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe',
        iParams: {
          iControl: this.formGroup.controls.command,
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
          this._handleApi2();
        },
      },
      {
        fieldName: 'licensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe',
        iParams: {
          iControl: this.formGroup2.controls.licensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'command',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe',
        iParams: {
          iControl: this.formGroup2.controls.command,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _config3(stoneTypeList: any[]) {
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
        iComponent: SharedSelect,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup3.controls.stoneType,
          dataSource: stoneTypeList,
          applyFieldValue: 'value',
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
          this._handleApi3();
        },
      },
      {
        fieldName: 'licensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe',
        iParams: {
          iControl: this.formGroup3.controls.licensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'command',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe',
        iParams: {
          iControl: this.formGroup3.controls.command,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _config4(stoneTypeList: any[]) {
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
        iComponent: SharedSelect,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup4.controls.stoneType,
          dataSource: stoneTypeList,
          applyFieldValue: 'value',
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
          this._handleApi4();
        },
      },
      {
        fieldName: 'licensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe',
        iParams: {
          iControl: this.formGroup4.controls.licensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'command',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe',
        iParams: {
          iControl: this.formGroup4.controls.command,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _config5(stoneTypeList: any[]) {
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
        iComponent: SharedSelect,
        label: 'Loại Đá',
        iParams: {
          iControl: this.formGroup5.controls.stoneType,
          dataSource: stoneTypeList,
          applyFieldValue: 'value',
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
          this._handleApi5();
        },
      },
      {
        fieldName: 'licensePlate',
        iComponent: SharedInputComponent,
        label: 'Biển số xe',
        iParams: {
          iControl: this.formGroup5.controls.licensePlate,
          isDisabled: true,
        },
        className: 'col-6',
      },
      {
        fieldName: 'command',
        iComponent: SharedInputComponent,
        label: 'Hiệu lênh xe',
        iParams: {
          iControl: this.formGroup5.controls.command,
          isDisabled: true,
        },
        className: 'col-6',
      },
    ];
  }

  private _handleApi1() {
    this.logLevel.debug(`call function _handleApi1`, this.formGroup.value);
    this.subcribe(
      this._simulatorService.enterGate(
        this.formGroup.value.cam1 ? this.formGroup.value.cam1 : ''
      ),
      (res) => {
        const { licensePlate, message } = res;
        this.formGroup.controls.command.setValue(message);
        this.formGroup.controls.licensePlate.setValue(licensePlate);
      },
      (error) => {
        this.logLevel.debug(`error--`, error);
      }
    );
  }

  private _handleApi2() {
    this.logLevel.debug(`call function _handleApi2`, this.formGroup2.value);
    this.subcribe(
      this._simulatorService.exitGate(
        this.formGroup2.value.cam1 ? this.formGroup2.value.cam1 : ''
      ),
      (res) => {
        const { licensePlate, message } = res;
        this.formGroup2.controls.command.setValue(message);
        this.formGroup2.controls.licensePlate.setValue(licensePlate);
      },
      (error) => {}
    );
  }

  private _handleApi3() {
    const res = this.formGroup3.value;
    const cam = res.cam1;
    this.logLevel.debug(`call function _handleApi3`, this.formGroup3.value);
    this.subcribe(
      this._simulatorService.weightStation({
        licensePlate: cam,
        stoneTypeId: res.stoneType,
        weighStation: WEIGHT_POSITION_OPTIONS_VALUE.CAN_1,
        weight: res.weight,
      }),
      (res) => {
        const controls = this.formGroup3.controls;
        const { licensePlate, message } = res;
        controls.licensePlate.setValue(licensePlate);
        controls.command.setValue(message);
      },
      (error) => {}
    );
  }

  private _handleApi4() {
    const res = this.formGroup4.value;
    this.logLevel.debug(`call function _handleApi3`, this.formGroup4.value);
    const cam = res.cam1;
    this.subcribe(
      this._simulatorService.weightStation({
        licensePlate: cam,
        stoneTypeId: res.stoneType,
        weighStation: WEIGHT_POSITION_OPTIONS_VALUE.CAN_2,
        weight: res.weight,
      }),
      (res) => {
        const controls = this.formGroup4.controls;
        const { licensePlate, message } = res;
        controls.licensePlate.setValue(licensePlate);
        controls.command.setValue(message);
      },
      (error) => {}
    );
  }

  private _handleApi5() {
    const res = this.formGroup5.value;
    this.logLevel.debug(`call function _handleApi3`, this.formGroup5.value);
    const cam = res.cam1;
    this.subcribe(
      this._simulatorService.weightStation({
        licensePlate: cam,
        stoneTypeId: res.stoneType,
        weighStation: WEIGHT_POSITION_OPTIONS_VALUE.CAN_3,
        weight: res.weight,
      }),
      (res) => {
        const controls = this.formGroup5.controls;
        const { licensePlate, message } = res;
        controls.licensePlate.setValue(licensePlate);
        controls.command.setValue(message);
      },
      (error) => {}
    );
  }
}
