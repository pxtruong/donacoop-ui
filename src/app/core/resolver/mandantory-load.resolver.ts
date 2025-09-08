import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { forkJoin } from 'rxjs';
import { MasterDataService } from '../../modules/master-data/services/master-data.service';
import { StoreDataKeys } from '../models/store-data.model';
import { StoreDataService } from '../services/store-data.service';

@Injectable({
  providedIn: 'root',
})
export class MandantoryResolver implements Resolve<any> {
  constructor(private _masterDataService: MasterDataService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.waitingForLoadPage();
    return true;
  }

  async waitingForLoadPage() {
    return new Promise((resolve, reject) => {
      forkJoin([
        this._masterDataService.getRoles(),
        this._masterDataService.getCompanyList(),
      ]).subscribe(([roleList, companyList]) => {
        StoreDataService.update(StoreDataKeys.ROLE_LIST, roleList);
        if (Array.isArray(companyList)) {
          StoreDataService.update(StoreDataKeys.COMPANY_LIST, companyList);
        }
        resolve(null);
      });
    });
  }
}
