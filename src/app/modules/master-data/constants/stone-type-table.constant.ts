import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { STONE_TYPE_FIELD_CONSTANT } from './stone-type-field.constant';

export const tableConfigLoaiDa: ITableConfig = {
  columns: [
    {
      field: STONE_TYPE_FIELD_CONSTANT.TEN_LOAI_DA,
      columnTitle: 'Tên Loại Đá',
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
  dataSource: [{}],
  displayedColumns: [STONE_TYPE_FIELD_CONSTANT.TEN_LOAI_DA, 'actioncolumn'],
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
  length: 0,
  isLoading: false,
};
