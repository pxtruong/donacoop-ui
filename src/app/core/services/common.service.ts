import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';
import { Loading } from '../components/loading/loading';
import { HTTPService } from '../models/http-service.model';
import { StoreDataKeys } from '../models/store-data.model';
import { StoreDataService } from './store-data.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService extends HTTPService {
  protected override _apiBaseURL: string = environment.apiURL;
  private _countSpinner = 0;
  private _spinnerRef: any;
  constructor(
    private _dialog: MatDialog,
    protected override _httpClient: HttpClient
  ) {
    super(_httpClient);
  }

  public showSpinner() {
    ++this._countSpinner;
    if (this._countSpinner > 1) {
      return;
    }
    // Update the loading state in the store
    // This is useful for components that need to react to loading state changes
    StoreDataService.update(StoreDataKeys.IS_LOADING, true);

    this._spinnerRef = this._dialog.open(Loading, {
      panelClass: ['loading-spinner'],
      disableClose: true,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }

  public hideSpinner() {
    --this._countSpinner;
    if (!this._countSpinner && this._spinnerRef) {
      // Reset the loading state in the store
      // This ensures that the loading state is cleared when the spinner is closed
      StoreDataService.update(StoreDataKeys.IS_LOADING, false);
      this._spinnerRef.close();
    }
  }
}
