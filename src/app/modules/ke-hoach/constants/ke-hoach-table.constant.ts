import { ITableConfig } from '../../../shared/models/table.model';
import { FIELD_KE_HOACH } from './field-ke-hoach.constant';
export const tableConfigKeHoach: ITableConfig = {
  columns: [
    {
      field: FIELD_KE_HOACH.BIEN_SO_XE,
      columnTitle: 'Biển Số Xe',
    },
    {
      field: FIELD_KE_HOACH.LOAI_DA,
      columnTitle: 'Loại Đá',
    },
    {
      field: FIELD_KE_HOACH.NGAY,
      columnTitle: 'Ngày',
    },
    {
      field: FIELD_KE_HOACH.GIO,
      columnTitle: 'Giờ',
    },
    {
      field: FIELD_KE_HOACH.MA_SO_XE,
      columnTitle: 'Mã Số Xe',
    },
  ],
  dataSource: [],
  displayedColumns: [
    FIELD_KE_HOACH.BIEN_SO_XE,
    FIELD_KE_HOACH.LOAI_DA,
    FIELD_KE_HOACH.NGAY,
    FIELD_KE_HOACH.GIO,
    FIELD_KE_HOACH.MA_SO_XE,
  ],
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  length: 0,
  isLoading: false,
};
