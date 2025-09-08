export enum MasterDataType {
  Company,
  User,
  Truck,
  Machineries,
  Warehouses,
  StoneType,
  Position,
}

export interface ICompany {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: string;
  email: string;
  postalCode: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}
