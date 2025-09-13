import { IBasicModel } from '../../base/models/basic-item.model';
import { ICompanyModel } from './company.model';
import { IUser } from './user.model';

export interface ITruck extends IBasicModel {
  licensePlate: string; // e.g., 60C-11111
  code: string; // e.g., 001
  type: string; // e.g., Shacman, Kamaz
  group: string; // e.g., Group1, Group2
  weighingMethod: string; // e.g., Cân mỗi đầu ngày, Cân 1 lần, Cân mỗi chuyến
  weighingPosition: string; // e.g., Cân 2
  allowedLoad: number; // e.g., 21000 (KG?)
  description: string;
  company: ICompanyModel;
  driver: IUser | null;
}
