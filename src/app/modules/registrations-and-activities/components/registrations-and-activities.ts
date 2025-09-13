import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BaseLayoutComponent } from '../../../core/components/base-layout.component/base-layout.component';
import { DonacoopBaseComponent } from '../../base/donacoop-base.component/donacoop-base.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { filter } from 'rxjs';
import { ROUTE_CONSTANTS } from '../../../shared/constants/route.constant';

@Component({
  selector: 'registrations-and-activities',
  imports: [BaseLayoutComponent, MatTabsModule, MatIconModule, RouterOutlet],
  templateUrl: './registrations-and-activities.html',
  styleUrl: './registrations-and-activities.scss',
  standalone: true,
})
export class RegistrationsAndActivities extends DonacoopBaseComponent {
  public selectedTab: number = 0;

  constructor(
    private _router: Router,
    protected override _dialog: MatDialog,
    protected override _builder: FormBuilder
  ) {
    super(_dialog, _builder);
    this.subcribe(
      this._router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ),
      (event) => {
        this.logLevel.debug('URL changed to:', event.urlAfterRedirects);
        this._detectURL(event.urlAfterRedirects);
      }
    );
    this._detectURL(this._router.url);
  }

  public tabChange(tabIndex: number) {
    if (tabIndex === 0) {
      this._router.navigate([
        ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
          .DS_XE_TAI_DANG_KY.FULL_PATH,
      ]);
      return;
    }
    this._router.navigate([
      ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
        .THEO_DOI_HOAT_DONG.FULL_PATH,
    ]);
  }

  private _detectURL(url: string) {
    this.logLevel.debug(
      '/' +
        ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
          .THEO_DOI_HOAT_DONG.FULL_PATH,
      '/' +
        ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
          .DS_XE_TAI_DANG_KY.FULL_PATH
    ),
      url;
    if (
      url.includes(
        '/' +
          ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
            .THEO_DOI_HOAT_DONG.FULL_PATH
      )
    ) {
      this.selectedTab = 1;
      return;
    }
    if (
      url.includes(
        '/' +
          ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
            .DS_XE_TAI_DANG_KY.FULL_PATH
      )
    ) {
      this.selectedTab = 0;
      return;
    }
    this._router.navigate([
      ROUTE_CONSTANTS.QUARRY.REGISTRATION_AND_ACTIVITIES.CHILDREN
        .DS_XE_TAI_DANG_KY.FULL_PATH,
    ]);
  }
}
