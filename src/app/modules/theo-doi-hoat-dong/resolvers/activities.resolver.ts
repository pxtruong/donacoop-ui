import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { ActivitiesService } from '../services/activities.services';
@Injectable({
  providedIn: 'root',
})
export class ActivitiesResolver implements Resolve<any> {
  constructor(protected _activitiesService: ActivitiesService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.waitingForLoadPage();
    return true;
  }

  async waitingForLoadPage() {
    return new Promise((resolve, reject) => {
      forkJoin([this._activitiesService.getActivities()]).subscribe(
        ([activities]) => {
          if (Array.isArray(activities)) {
            StoreDataService.update(StoreDataKeys.ACTIVITIES, activities);
          }
          resolve(null);
        }
      );
    });
  }
}
