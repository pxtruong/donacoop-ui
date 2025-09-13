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
export class ActivitiesService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL;
  constructor(protected override _httpClient: HttpClient) {
    super(_httpClient);
  }
  public getActivities() {
    return this.get('/activities').pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public getActivitiesPaging(pagination: IRequestPaging) {
    const queryString = new URLSearchParams(pagination).toString();
    return this.get(`/registrations?${queryString}`).pipe(
      map((res: IResponsePaging<IBasicModel>) => {
        return res;
      })
    );
  }

  public createActivities(data: any) {
    return this.post('/activities', data);
  }

  public updateActivities(id: any, data: any) {
    return this.put(`/activities/${id}`, data);
  }
  public deleteActivities(id: any) {
    return this.delete(`/activities`, id);
  }
}
