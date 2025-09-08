import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/constants/route.constant';

export const TheoDoiHoatDongRoutes: Routes = [
  {
    path: ROUTE_CONSTANTS.PAGE.THEO_DOI_HOAT_DONG.PATH,
    loadComponent: () =>
      import(
        './components/theo-doi-hoat-dong.component/theo-doi-hoat-dong.component'
      ).then((m) => m.TheoDoiHoatDongComponent),
  },
];
