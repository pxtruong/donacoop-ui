import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { TRUCK_FIELD_CONSTANT } from './trucks-field.constant';
import { WEIGHT_METHOD_OPTIONS } from './truck.constant';
import { ROLES_CONSTANT } from '../../base/donacoop-base.component/constants/roles.constant';

export function GET_CONFIG_ADD_NEW_XE_TAI() {
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
      fieldName: TRUCK_FIELD_CONSTANT.BIEN_SO_XE,
      iComponent: SharedInputComponent,
      label: 'Biển Số Xe',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.MA_SO_XE,
      iComponent: SharedInputComponent,
      label: 'Mã Số Xe',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.LOAI_XE,
      iComponent: SharedInputComponent,
      label: 'Loại Xe',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.GROUP,
      iComponent: SharedInputComponent,
      label: 'Nhóm',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.CAN_XAC,
      iComponent: SharedSelect,
      label: 'Cân Xác',
      iParams: {
        dataSource: WEIGHT_METHOD_OPTIONS,
        applyFieldValue: 'value',
      },
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.VI_TRI_CAN,
      iComponent: SharedInputComponent,
      label: 'Vị Trí Cân',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.TAI_TRONG_CHO_PHEP,
      iComponent: SharedInputComponent,
      label: 'Tải Trọng Cho Phép',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.TAI_XE,
      iComponent: SharedSelect,
      label: 'Tài Xế',
      iParams: {
        dataSource: userOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.THUOC_CONG_TY,
      iComponent: SharedSelect,
      label: 'Thuộc Công Ty',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: TRUCK_FIELD_CONSTANT.MO_TA,
      iComponent: SharedInputComponent,
      label: 'Mô Tả',
      iParams: {},
      className: 'col-12',
    },
  ];
}
