import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  HTTPService,
  IResponsePaging,
} from '../../../core/models/http-service.model';
import {
  IBasicModel,
  IRequestPaging,
} from '../../base/models/basic-item.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationsService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL;
  constructor(protected override _httpClient: HttpClient) {
    super(_httpClient);
  }
  // #region company
  public getRegistrations() {
    return this.get('/registrations').pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public getRegistrationsPaging(pagination: IRequestPaging) {
    const queryString = new URLSearchParams(pagination).toString();
    return this.get(`/registrations?${queryString}`).pipe(
      map((res: IResponsePaging<IBasicModel>) => {
        return res;
      })
    );
  }

  public createRegistrations(data: any) {
    return this.post('/registrations', data);
  }

  public updateRegistrations(id: any, data: any) {
    return this.put(`/registrations/${id}`, data);
  }
  public deleteRegistrations(id: any) {
    return this.delete(`/registrations`, id);
  }
}
