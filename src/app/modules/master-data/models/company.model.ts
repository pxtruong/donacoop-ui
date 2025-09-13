import { IBasicModel } from '../../base/models/basic-item.model';

export interface ICompanyModel extends IBasicModel {
  address: string;
  city: string;
  email: string;
  name: string;
  phone: string;
  postalCode: string;
  type: string; // 'seller', 'buyer', 'other' based on CTY Dona/Mua/khác
  deliveryPoints: any[];
  [key: string]: any;
}

// for update, create company
export interface IRequestCompany {
  [key: string]: any;
  name: string;
  address?: string;
  phone?: string;
  city?: string;
  email?: string;
  postalCode?: string;
  type?: string; // seller, buyer, other
  deliveryPoints: [];
}

export interface IDeliveryPoint extends IBasicModel {
  name: string; // e.g., điểm A, điểm B
  description: string; // Thông tin điểm giao hàng
  distance: number; // km
  company: ICompanyModel;
}
export interface IEditDeliveryPoint {
  [key: string]: any;
  companyId?: number;
  id?: number;
  name: string; // e.g., điểm A, điểm B
  description: string; // Thông tin điểm giao hàng
  distance: number; // km
}
