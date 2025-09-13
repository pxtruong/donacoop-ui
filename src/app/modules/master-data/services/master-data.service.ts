import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  HTTPService,
  IResponsePaging,
} from '../../../core/models/http-service.model';
import { ICompanyModel } from '../models/company.model';
import { IMachineriesModel } from '../models/machineries.model';
import { ITruck } from '../models/truck.model';
import { IUser } from '../models/user.model';
import { IWarehousesModel } from '../models/warehouses.model';
import { IStoneTypeModel } from '../models/stone-type.model';
import { IRoleModel } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL;
  constructor(protected override _httpClient: HttpClient) {
    super(_httpClient);
  }
  // #region company
  public getCompanyList() {
    return this.get('/companies').pipe(
      map((res: IResponsePaging<ICompanyModel>) => {
        return res;
      })
    );
  }

  public createCompany(data: any) {
    return this.post('/companies', data);
  }

  public updateCompany(id: any, data: any) {
    return this.put(`/companies/${id}`, data);
  }
  public deleteCompany(id: any) {
    return this.delete(`/companies`, id);
  }

  public createDeliveryPoints(data: any) {
    return this.post(`/delivery_points`, data);
  }
  public updateDeliveryPoints(id: any, data: any) {
    return this.put(`/delivery_points/${id}`, data);
  }
  public deleteDeliveryPoints(id: any) {
    return this.delete(`/delivery_points`, id);
  }

  // #region user
  public getUserList() {
    return this.get('/users').pipe(
      map((res: IResponsePaging<IUser>) => {
        return res;
      })
    );
  }
  public createUser(data: any) {
    return this.post('/users', data);
  }

  public updateUser(id: any, data: any) {
    return this.put(`/users/${id}`, data);
  }
  public deleteUser(id: any) {
    return this.delete(`/users`, id);
  }

  // #region truck
  public getTruckList() {
    return this.get('/trucks').pipe(
      map((res: IResponsePaging<ITruck>) => {
        return res;
      })
    );
  }
  public createTruck(data: any) {
    return this.post('/trucks', data);
  }

  public updateTruck(id: any, data: any) {
    return this.put(`/trucks/${id}`, data);
  }
  public deleteTruck(id: any) {
    return this.delete(`/trucks`, id);
  }

  // #region Machineries
  public getMachineries() {
    return this.get('/machineries').pipe(
      map((res: IResponsePaging<IMachineriesModel>) => {
        return res;
      })
    );
  }
  public createMachineries(data: any) {
    return this.post('/machineries', data);
  }

  public updateMachineries(id: any, data: any) {
    return this.put(`/machineries/${id}`, data);
  }
  public deleteMachineries(id: any) {
    return this.delete(`/machineries`, id);
  }
  // #region Warehouses
  public getWarehouses() {
    return this.get('/warehouses').pipe(
      map((res: IResponsePaging<IWarehousesModel>) => {
        return res;
      })
    );
  }
  public createWarehouses(data: any) {
    return this.post('/warehouses', data);
  }

  public updateWarehouses(id: any, data: any) {
    return this.put(`/warehouses/${id}`, data);
  }
  public deleteWarehouses(id: any) {
    return this.delete(`/warehouses`, id);
  }

  // #region stocky
  public createStock(data: any) {
    return this.post('/stocks', data);
  }
  public updateStock(id: any, data: any) {
    return this.put(`/stocks/${id}`, data);
  }

  // #region Stone Type
  public getStoneType() {
    return this.get('/stone_types').pipe(
      map((res: IResponsePaging<IStoneTypeModel>) => {
        return res;
      })
    );
  }
  public createStoneType(data: any) {
    return this.post('/stone_types', data);
  }

  public updateStoneType(id: any, data: any) {
    return this.put(`/stone_types/${id}`, data);
  }
  public deleteStoneType(id: any) {
    return this.delete(`/stone_types`, id);
  }

  // #region role
  public getRoles() {
    return this.get('/roles').pipe(
      map((res: IResponsePaging<IRoleModel>) => {
        return res;
      })
    );
  }
  public createRoles(data: any) {
    return this.post('/roles', data);
  }

  public updateRoles(id: any, data: any) {
    return this.put(`/roles/${id}`, data);
  }
  public deleteRoles(id: any) {
    return this.delete(`/roles`, id);
  }
}
