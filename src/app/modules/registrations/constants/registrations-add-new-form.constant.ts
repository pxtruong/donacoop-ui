import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { SharedDatePicker } from '../../../shared/components/shared-date-picker/shared-date-picker';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { SharedSelect } from '../../../shared/components/shared-select/shared-select';
import { SharedTimePicker } from '../../../shared/components/shared-time-picker/shared-time-picker';
import { COMPANY_FIELD_CONSTANT } from '../../master-data/constants/company-field.constant';
import { TRUCK_FIELD_CONSTANT } from '../../master-data/constants/trucks-field.constant';
import {
  REVENUE_TYPE_OPTIONS,
  REVENUE_TYPE_VALUE,
} from './registrations-constant';
import { FIELD_DAN_SACH_XE_TAI_ADD_NEW } from './registrations-field.constant';

export function GET_ADD_NEW_DANG_KY_XE_TAI(record: any) {
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

  const machineries = StoreDataService.getValue(StoreDataKeys.MACHINERIES);
  let machineriesOptions: any[] = [];
  if (Array.isArray(machineries)) {
    machineriesOptions = machineries.map((i: { id: number; name: string }) => {
      return { label: i.name, value: i.id };
    });
  }

  const companyList = StoreDataService.getValue(StoreDataKeys.COMPANY_LIST);
  let companyOptions: any[] = [];
  if (Array.isArray(companyList)) {
    companyList.forEach((i: any) => {
      if (Array.isArray(i.deliveryPoints)) {
        i.deliveryPoints.forEach(
          (deliveryPoint: { id: number; name: string; distance: number }) => {
            companyOptions.push({
              value: `${i.id}-${deliveryPoint.id}`,
              label: `${i[COMPANY_FIELD_CONSTANT.TEN_CONG_TY]} - ${
                deliveryPoint.name
              } -  ${deliveryPoint.distance}(km)`,
            });
          }
        );
      }
    });
  }

  const warehousesList = StoreDataService.getValue(StoreDataKeys.WAREHOUSES);
  let warehousesOptions: any[] = [];
  let stoneTypeOptions: any[] = [];
  if (Array.isArray(warehousesList)) {
    warehousesList.forEach(
      (i: {
        stocks: [{ stoneType: { name: string; id: number } }];
        name: string;
        id: number;
      }) => {
        warehousesOptions.push({
          label: i.name,
          value: i.id,
        });
        if (Array.isArray(i.stocks)) {
          i.stocks.forEach((stock) => {
            stoneTypeOptions.push({
              label: `${i.name} - ${stock.stoneType.name}`,
              value: `${i.id}-${stock.stoneType.id}`,
            });
          });
        }
      }
    );
  }
  const isDiDoi =
    record &&
    record[FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE] ===
      REVENUE_TYPE_VALUE.DI_DOI;
  return [
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.TRUCK_ID,
      iComponent: SharedSelect,
      label: 'Chọn Xe Tải',
      iParams: {
        dataSource: truckOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_DATE,
      iComponent: SharedDatePicker,
      label: 'Ngày Đến',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.FROM_TIME,
      iComponent: SharedTimePicker,
      label: 'Từ Giờ',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_TIME,
      iComponent: SharedTimePicker,
      label: 'Đến Giờ',
      iParams: {},
      className: 'col-4',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.STONE_TYPE_ID,
      iComponent: SharedSelect,
      label: 'Chọn Loại Đá',
      iParams: {
        dataSource: stoneTypeOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.MACHINERIES_ID,
      iComponent: SharedSelect,
      label: 'Chọn Vị Trí Lấy Đá',
      iParams: {
        dataSource: machineriesOptions,
        applyFieldValue: 'value',
      },
      className: 'col-6',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.REVENUE_TYPE,
      iComponent: SharedSelect,
      label: 'Doanh Thu',
      iParams: {
        dataSource: REVENUE_TYPE_OPTIONS,
        applyFieldValue: 'value',
      },
      className: 'col-12',
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.TO_WAREHOUSES_ID,
      iComponent: SharedSelect,
      label: 'Kho',
      iParams: {
        dataSource: warehousesOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
      defaultDisabled: !isDiDoi,
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.BUYER_COMPANY_ID,
      iComponent: SharedSelect,
      label: 'Công Ty Mua',
      iParams: {
        dataSource: companyOptions,
        applyFieldValue: 'value',
      },
      className: 'col-12',
      defaultDisabled: isDiDoi,
    },
    {
      fieldName: FIELD_DAN_SACH_XE_TAI_ADD_NEW.MO_TA,
      iComponent: SharedInputComponent,
      label: 'Mô Tả',
      iParams: {},
      className: 'col-12',
    },
  ];
}
