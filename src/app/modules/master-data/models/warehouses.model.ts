import { IBasicModel } from '../../base/models/basic-item.model';
import { ICompanyModel } from './company.model';
import { IStoneTypeModel } from './stone-type.model';

export interface IWarehousesModel extends IBasicModel {
  id: number;
  name: string; // e.g., Kho A, kho B
  company: ICompanyModel | null;
  stocks: IStockModel[];
  [key: string]: any;
}

export interface IStockModel extends IBasicModel {
  quantity: number; // Assume in KG or some unit
  warehouse: IWarehousesModel;
  stoneType: IStoneTypeModel;
}
