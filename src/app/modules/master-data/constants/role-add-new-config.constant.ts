import { FormGroup } from '@angular/forms';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { ROLE_FIELD_CONSTANT } from './role-field.constant';

export function GET_ADD_NEW_CONFIG_CHUC_VU(record: any, formGroup: FormGroup) {
  return [
    {
      fieldName: ROLE_FIELD_CONSTANT.TEN_CHUC_VU,
      iComponent: SharedInputComponent,
      label: 'Tên Chức Vụ',
      iParams: {},
      className: 'col-12',
    },
  ];
}
