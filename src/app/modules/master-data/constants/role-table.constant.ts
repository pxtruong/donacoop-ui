import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { COMMON_FIELD } from '../../base/donacoop-base.component/constants/donacoop-base.constant';
import { ROLE_FIELD_CONSTANT } from './role-field.constant';

export function GET_TABLE_CONFIG_ROLE(): ITableConfig {
  return {
    columns: [
      {
        field: ROLE_FIELD_CONSTANT.TEN_CHUC_VU,
        columnTitle: 'Tên Chức Vụ',
      },
      {
        field: COMMON_FIELD.ACTION,
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
    displayedColumns: [ROLE_FIELD_CONSTANT.TEN_CHUC_VU, COMMON_FIELD.ACTION],
    isLoading: false,
  };
}
