import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { FIELD_XE_CO_GIOI_CONSTANT } from './field-xe-co-gioi.constant';

export function GET_ADD_NEW_MACHINERIES() {
  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  const companyOptions = companyList.map((i: any) => {
    return { label: i.name, value: i.id };
  });
  const userList = StoreDataService.getValue(StoreDataKeys.USER_LIST);
  let userOptions: any[] = [];
  if (Array.isArray(userList)) {
    userList.forEach((i) => {
      userOptions.push({
        label: i.fullName,
        value: i.id,
      });
    });
  }
  return [
    {
      fieldName: FIELD_XE_CO_GIOI_CONSTANT.TEN_XE,
      iComponent: SharedInputComponent,
      label: 'Tên Xe',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: FIELD_XE_CO_GIOI_CONSTANT.TAI_XE,
      iComponent: SharedSelect,
      label: 'Tài Xế',
      iParams: {
        dataSource: userOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: FIELD_XE_CO_GIOI_CONSTANT.TEN_CONG_TY,
      iComponent: SharedSelect,
      label: 'Tên Công Ty',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: FIELD_XE_CO_GIOI_CONSTANT.TAI_KHOAN,
      iComponent: SharedInputComponent,
      label: 'Tài Khoản',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: FIELD_XE_CO_GIOI_CONSTANT.MAT_KHAU,
      iComponent: SharedInputComponent,
      label: 'Mật Khẩu',
      iParams: {},
      className: 'col-12',
    },
  ];
}
