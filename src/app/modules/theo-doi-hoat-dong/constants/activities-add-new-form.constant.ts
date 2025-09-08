import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { FIELD_THEO_DOI_HOAT_DONG_CONSTANTS } from './activities-field.constant';

export function GET_ADD_NEW_ACTIVITIES() {
  const registrationsList = StoreDataService.getValue(
    StoreDataKeys.REGISTRATIONS
  );
  const registrationOptions: any[] = [];
  if (Array.isArray(registrationsList)) {
    registrationsList.forEach((i) => {
      registrationOptions.push({
        label: i.name,
        value: i.id,
      });
    });
  }

  return [
    {
      fieldName: FIELD_THEO_DOI_HOAT_DONG_CONSTANTS.TRUCK_ID,
      iComponent: SharedSelect,
      label: 'Chọn Chuyến Xe',
      iParams: {
        dataSource: registrationOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
  ];
}
