import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { MACHINERIES_FIELD_CONSTANT } from './machineries-field.constant';

export function GET_TABLE_CONFIG_MACHINERIES(): ITableConfig {
  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  return {
    columns: [
      {
        field: MACHINERIES_FIELD_CONSTANT.TEN_XE,
        columnTitle: 'Tên Xe',
      },
      {
        field: MACHINERIES_FIELD_CONSTANT.TEN_CONG_TY,
        columnTitle: 'Tên Công Ty',
        pipeValue: customBindingCompany,
      },
      {
        field: MACHINERIES_FIELD_CONSTANT.TAI_KHOAN,
        columnTitle: 'Tài Khoản',
      },
      {
        field: MACHINERIES_FIELD_CONSTANT.MAT_KHAU,
        columnTitle: 'Mật Khẩu',
      },
      {
        field: MACHINERIES_FIELD_CONSTANT.TAI_XE,
        columnTitle: 'Tài Xế',
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
    displayedColumns: [
      MACHINERIES_FIELD_CONSTANT.TEN_XE,
      MACHINERIES_FIELD_CONSTANT.TEN_CONG_TY,
      MACHINERIES_FIELD_CONSTANT.TAI_KHOAN,
      MACHINERIES_FIELD_CONSTANT.MAT_KHAU,
      MACHINERIES_FIELD_CONSTANT.TAI_XE,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
