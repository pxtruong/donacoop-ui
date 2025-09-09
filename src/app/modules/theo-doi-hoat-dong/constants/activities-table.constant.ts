import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { CustomDatePipe } from '../../../shared/pipes/date.pipe';
import { REGISTRATIONS_FIELD } from '../../registrations/constants/registrations-field.constant';
import { ACTIVITIES_FIELD } from './activities-field.constant';
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

  const customBindingWarehouses = new CustomBindingPipe();
  customBindingWarehouses.customFunction = (value: any, args: any) => {
    return args[1]?.destinationWarehouse?.name;
  };

  const customBindingweightOfGoods = new CustomBindingPipe();
  customBindingweightOfGoods.customFunction = (value: any, args: any) => {
    if (!args[1]?.weight2 || args[1]?.weight1) {
      return '';
    }
    return args[1]?.weight2 - args[1]?.weight1;
  };
  return {
    columns: [
      {
        field: ACTIVITIES_FIELD.REGISTRATION_ID,
        columnTitle: 'Biển Số Xe',
        minWidth: 120,
        pipeValue: customBindingTruckLicensePlate,
        sticky: true,
      },
      {
        field: ACTIVITIES_FIELD.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
        minWidth: 120,
        pipeValue: customBindingWeighingPosition,
      },
      {
        field: ACTIVITIES_FIELD.LOAI_DA,
        columnTitle: 'Loại Đá',
        minWidth: 120,
        pipeValue: customBindingStoneType,
      },
      {
        field: ACTIVITIES_FIELD.VI_TRI_LAY_DA,
        columnTitle: 'Vị Trí Lấy Đá',
        minWidth: 120,
        pipeValue: customBindingPickupPosition,
      },
      {
        field: ACTIVITIES_FIELD.DOANH_THU,
        columnTitle: 'Doanh Thu',
        minWidth: 120,
      },
      {
        field: REGISTRATIONS_FIELD.TO_KHO,
        columnTitle: 'Đến Kho',
        pipeValue: customBindingWarehouses,
      },
      {
        field: ACTIVITIES_FIELD.CONG_TY_MUA,
        columnTitle: 'Công Ty Mua',
        minWidth: 120,
        pipeValue: customBindingBuyerCompany,
      },
      {
        field: ACTIVITIES_FIELD.THOI_GIAN_VAO_CONG,
        columnTitle: 'Thời Gian Vào Cổng',
        minWidth: 160,
        pipeValue: datePipe,
      },
      {
        field: ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_1,
        columnTitle: 'Thời Gian Cân Lần 1',
        minWidth: 160,
        pipeValue: timePipe,
      },
      {
        field: ACTIVITIES_FIELD.VI_TRI_CAN_LAN_1,
        columnTitle: 'Vị Trí Cân Lần 1',
        minWidth: 160,
      },
      {
        field: ACTIVITIES_FIELD.KHOI_LUONG1,
        columnTitle: 'Khối Lượng 1',
        minWidth: 120,
      },
      {
        field: ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_2,
        columnTitle: 'Thời Gian Cân Lần 2',
        minWidth: 160,
        pipeValue: timePipe,
      },
      {
        field: ACTIVITIES_FIELD.VI_TRI_CAN_LAN_2,
        columnTitle: 'Vị Trí Cân Lần 2',
        minWidth: 160,
      },
      {
        field: ACTIVITIES_FIELD.KHOI_LUONG2,
        columnTitle: 'Khối Lượng 2',
        minWidth: 120,
      },
      {
        field: ACTIVITIES_FIELD.THOI_GIAN_RA_CONG,
        columnTitle: 'Thời Gian Ra Cổng',
        minWidth: 160,
        pipeValue: datePipe,
      },
      {
        field: ACTIVITIES_FIELD.TRONG_LUONG_HANG,
        columnTitle: 'Trọng Lượng Hàng',
        minWidth: 160,
      },
    ],
    dataSource: [{}],
    displayedColumns: [
      ACTIVITIES_FIELD.REGISTRATION_ID,
      ACTIVITIES_FIELD.VI_TRI_CAN,
      ACTIVITIES_FIELD.LOAI_DA,
      ACTIVITIES_FIELD.VI_TRI_LAY_DA,
      ACTIVITIES_FIELD.DOANH_THU,
      REGISTRATIONS_FIELD.TO_KHO,
      ACTIVITIES_FIELD.CONG_TY_MUA,
      ACTIVITIES_FIELD.THOI_GIAN_VAO_CONG,
      ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_1,
      ACTIVITIES_FIELD.VI_TRI_CAN_LAN_1,
      ACTIVITIES_FIELD.KHOI_LUONG1,
      ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_2,
      ACTIVITIES_FIELD.VI_TRI_CAN_LAN_2,
      ACTIVITIES_FIELD.KHOI_LUONG2,
      ACTIVITIES_FIELD.TRONG_LUONG_HANG,
      ACTIVITIES_FIELD.THOI_GIAN_RA_CONG,
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
