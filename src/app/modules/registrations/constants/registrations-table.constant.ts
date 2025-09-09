import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { CustomDatePipe } from '../../../shared/pipes/date.pipe';
import { COMMON_FIELD } from '../../base/donacoop-base.component/constants/donacoop-base.constant';
import { COMPANY_FIELD_CONSTANT } from '../../master-data/constants/company-field.constant';
import { RegistrationStatus } from './registrations-constant';
import { REGISTRATIONS_FIELD } from './registrations-field.constant';
export function GET_TABLE_CONFIG_REGISTRATTIONS(): ITableConfig {
  const displayFn = (field: string, fieldName: string) => {
    return (value: any, args: any) => {
      if (!args[1] || !args[1][field]) {
        return '';
      }
      return args[1][field][fieldName];
    };
  };
  // #region binding struck
  const customBindingLicensePlate = new CustomBindingPipe();
  customBindingLicensePlate.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.BIEN_SO_XE
  );

  const customBindingCode = new CustomBindingPipe();
  customBindingCode.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.MA_SO_XE
  );

  const customBindingTruckType = new CustomBindingPipe();
  customBindingTruckType.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.LOAI_XE
  );

  const customBindingTruckGroup = new CustomBindingPipe();
  customBindingTruckGroup.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.GROUP
  );

  const customBindingTruckWeightMethod = new CustomBindingPipe();
  customBindingTruckWeightMethod.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.CAN_XAC
  );

  const customBindingTruckWeightPosition = new CustomBindingPipe();
  customBindingTruckWeightPosition.customFunction = displayFn(
    'truck',
    REGISTRATIONS_FIELD.VI_TRI_CAN
  );
  // #region binding stone type
  const customBindingStoneType = new CustomBindingPipe();
  customBindingStoneType.customFunction = displayFn(
    'stoneType',
    REGISTRATIONS_FIELD.NAME
  );

  // #region binding company
  const customBindingCompanyName = new CustomBindingPipe();
  customBindingCompanyName.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.TEN_CONG_TY
  );

  const customBindingCompanyAddress = new CustomBindingPipe();
  customBindingCompanyAddress.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.DIA_CHI
  );

  const customBindingCompanyEmail = new CustomBindingPipe();
  customBindingCompanyEmail.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.EMAIL_CO_QUAN
  );
  const customBindingCompanPhone = new CustomBindingPipe();
  customBindingCompanPhone.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.SO_DIEN_THOAI_CO_QUAN
  );

  const customBindingCompanyCity = new CustomBindingPipe();
  customBindingCompanyCity.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.THANH_PHO
  );

  const customBindingCompanyPostalcode = new CustomBindingPipe();
  customBindingCompanyPostalcode.customFunction = displayFn(
    'buyerCompany',
    COMPANY_FIELD_CONSTANT.MA_BUU_CHINH
  );
  // #region binding deploy point
  const customBindingDeployPoint = new CustomBindingPipe();
  customBindingDeployPoint.customFunction = displayFn(
    'destination',
    REGISTRATIONS_FIELD.NAME
  );
  const customBindingDeployDistance = new CustomBindingPipe();
  customBindingDeployDistance.customFunction = displayFn(
    'destination',
    REGISTRATIONS_FIELD.QUANG_DUONG
  );
  const customBindingDeployDescription = new CustomBindingPipe();
  customBindingDeployDescription.customFunction = displayFn(
    'destination',
    REGISTRATIONS_FIELD.MO_TA
  );

  // #region binding warehouses
  const customBindingOriginWarehouse = new CustomBindingPipe();
  customBindingOriginWarehouse.customFunction = displayFn(
    'originWarehouse',
    REGISTRATIONS_FIELD.NAME
  );

  const customBindingWarehouses = new CustomBindingPipe();
  customBindingWarehouses.customFunction = displayFn(
    'destinationWarehouse',
    REGISTRATIONS_FIELD.NAME
  );

  // #region machine
  const customBindingMachineries = new CustomBindingPipe();
  customBindingMachineries.customFunction = displayFn(
    'pickupPosition',
    REGISTRATIONS_FIELD.NAME
  );
  const pipeTime = new CustomDatePipe();
  pipeTime.formatDate = 'HH:mm';
  return {
    columns: [
      {
        field: REGISTRATIONS_FIELD.STT,
        columnTitle: 'Số Thứ Tự',
        sticky: true,
      },
      {
        field: REGISTRATIONS_FIELD.BIEN_SO_XE,
        columnTitle: 'Biển Số Xe',
        sticky: true,
        pipeValue: customBindingLicensePlate,
      },
      {
        field: REGISTRATIONS_FIELD.MA_SO_XE,
        columnTitle: 'Mã Số Xe',
        pipeValue: customBindingCode,
      },
      {
        field: REGISTRATIONS_FIELD.LOAI_XE,
        columnTitle: 'Loại Xe',
        pipeValue: customBindingTruckType,
      },
      {
        field: REGISTRATIONS_FIELD.GROUP,
        columnTitle: 'Group',
        pipeValue: customBindingTruckGroup,
      },
      {
        field: REGISTRATIONS_FIELD.CAN_XAC,
        columnTitle: 'Cân Xác',
        pipeValue: customBindingTruckWeightMethod,
      },
      {
        field: REGISTRATIONS_FIELD.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
        pipeValue: customBindingTruckWeightPosition,
      },
      {
        field: REGISTRATIONS_FIELD.NGAY_TOI,
        columnTitle: 'Ngày Tới',
        pipeValue: new CustomDatePipe(),
      },
      {
        field: REGISTRATIONS_FIELD.THOI_GIAN_TOI,
        columnTitle: 'Thời Gian Tới',
        // pipeValue: pipeTime,
      },
      {
        field: REGISTRATIONS_FIELD.KHO,
        columnTitle: 'Từ Kho',
        pipeValue: customBindingOriginWarehouse,
      },
      {
        field: REGISTRATIONS_FIELD.LOAI_DA,
        columnTitle: 'Loại Đá',
        pipeValue: customBindingStoneType,
      },
      {
        field: REGISTRATIONS_FIELD.VI_TRI_LAY_DA,
        columnTitle: 'Vị Trí Lấy Đá',
        pipeValue: customBindingMachineries,
      },
      {
        field: REGISTRATIONS_FIELD.DOANH_THU,
        columnTitle: 'Doanh Thu',
      },
      {
        field: REGISTRATIONS_FIELD.TO_KHO,
        columnTitle: 'Đến Kho',
        pipeValue: customBindingWarehouses,
      },
      {
        field: REGISTRATIONS_FIELD.CONG_TY_MUA,
        columnTitle: 'Công Ty Mua',
        pipeValue: customBindingCompanyName,
      },
      {
        field: REGISTRATIONS_FIELD.DIEM_DEN,
        columnTitle: 'Điểm Đến',
        pipeValue: customBindingDeployPoint,
      },
      {
        field: REGISTRATIONS_FIELD.DELIVERY_POINT_DESCRIPTION,
        columnTitle: 'Thông Tin Điểm Giao Hàng',
        pipeValue: customBindingDeployDescription,
      },
      {
        field: REGISTRATIONS_FIELD.QUANG_DUONG,
        columnTitle: 'Quãng Đường',
        pipeValue: customBindingDeployDistance,
      },
      {
        field: REGISTRATIONS_FIELD.EMAIL_CO_QUAN,
        columnTitle: 'Email Cơ Quan',
        pipeValue: customBindingCompanyEmail,
      },
      {
        field: REGISTRATIONS_FIELD.DIEN_THOAI_CO_QUAN,
        columnTitle: 'Điện Thoại Cơ Quan',
        minWidth: 160,
        pipeValue: customBindingCompanPhone,
      },
      {
        field: REGISTRATIONS_FIELD.DIA_CHI,
        columnTitle: 'Địa Chỉ',
        pipeValue: customBindingCompanyAddress,
      },
      {
        field: REGISTRATIONS_FIELD.THANH_PHO,
        columnTitle: 'Thành Phố',
        pipeValue: customBindingCompanyCity,
      },
      {
        field: REGISTRATIONS_FIELD.MA_BUU_CHINH,
        columnTitle: 'Mã Bưu Chính',
        pipeValue: customBindingCompanyPostalcode,
      },
      {
        field: REGISTRATIONS_FIELD.MO_TA,
        columnTitle: 'Mô Tả',
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
              iIcon: 'block',
              iCustomClass: 'border-none',
              iColorIcon: 'warn',
              cbShow: (record: any) => {
                return record.registrationStatus === RegistrationStatus.PENDING;
              },
            },
            {
              iIcon: 'flash_on',
              iCustomClass: 'border-none',
              iColorIcon: 'primary',
              cbShow: (record: any) => {
                return (
                  record.registrationStatus === RegistrationStatus.INACTIVE
                );
              },
            },
          ],
        },
      },
    ],

    dataSource: [{}],
    displayedColumns: [
      REGISTRATIONS_FIELD.STT,
      REGISTRATIONS_FIELD.BIEN_SO_XE,
      REGISTRATIONS_FIELD.MA_SO_XE,
      REGISTRATIONS_FIELD.LOAI_XE,
      REGISTRATIONS_FIELD.GROUP,
      REGISTRATIONS_FIELD.CAN_XAC,
      REGISTRATIONS_FIELD.VI_TRI_CAN,
      REGISTRATIONS_FIELD.NGAY_TOI,
      REGISTRATIONS_FIELD.THOI_GIAN_TOI,
      REGISTRATIONS_FIELD.KHO,
      REGISTRATIONS_FIELD.LOAI_DA,
      REGISTRATIONS_FIELD.VI_TRI_LAY_DA,
      REGISTRATIONS_FIELD.DOANH_THU,
      REGISTRATIONS_FIELD.TO_KHO,
      REGISTRATIONS_FIELD.CONG_TY_MUA,
      REGISTRATIONS_FIELD.DIEM_DEN,
      REGISTRATIONS_FIELD.DELIVERY_POINT_DESCRIPTION,
      REGISTRATIONS_FIELD.QUANG_DUONG,
      REGISTRATIONS_FIELD.EMAIL_CO_QUAN,
      REGISTRATIONS_FIELD.DIEN_THOAI_CO_QUAN,
      REGISTRATIONS_FIELD.DIA_CHI,
      REGISTRATIONS_FIELD.THANH_PHO,
      REGISTRATIONS_FIELD.MA_BUU_CHINH,
      REGISTRATIONS_FIELD.MO_TA,
      COMMON_FIELD.ACTION,
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
