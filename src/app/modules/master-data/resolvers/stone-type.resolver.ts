import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { StoreDataKeys } from '../../../core/models/store-data.model';
import { StoreDataService } from '../../../core/services/store-data.service';
import { MasterDataService } from '../services/master-data.service';

@Injectable({
  providedIn: 'root',
})
export class StoneTypeResolver implements Resolve<any> {
  constructor(private _masterDataService: MasterDataService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.waitingForLoadPage();
    return true;
  }

  async waitingForLoadPage() {
    return new Promise((resolve, reject) => {
      forkJoin([this._masterDataService.getStoneType()]).subscribe(([res]) => {
        if (Array.isArray(res.data)) {
          StoreDataService.update(StoreDataKeys.STONE_TYPE, res.data);
        }
        resolve(null);
      });
    });
  }
}
