import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { ROLES_CONSTANT } from '../../base/donacoop-base.component/constants/roles.constant';
import { MACHINERIES_FIELD_CONSTANT } from './machineries-field.constant';

export function GET_ADD_NEW_MACHINERIES() {
  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  const companyOptions = companyList.map((i: any) => {
    return { label: i.name, value: i.id };
  });
  const userList = StoreDataService.getValue(StoreDataKeys.USER_LIST);
  let userOptions: any[] = [];
  if (Array.isArray(userList)) {
    userList
      .filter((item) => {
        const roles = item.roles;
        return (
          roles.findIndex((i: { key: string; id: number; name: string }) => {
            return i.key === ROLES_CONSTANT.DRIVER;
          }) !== -1
        );
      })
      .forEach((i) => {
        userOptions.push({
          label: i.fullName,
          value: i.id,
        });
      });
  }
  return [
    {
      fieldName: MACHINERIES_FIELD_CONSTANT.TEN_XE,
      iComponent: SharedInputComponent,
      label: 'Tên Xe',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: MACHINERIES_FIELD_CONSTANT.TAI_XE,
      iComponent: SharedSelect,
      label: 'Tài Xế',
      iParams: {
        dataSource: userOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: MACHINERIES_FIELD_CONSTANT.TEN_CONG_TY,
      iComponent: SharedSelect,
      label: 'Tên Công Ty',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: MACHINERIES_FIELD_CONSTANT.TAI_KHOAN,
      iComponent: SharedInputComponent,
      label: 'Tài Khoản',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: MACHINERIES_FIELD_CONSTANT.MAT_KHAU,
      iComponent: SharedInputComponent,
      label: 'Mật Khẩu',
      iParams: {},
      className: 'col-12',
    },
  ];
}
