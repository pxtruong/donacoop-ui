import { ITableConfig } from '../../../shared/models/table.model';
import { FIELD_THEO_DOI_HOAT_DONG_CONSTANTS } from './field-theo-doi-hoat-dong.constant';
export const tableConfigTheoDoiKeHoach: ITableConfig = {
  columns: [
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.BIEN_SO_XE,
      columnTitle: 'Biển Số Xe',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN,
      columnTitle: 'Vị Trí Cân',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.LOAI_DA,
      columnTitle: 'Loại Đá',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_LAY_DA,
      columnTitle: 'Vị Trí Lấy Đá',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.DOANH_THU,
      columnTitle: 'Doanh Thu',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.CONG_TY_MUA,
      columnTitle: 'Công Ty Mua',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG,
      columnTitle: 'Thời Gian Vào Cổng',
      minWidth: 160,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1,
      columnTitle: 'Thời Gian Cân Lần 1',
      minWidth: 160,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_1,
      columnTitle: 'Vị Trí Cân Lần 1',
      minWidth: 160,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG1,
      columnTitle: 'Khối Lượng 1',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2,
      columnTitle: 'Thời Gian Cân Lần 2',
      minWidth: 160,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_2,
      columnTitle: 'Vị Trí Cân Lần 2',
      minWidth: 160,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG2,
      columnTitle: 'Khối Lượng 2',
      minWidth: 120,
    },
    {
      field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG,
      columnTitle: 'Thời Gian Ra Cổng',
      minWidth: 160,
    },
  ],
  dataSource: [{}],
  displayedColumns: [
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.BIEN_SO_XE,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.LOAI_DA,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_LAY_DA,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.DOANH_THU,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.CONG_TY_MUA,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_1,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG1,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_2,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN_LAN_2,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.KHOI_LUONG2,
    FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_RA_CONG,
  ],
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  length: 0,
  isLoading: false,
};
