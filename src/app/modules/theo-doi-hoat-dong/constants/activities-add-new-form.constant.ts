import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedDatePicker } from '../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { SharedTimePicker } from '../../../shared/components/shared-time-picker/shared-time-picker';
import { TRUCK_FIELD_CONSTANT } from '../../master-data/constants/trucks-field.constant';
import { ACTIVITIES_FIELD } from './activities-field.constant';

export function GET_ADD_NEW_ACTIVITIES() {
  const registrationsList = StoreDataService.getValue(
    StoreDataKeys.REGISTRATIONS
  );
  const registrationOptions: any[] = [];
  if (Array.isArray(registrationsList)) {
    registrationsList.forEach((i) => {
      registrationOptions.push({
        label: `${i.truck[TRUCK_FIELD_CONSTANT.BIEN_SO_XE]}-${
          i.truck[TRUCK_FIELD_CONSTANT.LOAI_XE]
        }`,
        // registrationId - buyerCompanyId - pickupPositionId - stoneTypeId - truckId - revenueType
        value: `${i.id}-${i.buyerCompany.id}-${i.pickupPosition.id}-${i.stoneType.id}-${i.truck.id}-${i.revenueType}`,
      });
    });
  }

  return [
    {
      fieldName: ACTIVITIES_FIELD.REGISTRATION_ID,
      iComponent: SharedSelect,
      label: 'Chọn Chuyến Xe',
      iParams: {
        dataSource: registrationOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: ACTIVITIES_FIELD.THOI_GIAN_VAO_CONG,
      iComponent: SharedDatePicker,
      label: 'Ngày Vào Cổng',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: ACTIVITIES_FIELD.GIO_VAO_CONG,
      iComponent: SharedTimePicker,
      label: 'Giờ Vào Cổng',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_1,
      iComponent: SharedTimePicker,
      label: 'Thời Gian Cân Lần 1',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.VI_TRI_CAN_LAN_1,
      iComponent: SharedInputComponent,
      label: 'Vị Trí Cân Lần 1',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.KHOI_LUONG1,
      iComponent: SharedInputComponent,
      label: 'Khối lượng 1(KG)',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.THOI_GIAN_CAN_LAN_2,
      iComponent: SharedTimePicker,
      label: 'Thời Gian Cân Lần 2',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.VI_TRI_CAN_LAN_2,
      iComponent: SharedInputComponent,
      label: 'Vị Trí Cân Lần 2',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.KHOI_LUONG2,
      iComponent: SharedInputComponent,
      label: 'Khối lượng 2(KG)',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: ACTIVITIES_FIELD.THOI_GIAN_RA_CONG,
      iComponent: SharedDatePicker,
      label: 'Ngày Ra Cổng',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: ACTIVITIES_FIELD.GIO_RA_CONG,
      iComponent: SharedTimePicker,
      label: 'Thời Gian Ra Cổng',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: ACTIVITIES_FIELD.TRONG_LUONG_HANG,
      iComponent: SharedInputComponent,
      label: 'Trọng Lượng Hàng',
      iParams: {},
      className: 'col-12',
    },
  ];
}
