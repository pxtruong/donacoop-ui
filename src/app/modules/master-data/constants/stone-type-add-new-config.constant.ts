import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { STONE_TYPE_FIELD_CONSTANT } from './stone-type-field.constant';

export const CONFIG_ADD_LOAI_DA = [
  {
    fieldName: STONE_TYPE_FIELD_CONSTANT.TEN_LOAI_DA,
    iComponent: SharedInputComponent,
    label: 'Tên Loại Đá',
    iParams: {},
    className: 'col-12',
  },
];
