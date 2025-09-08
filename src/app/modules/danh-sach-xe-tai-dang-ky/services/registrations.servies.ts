import { Injectable } from '@angular/core';
import { HTTPService } from '../../../core/models/http-service.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

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
