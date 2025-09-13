import { IBasicModel } from '../../base/models/basic-item.model';

export interface IStoneTypeModel extends IBasicModel {
  name: string; // e.g., Đá 1x2, Đá 10x16, Đá mi sàng, Đá mi bụi, Đá 0x4, Đá nguyên liệu
  createdAt: Date;
  updatedAt: Date;
}
