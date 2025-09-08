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
export class CompanyResolver implements Resolve<any> {
  constructor(private _masterDataService: MasterDataService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    await this.waitingForLoadPage();
    return true;
  }

  async waitingForLoadPage() {
    return new Promise((resolve, reject) => {
      forkJoin([this._masterDataService.getCompanyList()]).subscribe(
        ([companyList]) => {
          if (Array.isArray(companyList)) {
            StoreDataService.update(StoreDataKeys.COMPANY_LIST, companyList);
          }
          resolve(null);
        }
      );
    });
  }
}
