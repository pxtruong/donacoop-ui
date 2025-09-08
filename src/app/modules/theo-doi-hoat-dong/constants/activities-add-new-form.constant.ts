import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { TRUCK_FIELD_CONSTANT } from '../../master-data/constants/trucks-field.constant';
import { FIELD_THEO_DOI_HOAT_DONG_CONSTANTS } from './activities-field.constant';

export function GET_ADD_NEW_ACTIVITIES() {
  const truckList = StoreDataService.getValue(StoreDataKeys.TRUCK_LIST);
  const truckOptions = truckList.map((i: any) => {
    return {
      label: `${i[TRUCK_FIELD_CONSTANT.BIEN_SO_XE]} - ${
        i[TRUCK_FIELD_CONSTANT.MA_SO_XE]
      } - ${i[TRUCK_FIELD_CONSTANT.LOAI_XE]} - ${
        i[TRUCK_FIELD_CONSTANT.GROUP]
      } - ${
        i[TRUCK_FIELD_CONSTANT.CAN_XAC]
          ? i[TRUCK_FIELD_CONSTANT.CAN_XAC]
          : 'empty'
      } - ${i[TRUCK_FIELD_CONSTANT.VI_TRI_CAN]}`,
      value: i.id,
    };
  });
  return [
    {
      fieldName: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.BIEN_SO_XE,
      iComponent: SharedSelect,
      label: 'Chọn Xe Tải',
      iParams: {
        dataSource: truckOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
  ];
}
