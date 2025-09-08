import { SnackType } from '../enum/snack-type';

export interface ISnackDetail {
  message: string;
  type: SnackType;
  timeout?: number;
}
