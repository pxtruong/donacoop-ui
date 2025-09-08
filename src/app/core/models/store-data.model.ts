import { BehaviorSubject } from 'rxjs';
export enum StoreDataKeys {
  IS_LOADING = 'IS_LOADING',
  COMPANY_LIST = 'COMPANY_LIST',
  ROLE_LIST = 'ROLE_LIST',
  STONE_TYPE = 'STONE_TYPE',
  TRUCK_LIST = 'TRUCK_LIST',
  WAREHOUSES = 'WAREHOUSES',
  MACHINERIES = 'MACHINERIES',
  USER_LIST = 'USER_LIST',
}
export class ISubcribeStore {
  [key: string]: BehaviorSubject<any>;
  IS_LOADING!: BehaviorSubject<boolean>;
  COMPANY_LIST!: BehaviorSubject<any>;
  ROLE_LIST!: BehaviorSubject<any>;
  STONE_TYPE!: BehaviorSubject<any>;
  TRUCK_LIST!: BehaviorSubject<any>;
  WAREHOUSES!: BehaviorSubject<any>;
  MACHINERIES!: BehaviorSubject<any>;
  USER_LIST!: BehaviorSubject<any>;
  constructor() {
    this.IS_LOADING = new BehaviorSubject<boolean>(false);
    this.COMPANY_LIST = new BehaviorSubject<any>(null);
    this.ROLE_LIST = new BehaviorSubject<any>(null);
    this.STONE_TYPE = new BehaviorSubject<any>(null);
    this.TRUCK_LIST = new BehaviorSubject<any>(null);
    this.WAREHOUSES = new BehaviorSubject<any>(null);
    this.MACHINERIES = new BehaviorSubject<any>(null);
    this.USER_LIST = new BehaviorSubject<any>(null);
  }
}
