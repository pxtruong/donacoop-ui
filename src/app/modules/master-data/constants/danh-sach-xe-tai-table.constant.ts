import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { FIELD_XE_TAI_CONSTANT } from './field-danh-sach-xe-tai.constant';

export function GET_TABLE_CONFIG_XE_TAI(): ITableConfig {
  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  return {
    columns: [
      {
        field: FIELD_XE_TAI_CONSTANT.BIEN_SO_XE,
        columnTitle: 'Biển Số Xe',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.MA_SO_XE,
        columnTitle: 'Mã Số Xe',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.LOAI_XE,
        columnTitle: 'Loại Xe',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.GROUP,
        columnTitle: 'Group',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.CAN_XAC,
        columnTitle: 'Cân Xác',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.TAI_TRONG_CHO_PHEP,
        columnTitle: 'Tải Trọng Cho Phép',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.THUOC_CONG_TY,
        columnTitle: 'Thuộc Công Ty',
        pipeValue: customBindingCompany,
      },
      {
        field: FIELD_XE_TAI_CONSTANT.TAI_XE,
        columnTitle: 'Tài Xế',
      },
      {
        field: FIELD_XE_TAI_CONSTANT.MO_TA,
        columnTitle: 'Mô Tả',
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
      FIELD_XE_TAI_CONSTANT.BIEN_SO_XE,
      FIELD_XE_TAI_CONSTANT.MA_SO_XE,
      FIELD_XE_TAI_CONSTANT.LOAI_XE,
      FIELD_XE_TAI_CONSTANT.GROUP,
      FIELD_XE_TAI_CONSTANT.CAN_XAC,
      FIELD_XE_TAI_CONSTANT.VI_TRI_CAN,
      FIELD_XE_TAI_CONSTANT.TAI_TRONG_CHO_PHEP,
      FIELD_XE_TAI_CONSTANT.THUOC_CONG_TY,
      FIELD_XE_TAI_CONSTANT.TAI_XE,
      FIELD_XE_TAI_CONSTANT.MO_TA,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
