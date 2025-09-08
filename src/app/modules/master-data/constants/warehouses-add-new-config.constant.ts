import { FormGroup } from '@angular/forms';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { WAREHOUSES_FIELD_CONSTANT } from './warehouses-field.constant';

export function GET_ADD_NEW_CONFIG_WAREHOUSES() {
  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  const companyOptions = companyList.map((i: any) => {
    return { label: i.name, value: i.id };
  });
  return [
    {
      fieldName: WAREHOUSES_FIELD_CONSTANT.TEN_KHO,
      iComponent: SharedInputComponent,
      label: 'Tên Kho',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: WAREHOUSES_FIELD_CONSTANT.COMPANY,
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
  const stoneTypeOptions: any[] = [];
  if (Array.isArray(stoneTypeList)) {
    stoneTypeList.forEach((i) => {
      stoneTypeOptions.push({
        label: i.name,
        value: i.id,
      });
    });
  }
  return [
    {
      fieldName: WAREHOUSES_FIELD_CONSTANT.LOAI_DA,
      iComponent: SharedSelect,
      label: 'Loại Đá',
      iParams: {
        dataSource: stoneTypeOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: WAREHOUSES_FIELD_CONSTANT.SO_LUONG,
      iComponent: SharedInputComponent,
      label: 'Số Lượng',
      iParams: {},
      className: 'col-12',
    },
  ];
}
