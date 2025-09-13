export interface ICompanyModel {
  id: number;
  address: string;
  city: string;
  email: string;
  name: string;
  phone: string;
  postalCode: string;
  updatedAt: string;
  createdAt: string;
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

export interface IDeliveryPoint {
  id: number;
  name: string; // e.g., điểm A, điểm B
  description: string; // Thông tin điểm giao hàng
  distance: number; // km
  company: ICompanyModel;
  createdAt: string;
  updatedAt: string;
}
export interface IEditDeliveryPoint {
  [key: string]: any;
  companyId?: number;
  id?: number;
  name: string; // e.g., điểm A, điểm B
  description: string; // Thông tin điểm giao hàng
  distance: number; // km
}
