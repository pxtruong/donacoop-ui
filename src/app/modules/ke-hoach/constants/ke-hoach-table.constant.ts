import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { FIELD_KE_HOACH } from './field-ke-hoach.constant';

export function GET_TABLE_CONFIG_PLANT(): ITableConfig {
  const customBindingTruckLicensePlate = new CustomBindingPipe();
  customBindingTruckLicensePlate.customFunction = (value: any, args: any) => {
    return args[1]?.truck?.licensePlate;
  };

  const customBindingTruckCode = new CustomBindingPipe();
  customBindingTruckCode.customFunction = (value: any, args: any) => {
    return args[1]?.truck?.code;
  };

  const customBindingStoneType = new CustomBindingPipe();
  customBindingStoneType.customFunction = (value: any, args: any) => {
    return args[1]?.stoneType?.name;
  };

  return {
    columns: [
      {
        field: FIELD_KE_HOACH.BIEN_SO_XE,
        columnTitle: 'Biển Số Xe',
        pipeValue: customBindingTruckLicensePlate,
      },
      {
        field: FIELD_KE_HOACH.LOAI_DA,
        columnTitle: 'Loại Đá',
        pipeValue: customBindingStoneType,
      },
      {
        field: FIELD_KE_HOACH.MA_SO_XE,
        columnTitle: 'Mã Số Xe',
        pipeValue: customBindingTruckCode,
      },
    ],
    dataSource: [],
    displayedColumns: [
      FIELD_KE_HOACH.BIEN_SO_XE,
      FIELD_KE_HOACH.LOAI_DA,
      FIELD_KE_HOACH.MA_SO_XE,
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
