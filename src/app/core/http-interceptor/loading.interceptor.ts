import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BasicExtends } from '../../shared/models/basic-extends.model';
import { CommonService } from '../services/common.service';
import { StoreDataService } from '../services/store-data.service';
import { StoreDataKeys } from '../models/store-data.model';

@Injectable()
export class LoadingInterceptor
  extends BasicExtends
  implements HttpInterceptor
{
  private _exclude = [];

  constructor(private _commonService: CommonService) {
    super();
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.isException(request.url)) {
      this._commonService.showSpinner();
    }
    return next.handle(request).pipe(
      finalize(() => {
        if (!this.isException(request.url)) {
          this._commonService.hideSpinner();
        }
      })
    );
  }

  private isException(url: string) {
    for (const request of this._exclude) {
      if (new RegExp(request).test(url)) {
        return true;
      }
    }
    return false;
  }
}
