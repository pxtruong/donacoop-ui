import { IBasicModel } from '../../base/models/basic-item.model';
import { ICompanyModel } from './company.model';
import { IUser } from './user.model';

export interface IMachineriesModel extends IBasicModel {
  name: string; // e.g., Xe xúc 1, Xe cuốc
  account: string; // e.g., xexuc1
  password: string; // e.g., mkxexuc1 (consider hashing if sensitive)
  description: string;
  company: ICompanyModel;
  driver: IUser;
}
