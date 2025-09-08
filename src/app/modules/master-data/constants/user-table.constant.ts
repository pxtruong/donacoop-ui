import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { USER_FIELD_CONSTANT } from './user-field.constant';

export function GET_TABLE_NHAN_SU(): ITableConfig {
  const customBinding = new CustomBindingPipe();
  customBinding.customFunction = (value: any, column: any, element: any) => {
    if (!Array.isArray(value)) {
      return '';
    }
    let showRole = '';
    value.forEach((i) => {
      showRole += `${i.name} `;
    });

    return showRole;
  };

  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  return {
    columns: [
      {
        field: USER_FIELD_CONSTANT.TEN_NHAN_VIEN,
        columnTitle: 'Tên Nhân Viên',
      },
      {
        field: USER_FIELD_CONSTANT.CHUC_VU,
        columnTitle: 'Chức Vụ',
        pipeValue: customBinding,
      },
      {
        field: USER_FIELD_CONSTANT.CONG_VIEC_HIEN_TAI,
        columnTitle: 'Công Việc Hiện Tại',
      },
      {
        field: USER_FIELD_CONSTANT.THUOC_CONG_TY,
        columnTitle: 'Thuộc Công Ty',
        pipeValue: customBindingCompany,
      },
      {
        field: USER_FIELD_CONSTANT.EMAIL_CA_NHAN,
        columnTitle: 'Email Cá Nhân',
      },
      {
        field: USER_FIELD_CONSTANT.DIEN_THOAI_CA_NHAN,
        columnTitle: 'Điện Thoại Cá Nhân',
      },
      {
        field: USER_FIELD_CONSTANT.DIA_CHI_NHA_RIENG,
        columnTitle: 'Địa Chỉ Nhà Riêng',
      },
      {
        field: USER_FIELD_CONSTANT.THANH_PHO,
        columnTitle: 'Thành Phố',
      },
      {
        field: 'actioncolumn',
        columnTitle: 'Action',
        stickyEnd: true,
        showComponent: SharedAction,
        params: {
          actionList: [
            {
              iIcon: 'edit',
              iCustomClass: 'border-none',
              iColorIcon: 'primary',
            },
            {
              iIcon: 'delete',
              iCustomClass: 'border-none',
              iColorIcon: 'warn',
            },
          ],
        },
      },
    ],
    dataSource: [],
    displayedColumns: [
      USER_FIELD_CONSTANT.TEN_NHAN_VIEN,
      USER_FIELD_CONSTANT.CHUC_VU,
      USER_FIELD_CONSTANT.CONG_VIEC_HIEN_TAI,
      USER_FIELD_CONSTANT.THUOC_CONG_TY,
      USER_FIELD_CONSTANT.EMAIL_CA_NHAN,
      USER_FIELD_CONSTANT.DIEN_THOAI_CA_NHAN,
      USER_FIELD_CONSTANT.DIA_CHI_NHA_RIENG,
      USER_FIELD_CONSTANT.THANH_PHO,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
