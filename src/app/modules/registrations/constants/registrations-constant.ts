export const REVENUE_TYPE_VALUE = {
  BAN_HANG: 'Bán Hàng',
  HANG_TON: 'Hàng Tồn',
  DI_DOI: 'Di Dời',
};
export const REVENUE_TYPE_OPTIONS = [
  {
    label: 'Bán Hàng',
    value: REVENUE_TYPE_VALUE.BAN_HANG,
  },
  {
    label: 'Hàng Tồn',
    value: REVENUE_TYPE_VALUE.HANG_TON,
  },
  {
    label: 'Di Dời',
    value: REVENUE_TYPE_VALUE.DI_DOI,
  },
];

export enum RegistrationStatus {
  PENDING = 'pending', // chưa vào cổng (vàng)
  ENTERED = 'entered', // mới vào cổng (xanh dương)
  EXITED = 'exited', // ra khỏi cổng (xanh lá)
  INACTIVE = 'inactive', // không hoạt động (đỏ)
}
