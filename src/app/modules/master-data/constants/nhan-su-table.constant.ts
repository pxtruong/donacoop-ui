import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { FIELD_NHAN_SU_CONSTANT } from './field-nhan-su.constant';

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
        field: FIELD_NHAN_SU_CONSTANT.TEN_NHAN_VIEN,
        columnTitle: 'Tên Nhân Viên',
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.CHUC_VU,
        columnTitle: 'Chức Vụ',
        pipeValue: customBinding,
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.CONG_VIEC_HIEN_TAI,
        columnTitle: 'Công Việc Hiện Tại',
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.THUOC_CONG_TY,
        columnTitle: 'Thuộc Công Ty',
        pipeValue: customBindingCompany,
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.EMAIL_CA_NHAN,
        columnTitle: 'Email Cá Nhân',
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.DIEN_THOAI_CA_NHAN,
        columnTitle: 'Điện Thoại Cá Nhân',
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.DIA_CHI_NHA_RIENG,
        columnTitle: 'Địa Chỉ Nhà Riêng',
      },
      {
        field: FIELD_NHAN_SU_CONSTANT.THANH_PHO,
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
      FIELD_NHAN_SU_CONSTANT.TEN_NHAN_VIEN,
      FIELD_NHAN_SU_CONSTANT.CHUC_VU,
      FIELD_NHAN_SU_CONSTANT.CONG_VIEC_HIEN_TAI,
      FIELD_NHAN_SU_CONSTANT.THUOC_CONG_TY,
      FIELD_NHAN_SU_CONSTANT.EMAIL_CA_NHAN,
      FIELD_NHAN_SU_CONSTANT.DIEN_THOAI_CA_NHAN,
      FIELD_NHAN_SU_CONSTANT.DIA_CHI_NHA_RIENG,
      FIELD_NHAN_SU_CONSTANT.THANH_PHO,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
