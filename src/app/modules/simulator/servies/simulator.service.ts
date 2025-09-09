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
  public enterGate(licensePlate: string) {
    return this.post('/activities/enter-gate', { licensePlate }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public exitGate(licensePlate: string) {
    return this.post('/activities/exit-gate', { licensePlate }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public weightStation(data: {
    licensePlate: string | undefined | null;
    weight: string | undefined | null;
    stoneTypeId: string | undefined | null;
    weighStation: string | undefined | null;
  }) {
    return this.post('/activities/weigh-station', data).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
