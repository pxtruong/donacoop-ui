import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { COMPANY_FIELD_CONSTANT } from './company-field.constant';

export const tableConfigCongTy: ITableConfig = {
  columns: [
    {
      field: COMPANY_FIELD_CONSTANT.TEN_CONG_TY,
      columnTitle: 'Tên Công Ty',
      sticky: true,
    },
    {
      field: COMPANY_FIELD_CONSTANT.DIA_CHI,
      columnTitle: 'Địa Chỉ',
    },
    {
      field: COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG,
      columnTitle: 'Địa Điểm Giao Hàng',
      minWidth: 160,
    },
    {
      field: COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG,
      columnTitle: 'Thông Tin Điểm Giao Hàng',
      minWidth: 160,
    },
    {
      field: COMPANY_FIELD_CONSTANT.QUANG_DUONG,
      columnTitle: 'Quãng Đường',
    },
    {
      field: COMPANY_FIELD_CONSTANT.SO_DIEN_THOAI_CO_QUAN,
      columnTitle: 'Số Điện Thoại Cơ Quan',
      minWidth: 160,
    },
    {
      field: COMPANY_FIELD_CONSTANT.THANH_PHO,
      columnTitle: 'Thành Phố',
    },
    {
      field: COMPANY_FIELD_CONSTANT.EMAIL_CO_QUAN,
      columnTitle: 'Email Cơ Quan',
    },
    {
      field: COMPANY_FIELD_CONSTANT.MA_BUU_CHINH,
      columnTitle: 'Mã Bưu Chính',
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
            iIcon: 'add_circle_outline',
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
    COMPANY_FIELD_CONSTANT.TEN_CONG_TY,
    COMPANY_FIELD_CONSTANT.DIA_CHI,
    COMPANY_FIELD_CONSTANT.DIA_DIEM_GIAO_HANG,
    COMPANY_FIELD_CONSTANT.THONG_TIN_DIEM_GIAO_HANG,
    COMPANY_FIELD_CONSTANT.QUANG_DUONG,
    COMPANY_FIELD_CONSTANT.SO_DIEN_THOAI_CO_QUAN,
    COMPANY_FIELD_CONSTANT.THANH_PHO,
    COMPANY_FIELD_CONSTANT.EMAIL_CO_QUAN,
    COMPANY_FIELD_CONSTANT.MA_BUU_CHINH,
    'actioncolumn',
  ],
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  length: 0,
  isLoading: false,
};
