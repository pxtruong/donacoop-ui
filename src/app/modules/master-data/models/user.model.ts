import { IBasicModel } from '../../base/models/basic-item.model';
import { ICompanyModel } from './company.model';

export interface IUser extends IBasicModel {
  fullName: string;
  username: string;
  password: string;
  position: string; // Chức vụ, e.g., Quản lí, tài xế (though role might cover, but sheet has it separately)
  currentJob: string; // Công việc hiện tại
  personalEmail: string;
  personalPhone: string;
  address: string;
  city: string;
  company: ICompanyModel;
}
