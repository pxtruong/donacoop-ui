import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseComponent } from '../components/base/base.component';
import { SnackType } from '../enum/snack-type';
import { SnackService } from '../services/snack.service';

@Injectable()
export class AppHttpInterceptor
  extends BaseComponent
  implements HttpInterceptor
{
  private _showURLList = [];
  constructor(protected _snackService: SnackService) {
    super();
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error.message) {
          this._snackService.showSnack({
            type: SnackType.Error,
            message: error.error.message,
          });
        }
        return throwError(error);
      }),
      tap((event) => {
        if (event instanceof HttpResponse) {
          if (this._includeShowSnack(request.url)) {
            this._snackService.showSnack({
              type: SnackType.Success,
              message: 'common.success.successfull',
            });
          }
        }
      })
    );
  }

  private _includeShowSnack(url: string) {
    const length = this._showURLList.length;
    for (let index = 0; index < length; index++) {
      const item = this._showURLList[index];
      if (new RegExp(`${item}`, 'g').test(url)) {
        return true;
      }
    }
    return false;
  }
}
