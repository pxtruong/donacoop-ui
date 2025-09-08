import { Injectable } from '@angular/core';
import { ISubcribeStore, StoreDataKeys } from '../models/store-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreDataService {
  static dataStore: ISubcribeStore = new ISubcribeStore();

  static getSubcribe(key: StoreDataKeys) {
    return this.dataStore[key].asObservable();
  }

  static update(key: StoreDataKeys, value: any) {
    if (this.dataStore[key]) {
      this.dataStore[key].next(value);
    } else {
      this.dataStore[key] = new BehaviorSubject<any>(value);
    }
  }

  static getValue(key: StoreDataKeys): any {
    return this.dataStore[key] ? this.dataStore[key].getValue() : null;
  }
}
