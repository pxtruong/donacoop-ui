import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { FIELD_NHAN_SU_CONSTANT } from './field-nhan-su.constant';

export function GET_CONFIG_ADD_NEW_NHAN_SU() {
  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  const companyOptions = companyList.map((i: any) => {
    return { label: i.name, value: i.id };
  });
  const roleList = StoreDataService.getValue(StoreDataKeys.ROLE_LIST);
  let roleOption: any[] = [];
  if (Array.isArray(roleList)) {
    roleList.forEach((i) => {
      roleOption.push({ value: i.id, label: i.name });
    });
  }
  return [
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.TEN_NHAN_VIEN,
      iComponent: SharedInputComponent,
      label: 'Tên Nhân Viên',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.CHUC_VU,
      iComponent: SharedSelect,
      label: 'Chức Vụ',
      iParams: {
        dataSource: roleOption,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.CONG_VIEC_HIEN_TAI,
      iComponent: SharedInputComponent,
      label: 'Công Việc Hiện Tại',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.THUOC_CONG_TY,
      iComponent: SharedSelect,
      label: 'Thuộc Công Ty',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.EMAIL_CA_NHAN,
      iComponent: SharedInputComponent,
      label: 'Email Cá Nhân',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.DIEN_THOAI_CA_NHAN,
      iComponent: SharedInputComponent,
      label: 'Điện Thoại Cá Nhân',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.DIA_CHI_NHA_RIENG,
      iComponent: SharedInputComponent,
      label: 'Địa Chỉ Nhà Riêng',
      iParams: {},
      className: 'col-12',
    },
    {
      fieldName: FIELD_NHAN_SU_CONSTANT.THANH_PHO,
      iComponent: SharedInputComponent,
      label: 'Thành Phố',
      iParams: {},
      className: 'col-12',
    },
  ];
}
