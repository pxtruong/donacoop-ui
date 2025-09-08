import { FormGroup } from '@angular/forms';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { FIELD_CHUC_VU_CONSTANT } from './field-chuc-vu.constant';

export function GET_ADD_NEW_CONFIG_CHUC_VU(record: any, formGroup: FormGroup) {
  return [
    {
      fieldName: FIELD_CHUC_VU_CONSTANT.TEN_CHUC_VU,
      iComponent: SharedInputComponent,
      label: 'Tên Chức Vụ',
      iParams: {},
      className: 'col-12',
    },
  ];
}
