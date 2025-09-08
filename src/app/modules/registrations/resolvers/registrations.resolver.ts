import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { RegistrationsService } from '../services/registrations.servies';
@Injectable({
  providedIn: 'root',
})
export class RegistrationsResolver implements Resolve<any> {
  constructor(private _registrationsService: RegistrationsService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.waitingForLoadPage();
    return true;
  }

  async waitingForLoadPage() {
    return new Promise((resolve, reject) => {
      forkJoin([this._registrationsService.getRegistrations()]).subscribe(
        ([registrations]) => {
          if (Array.isArray(registrations)) {
            StoreDataService.update(StoreDataKeys.REGISTRATIONS, registrations);
          }
          resolve(null);
        }
      );
    });
  }
}
