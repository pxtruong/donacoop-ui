import { IBasicModel } from '../../base/models/basic-item.model';

export interface IRoleModel extends IBasicModel {
  id: number;
  name: string;
  key: string;
}
