import { Injectable } from '@angular/core';
import { HTTPService } from '../../../core/models/http-service.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL;
  constructor(protected override _httpClient: HttpClient) {
    super(_httpClient);
  }
  // #region company
  public getSimulator() {
    return this.get('/simulator').pipe(
      map((res) => {
        return res.data;
      })
    );
  }

  public createSimulator(data: any) {
    return this.post('/simulator', data);
  }

  public updateSimulator(id: any, data: any) {
    return this.put(`/simulator/${id}`, data);
  }
  public deleteSimulator(id: any) {
    return this.delete(`/simulator`, id);
  }
}
