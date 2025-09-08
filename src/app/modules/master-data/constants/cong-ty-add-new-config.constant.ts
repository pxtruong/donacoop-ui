import { FormGroup } from '@angular/forms';
import { SharedInputComponent } from '../../../shared/components/shared-input/shared-input';
import { FIELD_CONG_TY_CONSTANT } from './field-cong-ty.constant';
const ADD_NEW_CONFIG_CONG_TY = [
  {
    fieldName: FIELD_CONG_TY_CONSTANT.TEN_CONG_TY,
    iComponent: SharedInputComponent,
    label: 'Tên Công Ty',
    iParams: {},
    className: 'col-12',
  },
  {
    fieldName: FIELD_CONG_TY_CONSTANT.EMAIL_CO_QUAN,
    iComponent: SharedInputComponent,
    label: 'Email Cơ Quan',
    iParams: {},
    className: 'col-6',
  },
  {
    fieldName: FIELD_CONG_TY_CONSTANT.SO_DIEN_THOAI_CO_QUAN,
    iComponent: SharedInputComponent,
    label: 'Số Điện Thoại Cơ Quan',
    iParams: {},
    className: 'col-6',
  },
  {
    fieldName: FIELD_CONG_TY_CONSTANT.DIA_CHI,
    iComponent: SharedInputComponent,
    label: 'Địa Chỉ',
    iParams: {},
    className: 'col-12',
  },
  {
    fieldName: FIELD_CONG_TY_CONSTANT.THANH_PHO,
    iComponent: SharedInputComponent,
    label: 'Thành Phố',
    iParams: {},
    className: 'col-6',
  },
  {
    fieldName: FIELD_CONG_TY_CONSTANT.MA_BUU_CHINH,
    iComponent: SharedInputComponent,
    label: 'Mã Bưu Chính',
    iParams: {},
    className: 'col-6',
  },
];

export function GET_ADD_NEW_CONFIG_CONG_TY(record: any, formGroup: FormGroup) {
  const configList = [...ADD_NEW_CONFIG_CONG_TY];
  // const length = configList.length;
  // let indexButton = 0;
  // for (let index = 0; index < length; index++) {
  //   const config = configList[index];
  //   if (config.fieldName === 'btnAccept') {
  //     indexButton = index;
  //     config.clickBTN = () => {
  //       const addMore: any = [
  //         {
  //           fieldName: `${FIELD_CONG_TY_CONSTANT.DIA_DIEM_GIAO_HANG}${indexButton}`,
  //           iComponent: SharedInputComponent,
  //           label: 'Địa Điểm Giao Hàng',
  //           iParams: {},
  //           className: 'col-6',
  //         },
  //         {
  //           fieldName: `${FIELD_CONG_TY_CONSTANT.QUANG_DUONG}${indexButton}`,
  //           iComponent: SharedInputComponent,
  //           label: 'Quảng Đường',
  //           iParams: {},
  //           className: 'col-6',
  //         },
  //       ];
  //       addMore.forEach((item: any) => {
  //         if (item.iParams) {
  //           formGroup.addControl(item.fieldName, new FormControl(undefined));
  //           item.iParams.iControl = formGroup.get(item.fieldName);
  //         }
  //       });

  //       configList.splice(indexButton, 0, ...addMore);
  //       indexButton += 2;
  //     };
  //     break;
  //   }
  // }

  return configList;
}

export function GET_ADD_MEW_DIEM_DEN(record: any, formGroup: FormGroup) {
  return [
    {
      fieldName: FIELD_CONG_TY_CONSTANT.DIA_DIEM_GIAO_HANG,
      iComponent: SharedInputComponent,
      label: 'Địa Điểm Giao Hàng',
      iParams: {},
      className: 'col-6',
    },
    {
      fieldName: FIELD_CONG_TY_CONSTANT.QUANG_DUONG,
      iComponent: SharedInputComponent,
      label: 'Quảng Đường',
      iParams: {},
      className: 'col-6',
    },
  ];
}
