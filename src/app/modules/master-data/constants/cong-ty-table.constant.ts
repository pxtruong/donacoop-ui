import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { FIELD_CONG_TY_CONSTANT } from './field-cong-ty.constant';

export const tableConfigCongTy: ITableConfig = {
  columns: [
    {
      field: FIELD_CONG_TY_CONSTANT.TEN_CONG_TY,
      columnTitle: 'Tên Công Ty',
      sticky: true,
    },
    {
      field: FIELD_CONG_TY_CONSTANT.DIA_CHI,
      columnTitle: 'Địa Chỉ',
    },
    {
      field: FIELD_CONG_TY_CONSTANT.DIA_DIEM_GIAO_HANG,
      columnTitle: 'Địa Điểm Giao Hàng',
      minWidth: 160,
    },
    {
      field: FIELD_CONG_TY_CONSTANT.THONG_TIN_DIEM_GIAO_HANG,
      columnTitle: 'Thông Tin Điểm Giao Hàng',
      minWidth: 160,
    },
    {
      field: FIELD_CONG_TY_CONSTANT.QUANG_DUONG,
      columnTitle: 'Quãng Đường',
    },
    {
      field: FIELD_CONG_TY_CONSTANT.SO_DIEN_THOAI_CO_QUAN,
      columnTitle: 'Số Điện Thoại Cơ Quan',
      minWidth: 160,
    },
    {
      field: FIELD_CONG_TY_CONSTANT.THANH_PHO,
      columnTitle: 'Thành Phố',
    },
    {
      field: FIELD_CONG_TY_CONSTANT.EMAIL_CO_QUAN,
      columnTitle: 'Email Cơ Quan',
    },
    {
      field: FIELD_CONG_TY_CONSTANT.MA_BUU_CHINH,
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
    FIELD_CONG_TY_CONSTANT.TEN_CONG_TY,
    FIELD_CONG_TY_CONSTANT.DIA_CHI,
    FIELD_CONG_TY_CONSTANT.DIA_DIEM_GIAO_HANG,
    FIELD_CONG_TY_CONSTANT.THONG_TIN_DIEM_GIAO_HANG,
    FIELD_CONG_TY_CONSTANT.QUANG_DUONG,
    FIELD_CONG_TY_CONSTANT.SO_DIEN_THOAI_CO_QUAN,
    FIELD_CONG_TY_CONSTANT.THANH_PHO,
    FIELD_CONG_TY_CONSTANT.EMAIL_CO_QUAN,
    FIELD_CONG_TY_CONSTANT.MA_BUU_CHINH,
    'actioncolumn',
  ],
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  length: 0,
  isLoading: false,
};
