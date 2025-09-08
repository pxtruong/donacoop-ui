import { Injectable } from '@angular/core';
import { HTTPService } from '../../../core/models/http-service.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

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
