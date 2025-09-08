import { FormGroup } from '@angular/forms';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { FIELD_KHO_CONSTANT } from './field-kho.constant';

export function GET_ADD_NEW_CONFIG_WAREHOUSES() {
  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  const companyOptions = companyList.map((i: any) => {
    return { label: i.name, value: i.id };
  });
  return [
    {
      fieldName: FIELD_KHO_CONSTANT.TEN_KHO,
      iComponent: SharedInputComponent,
      label: 'Tên Kho',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: FIELD_KHO_CONSTANT.COMPANY,
      iComponent: SharedSelect,
      label: 'Địa Chỉ',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
  ];
}

export function GET_ADD_NEW_LOAI_DA_VAO_KHO(record: any, formGroup: FormGroup) {
  const stoneTypeList = StoreDataService.getValue(StoreDataKeys.STONE_TYPE);
  return [
    {
      fieldName: FIELD_KHO_CONSTANT.LOAI_DA,
      iComponent: SharedSelect,
      label: 'Loại Đá',
      iParams: {
        dataSource: stoneTypeList,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: FIELD_KHO_CONSTANT.SO_LUONG,
      iComponent: SharedInputComponent,
      label: 'Số Lượng',
      iParams: {},
      className: 'col-12',
    },
  ];
}
