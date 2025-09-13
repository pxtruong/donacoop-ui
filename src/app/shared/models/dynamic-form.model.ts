import { Type } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export interface IDynamicFormModel {
  fieldName: string;
  label: string;
  iComponent: Type<any>;
  iParams: IDynamicFormParamsModel;
  className: string;
  onTriggerSearch?: Function;
  OSelectionChange?: Function;
  clickBTN?: Function;
  defaultDisabled?: boolean;
  validations?: ValidatorFn[];
}

export interface IDynamicFormParamsModel {
  iControl: any;
  iIcon?: string;
  iText?: string;
  dataSource?: Array<any>;
  isDisabled?: boolean;
  [key: string]: any;
}
export class CDyanamicValidation {
  static required(field: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value
        ? null
        : {
            required: {
              message: 'Trường này là bắt buộc',
              key: 'required',
            },
          };
    };
  }
}
