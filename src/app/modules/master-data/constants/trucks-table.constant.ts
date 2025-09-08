import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { TRUCK_FIELD_CONSTANT } from './trucks-field.constant';

export function GET_TABLE_CONFIG_XE_TAI(): ITableConfig {
  const customBindingCompany = new CustomBindingPipe();
  customBindingCompany.customFunction = (value: any, args: any) => {
    return args[1]?.company?.name;
  };
  const customBindingDriver = new CustomBindingPipe();
  customBindingDriver.customFunction = (value: any, args: any) => {
    return args[1]?.driver?.fullName;
  };
  return {
    columns: [
      {
        field: TRUCK_FIELD_CONSTANT.BIEN_SO_XE,
        columnTitle: 'Biển Số Xe',
      },
      {
        field: TRUCK_FIELD_CONSTANT.MA_SO_XE,
        columnTitle: 'Mã Số Xe',
      },
      {
        field: TRUCK_FIELD_CONSTANT.LOAI_XE,
        columnTitle: 'Loại Xe',
      },
      {
        field: TRUCK_FIELD_CONSTANT.GROUP,
        columnTitle: 'Group',
      },
      {
        field: TRUCK_FIELD_CONSTANT.CAN_XAC,
        columnTitle: 'Cân Xác',
      },
      {
        field: TRUCK_FIELD_CONSTANT.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
      },
      {
        field: TRUCK_FIELD_CONSTANT.TAI_TRONG_CHO_PHEP,
        columnTitle: 'Tải Trọng Cho Phép',
      },
      {
        field: TRUCK_FIELD_CONSTANT.THUOC_CONG_TY,
        columnTitle: 'Thuộc Công Ty',
        pipeValue: customBindingCompany,
      },
      {
        field: TRUCK_FIELD_CONSTANT.TAI_XE,
        columnTitle: 'Tài Xế',
        pipeValue: customBindingDriver,
      },
      {
        field: TRUCK_FIELD_CONSTANT.MO_TA,
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
      TRUCK_FIELD_CONSTANT.BIEN_SO_XE,
      TRUCK_FIELD_CONSTANT.MA_SO_XE,
      TRUCK_FIELD_CONSTANT.LOAI_XE,
      TRUCK_FIELD_CONSTANT.GROUP,
      TRUCK_FIELD_CONSTANT.CAN_XAC,
      TRUCK_FIELD_CONSTANT.VI_TRI_CAN,
      TRUCK_FIELD_CONSTANT.TAI_TRONG_CHO_PHEP,
      TRUCK_FIELD_CONSTANT.THUOC_CONG_TY,
      TRUCK_FIELD_CONSTANT.TAI_XE,
      TRUCK_FIELD_CONSTANT.MO_TA,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
