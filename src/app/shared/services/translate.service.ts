import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HTTPService } from './../../core/models/http-service.model';

@Injectable({
  providedIn: 'root',
})
export class TranslateService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL + 'translate/';
  private _res: any = {};
  private _active: string = 'vn';
  public loadSuccessful: Subject<boolean> = new Subject();

  constructor(protected override _httpClient: HttpClient) {
    super(_httpClient);
  }

  // private _listLanguage: string[] = ['vn', 'en', 'th', 'ch-cz'];
  private _listLanguage: string[] = ['vn'];
  public initService() {
    let count = 0;
    this._listLanguage.forEach((language) => {
      ++count;
      this.get(language).subscribe((res) => {
        this._res[language] = res;
        --count;
        if (!count) {
          this._multiLanguageMerge();
          this.loadSuccessful.next(true);
        }
      });
    });
  }

  private _multiLanguageMerge() {
    // this._res['multi'] = {};
    // let multi = {};
    // for (const language in this._res) {
    //   console.log(this._res[language]);
    // }
  }

  get getLanguage() {
    return this._active;
  }

  set setLanguage(value: string) {
    this._active = value;
  }

  instantTooltip(key: string) {
    try {
      let temp: any = '';
      let _language = 'en';
      switch (this._active) {
        case 'en':
          _language = 'vn';
          break;

        default:
          break;
      }
      temp = this._res[_language];
      if (!temp) {
        return key;
      }
      key.split('.').forEach((field) => {
        temp = temp[field];
      });
      return temp;
    } catch (e) {}
    return '';
  }

  instant(key: string) {
    try {
      let temp: any;
      temp = this._res[this._active];
      if (!temp) {
        return key;
      }
      key.split('.').forEach((field) => {
        temp = temp[field];
      });
      return temp;
    } catch (e) {}
    return '';
  }
}
