import { DatePipe } from '@angular/common';
import { SharedAction } from '../../../shared/components/shared-action/shared-action';
import { ITableConfig } from '../../../shared/models/table.model';
import { CustomBindingPipe } from '../../../shared/pipes/custom-binding.pipe';
import { FIELD_CONG_TY_CONSTANT } from '../../master-data/constants/field-cong-ty.constant';
import { FIELD_DANH_SACH_XE_TAI_DANG_KY } from './field-danh-sach-xe-tai-dang-ky.constant';
import { CustomDatePipe } from '../../../shared/pipes/date.pipe';
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
    FIELD_DANH_SACH_XE_TAI_DANG_KY.BIEN_SO_XE
  );

  const customBindingCode = new CustomBindingPipe();
  customBindingCode.customFunction = displayFn(
    'truck',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.MA_SO_XE
  );

  const customBindingTruckType = new CustomBindingPipe();
  customBindingTruckType.customFunction = displayFn(
    'truck',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.LOAI_XE
  );

  const customBindingTruckGroup = new CustomBindingPipe();
  customBindingTruckGroup.customFunction = displayFn(
    'truck',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.GROUP
  );

  const customBindingTruckWeightMethod = new CustomBindingPipe();
  customBindingTruckWeightMethod.customFunction = displayFn(
    'truck',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.CAN_XAC
  );

  const customBindingTruckWeightPosition = new CustomBindingPipe();
  customBindingTruckWeightPosition.customFunction = displayFn(
    'truck',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.VI_TRI_CAN
  );
  // #region binding stone type
  const customBindingStoneType = new CustomBindingPipe();
  customBindingStoneType.customFunction = displayFn(
    'stoneType',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.NAME
  );

  // #region binding company
  const customBindingCompanyName = new CustomBindingPipe();
  customBindingCompanyName.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.TEN_CONG_TY
  );

  const customBindingCompanyAddress = new CustomBindingPipe();
  customBindingCompanyAddress.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.DIA_CHI
  );

  const customBindingCompanyEmail = new CustomBindingPipe();
  customBindingCompanyEmail.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.EMAIL_CO_QUAN
  );
  const customBindingCompanPhone = new CustomBindingPipe();
  customBindingCompanPhone.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.SO_DIEN_THOAI_CO_QUAN
  );

  const customBindingCompanyCity = new CustomBindingPipe();
  customBindingCompanyCity.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.THANH_PHO
  );

  const customBindingCompanyPostalcode = new CustomBindingPipe();
  customBindingCompanyPostalcode.customFunction = displayFn(
    'buyerCompany',
    FIELD_CONG_TY_CONSTANT.MA_BUU_CHINH
  );
  // #region binding deploy point
  const customBindingDeployPoint = new CustomBindingPipe();
  customBindingDeployPoint.customFunction = displayFn(
    'destination',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.NAME
  );
  const customBindingDeployDistance = new CustomBindingPipe();
  customBindingDeployDistance.customFunction = displayFn(
    'destination',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.QUANG_DUONG
  );

  // #region binding warehouses
  const customBindingWarehouses = new CustomBindingPipe();
  customBindingWarehouses.customFunction = displayFn(
    'destinationWarehouse',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.NAME
  );

  // #region machine
  const customBindingMachineries = new CustomBindingPipe();
  customBindingMachineries.customFunction = displayFn(
    'pickupPosition',
    FIELD_DANH_SACH_XE_TAI_DANG_KY.NAME
  );
  const pipeTime = new CustomDatePipe();
  pipeTime.formatDate = 'HH:mm';
  return {
    columns: [
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.STT,
        columnTitle: 'Số Thứ Tự',
        sticky: true,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.BIEN_SO_XE,
        columnTitle: 'Biển Số Xe',
        sticky: true,
        pipeValue: customBindingLicensePlate,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.MA_SO_XE,
        columnTitle: 'Mã Số Xe',
        pipeValue: customBindingCode,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.LOAI_XE,
        columnTitle: 'Loại Xe',
        pipeValue: customBindingTruckType,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.GROUP,
        columnTitle: 'Group',
        pipeValue: customBindingTruckGroup,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.CAN_XAC,
        columnTitle: 'Cân Xác',
        pipeValue: customBindingTruckWeightMethod,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.VI_TRI_CAN,
        columnTitle: 'Vị Trí Cân',
        pipeValue: customBindingTruckWeightPosition,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.NGAY_TOI,
        columnTitle: 'Ngày Tới',
        pipeValue: new CustomDatePipe(),
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.THOI_GIAN_TOI,
        columnTitle: 'Thời Gian Tới',
        pipeValue: pipeTime,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.KHO,
        columnTitle: 'Từ Kho',
        pipeValue: customBindingWarehouses,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.LOAI_DA,
        columnTitle: 'Loại Đá',
        pipeValue: customBindingStoneType,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.VI_TRI_LAY_DA,
        columnTitle: 'Vị Trí Lấy Đá',
        pipeValue: customBindingMachineries,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.DOANH_THU,
        columnTitle: 'Doanh Thu',
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.TO_KHO,
        columnTitle: 'Đến Kho',
        pipeValue: customBindingWarehouses,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.CONG_TY_MUA,
        columnTitle: 'Công Ty Mua',
        pipeValue: customBindingCompanyName,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.DIEM_DEN,
        columnTitle: 'Điểm Đến',
        pipeValue: customBindingDeployPoint,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.QUANG_DUONG,
        columnTitle: 'Quãng Đường',
        pipeValue: customBindingDeployDistance,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.EMAIL_CO_QUAN,
        columnTitle: 'Email Cơ Quan',
        pipeValue: customBindingCompanyEmail,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.DIEN_THOAI_CO_QUAN,
        columnTitle: 'Điện Thoại Cơ Quan',
        minWidth: 160,
        pipeValue: customBindingCompanPhone,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.DIA_CHI,
        columnTitle: 'Địa Chỉ',
        pipeValue: customBindingCompanyAddress,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.THANH_PHO,
        columnTitle: 'Thành Phố',
        pipeValue: customBindingCompanyCity,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.MA_BUU_CHINH,
        columnTitle: 'Mã Bưu Chính',
        pipeValue: customBindingCompanyPostalcode,
      },
      {
        field: FIELD_DANH_SACH_XE_TAI_DANG_KY.MO_TA,
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
      FIELD_DANH_SACH_XE_TAI_DANG_KY.STT,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.BIEN_SO_XE,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.MA_SO_XE,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.LOAI_XE,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.GROUP,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.CAN_XAC,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.VI_TRI_CAN,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.NGAY_TOI,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.THOI_GIAN_TOI,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.KHO,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.LOAI_DA,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.VI_TRI_LAY_DA,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.DOANH_THU,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.TO_KHO,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.CONG_TY_MUA,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.DIEM_DEN,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.QUANG_DUONG,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.EMAIL_CO_QUAN,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.DIEN_THOAI_CO_QUAN,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.DIA_CHI,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.THANH_PHO,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.MA_BUU_CHINH,
      FIELD_DANH_SACH_XE_TAI_DANG_KY.MO_TA,
      'actioncolumn',
    ],
    pageSizeOptions: [5, 10, 25, 100],
    pageSize: 10,
    length: 0,
    isLoading: false,
  };
}
