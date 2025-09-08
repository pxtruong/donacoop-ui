import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { CustomDatePipe } from '../../../shared/pipes/date.pipe';
import { COMMON_FIELD } from '../../base/donacoop-base.component/constants/donacoop-base.constant';
import { FIELD_THEO_DOI_HOAT_DONG_CONSTANTS } from './activities-field.constant';
export function GET_TABLE_CONFIG_ACTIVITIES(): ITableConfig {
  const customBindingTruckLicensePlate = new CustomBindingPipe();
  customBindingTruckLicensePlate.customFunction = (value: any, args: any) => {
    return args[1]?.truck?.licensePlate;
  };

  const customBindingStoneType = new CustomBindingPipe();
  customBindingStoneType.customFunction = (value: any, args: any) => {
    return args[1]?.stoneType?.name;
  };

  const customBindingWeighingPosition = new CustomBindingPipe();
  customBindingWeighingPosition.customFunction = (value: any, args: any) => {
    return args[1]?.truck?.weighingPosition;
  };

  const customBindingPickupPosition = new CustomBindingPipe();
  customBindingPickupPosition.customFunction = (value: any, args: any) => {
    return args[1]?.pickupPosition?.name;
  };

  const customBindingBuyerCompany = new CustomBindingPipe();
  customBindingBuyerCompany.customFunction = (value: any, args: any) => {
    return args[1]?.buyerCompany?.name;
  };
  const datePipe = new CustomDatePipe();
  datePipe.formatDate = 'dd-MM-yyyy HH:mm';
  const timePipe = new CustomDatePipe();
  timePipe.formatDate = 'HH:mm';
  // buyerCompany
  return {
    columns: [
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID,
        columnTitle: 'Biển Số Xe',
        minWidth: 120,
        pipeValue: customBindingTruckLicensePlate,
        sticky: true,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
        minWidth: 120,
        pipeValue: customBindingWeighingPosition,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.LOAI_DA,
        columnTitle: 'Loại Đá',
        minWidth: 120,
        pipeValue: customBindingStoneType,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.VI_TRI_LAY_DA,
        columnTitle: 'Vị Trí Lấy Đá',
        minWidth: 120,
        pipeValue: customBindingPickupPosition,
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
        pipeValue: customBindingBuyerCompany,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_VAO_CONG,
        columnTitle: 'Thời Gian Vào Cổng',
        minWidth: 160,
        pipeValue: datePipe,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.THOI_GIAN_CAN_LAN_1,
        columnTitle: 'Thời Gian Cân Lần 1',
        minWidth: 160,
        pipeValue: timePipe,
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
        pipeValue: timePipe,
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
        pipeValue: datePipe,
      },
      {
        field: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.TRONG_LUONG_HANG,
        columnTitle: 'Trọng Lượng Hàng',
        minWidth: 160,
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
    displayedColumns: [
      FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.REGISTRATION_ID,
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
      COMMON_FIELD.ACTION,
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
