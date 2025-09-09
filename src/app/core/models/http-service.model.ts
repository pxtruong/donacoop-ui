import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BasicExtends } from '../../shared/models/basic-extends.model';
export class HTTPService extends BasicExtends {
  protected _apiBaseURL: string = '';
  constructor(protected _httpClient: HttpClient) {
    super();
  }

  protected get(path: string) {
    return this._httpClient.get<IRes>(this._apiBaseURL + path).pipe(
      map((res: IRes) => {
        try {
          this.logLevel.debug(`GET ${this._apiBaseURL + path}`, res);
          return this._handleSuccess(res);
        } catch (e) {
          return null;
        }
      })
    );
  }
  protected getWithResponse(path: string, options?: any) {
    return this._httpClient.get<IRes>(this._apiBaseURL + path, options).pipe(
      map((res: any) => {
        try {
          this.logLevel.debug(`GET ${this._apiBaseURL + path}`, res);
          return res;
        } catch (e) {
          return null;
        }
      })
    );
  }

  private _handleSuccess(_res: any) {
    try {
      this.logLevel.debug(`Response data: `, _res);
      return _res;
    } catch (e) {
      return null;
    }
  }

  protected post(path: string, data: any, options?: any) {
    this.logLevel.debug(`Rquest data: `, data);
    return this._httpClient.post(this._apiBaseURL + path, data, options).pipe(
      map((res: any) => {
        try {
          this.logLevel.debug(`POST ${this._apiBaseURL + path}`, res);
          return this._handleSuccess(res);
        } catch (e) {
          return null;
        }
      })
    );
  }

  protected delete(path: string, id: string | number) {
    return this._httpClient.delete(`${this._apiBaseURL + path}/${id}`).pipe(
      map((res: any) => {
        try {
          this.logLevel.debug(`POST ${this._apiBaseURL + path}`, res);
          return this._handleSuccess(res);
        } catch (e) {
          return null;
        }
      })
    );
  }

  protected put(path: string, data: any) {
    this.logLevel.debug(`Rquest data: `, data);
    return this._httpClient.put(this._apiBaseURL + path, data).pipe(
      map((res: any) => {
        try {
          this.logLevel.debug(`PUT ${this._apiBaseURL + path}`, res);
          return this._handleSuccess(res);
        } catch (e) {
          return null;
        }
      })
    );
  }
}

export interface IRes {
  [key: string]: any;
}

export interface IResponsePaging<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
