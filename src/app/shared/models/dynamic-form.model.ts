import { Type } from '@angular/core';
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
}

export interface IDynamicFormParamsModel {
  iControl: any;
  iIcon?: string;
  iText?: string;
  dataSource?: Array<any>;
  valueFn?: any;
  isDisabled?: boolean;
  [key: string]: any;
}
